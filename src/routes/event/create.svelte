<script lang="ts" context="module">
    export async function preload(page, session) {
        const countryRequest = await this.fetch("api/public/country");
        const countries = await countryRequest.json();
        return { countries };
    }
</script>

<script lang="ts">
    import axios from "axios";
    import { onMount } from "svelte";
    import { goto } from "@sapper/app";
    import type { ICountry, IState, ICity } from "country-state-city";
    import type { Ievent } from "../../Models/event";
    import type { Iuser } from "../../Models/common";
    import { RETRIEVE_USER } from "../../Models/browserFunction";
    let event: Ievent = {};
    let files;
    let myImage;
    let states: Array<IState> = [];
    let limit = 1500;
    let disabled = false;
    let country: any = {};
    let state: any = {};
    let city: any = {};
    let win: any;
    let cities: Array<ICity> = [];
    let editor: any;
    let user: Iuser;
    export let countries: Array<ICountry>;
    onMount(() => {
        win = window;
        if (!RETRIEVE_USER()) {
            win.iziToast.error({
                title: "oops!!",
                message: "You have to be logged in",
                position: "topRight",
                onClosed: () => {
                    goto("/login");
                },
            });
        } else {
            user = RETRIEVE_USER() as unknown as Iuser;
        }
        win.ClassicEditor.create(document.querySelector("#editor"))
            .then((res) => {
                console.log(res);
                editor = res;
                editor.model.document.on("change:data", () => {
                    let data = editor.getData() as unknown as string;
                    if (data.length >= limit) {
                        win.iziToast.error({
                            title: "Stop!!!",
                            message: `You have exceeded your input limit the remaining text will be truncated! by ${
                                data.length - limit
                            } `,
                            position: "topRight",
                        });
                    } else {
                        event.content = data;
                    }
                });
            })
            .catch((error) => {
                console.error(error);
                location.reload();
            });
    });
    const setCity = () => {
        event.lat = city.latitude;
        event.long = city.longitude;
    };
    const submit = () => {
        disabled = true;
        //based on the visibility populate the state, country and city on the event will be updated
        event.country = country.isoCode;
        event.state = state.isoCode;
        event.city = city.name;
        event.uploaderId = user.id;
        console.log(files[0]);
        let formData = new FormData();
        formData.append("file", files[0]);
        formData.append("data", JSON.stringify(event));
        axios.post("api/events/event", formData).then(
            (res) => {
                console.log(res);
                disabled = false;
                win.iziToast.success({
                    title: "OK",
                    message: "Upload Successful",
                    position: "topRight",
                    onClosed: () => {
                        goto("event/top");
                    },
                });
            },
            (err) => {
                console.log(err);
                win.iziToast.error({
                    title: "oops!!",
                    message: "something went wrong",
                    position: "topRight",
                });
            }
        );
    };
    const showImage = () => {
        if (files.length > 0) {
            let file = files[0];
            if (file.size > 999999) {
                win.iziToast.error({
                    title: "error",
                    message: "Image too Large",
                    position: "topRight",
                });
            } else {
                const fileReader = new FileReader();
                fileReader.onload = (event) => {
                    myImage = event.target.result;
                };
                fileReader.readAsDataURL(file);
            }
        }
    };
    const loadStates = () => {
        event.lat = country.latitude;
        event.long = country.longitude;
        axios
            .put("api/public/country?get=states&country=" + country.isoCode)
            .then((res) => {
                states = res.data;
                console.log(states);
            });
    };
    const loadCities = () => {
        event.lat = state.latitude;
        event.long = state.longitude;
        axios
            .put(
                "api/public/country?get=cities&country=" +
                    country.isoCode +
                    "&state=" +
                    state.isoCode
            )
            .then((res) => {
                cities = res.data;
                console.log(cities);
            });
    };
</script>

<svelte:head>
    <script
        src="https://cdn.ckeditor.com/ckeditor5/27.1.0/classic/ckeditor.js"></script>
</svelte:head>

<div class="inner-banner">
    <div class="opacity">
        <div class="container">
            <h2>Create Events</h2>
            <ul>
                <li><a href="/" class="tran3s">Home</a></li>
                <li>/</li>
                <li>Events</li>
                <li>/</li>
                <li>Create</li>
            </ul>
        </div>
        <!-- /.container -->
    </div>
    <!-- /.opacity -->
</div>
<!-- /.inner-banner -->

<div class="our-event event-list">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-xs-12">
                <h4>Create an Event</h4>
                <p>
                    create an event that would be used to alert people on what
                    is happening...
                </p>
                <form on:submit|preventDefault={submit}>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="row">
                                <div class="form-group">
                                    <label for="name">Event Name</label>
                                    <input
                                        required
                                        bind:value={event.name}
                                        type="text"
                                        id="name"
                                        class="form-control"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="desc">Event Description</label>
                                    <p style="color:brown">
                                        <small>
                                            * Any Text entered here would be seen only on the initial page of the event
                                        </small>
                                    </p>
                                    <textarea
                                        rows="3"
                                        required
                                        bind:value={event.description}
                                        id="desc"
                                        class="form-control"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="image">Main Image</label>
                                    <p>
                                        <small style="color: brown"
                                            >* Images must not exceed 1mb .
                                        </small>
                                    </p>
                                    <input
                                        on:blur={showImage}
                                        required
                                        type="file"
                                        accept="image/*"
                                        bind:files
                                    />
                                    <br />
                                    {#if myImage}
                                        <img
                                            src={myImage}
                                            alt=""
                                            class="img-responsive"
                                        />
                                    {/if}
                                </div>
                                <div class="form-group">
                                    <label for="date">Event Start Date</label>
                                    <input
                                        required
                                        bind:value={event.date}
                                        type="datetime-local"
                                        id="date"
                                        class="form-control"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="date">Event End Date</label>
                                    <input
                                        required
                                        bind:value={event.endDate}
                                        type="datetime-local"
                                        id="date"
                                        class="form-control"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="date">Visibility</label>
                                    <p style="color:brown">
                                        <small>
                                            * visibility determines who can see
                                            it and who can add this event to
                                            their system
                                        </small>
                                    </p>

                                    <select
                                        required
                                        bind:value={event.visibility}
                                        class="form-control"
                                    >
                                        <option selected
                                            >Choose Visibility</option
                                        >
                                        <option value="global">Everyone</option>
                                        <option value="country"
                                            >National Level</option
                                        >
                                        <option value="state"
                                            >State Level</option
                                        >
                                        <option value="city">City</option>
                                    </select>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="form-group">
                                            <label for="country">Country</label>
                                            <!-- svelte-ignore a11y-no-onchange -->
                                            <select
                                                bind:value={country}
                                                on:change={loadStates}
                                                name=""
                                                id="country"
                                                class="form-control"
                                            >
                                                <option selected
                                                    >Pick a Country</option
                                                >
                                                {#each countries as country}
                                                    <option value={country}
                                                        >{country.name}</option
                                                    >
                                                {/each}
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="form-group">
                                            <label for="state">State</label>
                                            <select
                                                on:blur={loadCities}
                                                bind:value={state}
                                                name=""
                                                id="state"
                                                class="form-control"
                                            >
                                                <option selected
                                                    >Pick a State</option
                                                >
                                                {#each states as state}
                                                    <option value={state}
                                                        >{state.name}</option
                                                    >
                                                {/each}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="form-group">
                                            <label for="country">City</label>
                                            <!-- svelte-ignore a11y-no-onchange -->
                                            <select
                                                on:blur={setCity}
                                                bind:value={city}
                                                name=""
                                                id="city"
                                                class="form-control"
                                            >
                                                <option selected
                                                    >Pick a City</option
                                                >
                                                {#each cities as city}
                                                    <option value={city}
                                                        >{city.name}</option
                                                    >
                                                {/each}
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="form-group">
                                            <label for="state">Address</label>
                                            <input
                                                type="text"
                                                bind:value={event.address}
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-6">
                                        <label for="lat">Latitude</label>
                                        <p>
                                            <small style="color: brown"
                                                >* latitude would autofilled if
                                                it is not filled below
                                            </small>
                                        </p>
                                        <input
                                            bind:value={event.lat}
                                            type="text"
                                            class="form-control"
                                        />
                                    </div>
                                    <div class="col-xs-6">
                                        <label for="long">Longitude</label>
                                        <p>
                                            <small style="color: brown"
                                                >* longitude would autofilled if
                                                it is not filled below
                                            </small>
                                        </p>
                                        <input
                                            bind:value={event.long}
                                            type="text"
                                            class="form-control"
                                        />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12">
                                        <br />
                                        <label for="content">Content</label>
                                        <p>
                                            <small style="color: brown"
                                                >* Content length cannot surpass
                                                1000 note this would include the
                                                html tag that would be added.
                                            </small>
                                        </p>

                                        <div id="editor" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <div class="row">
                        <div class="col-xs-12 ">
                            {#if disabled}
                                <input
                                    disabled
                                    class="button pull-right"
                                    type="submit"
                                    value="submiting..."
                                />
                            {:else}
                                <input
                                    class="button pull-right"
                                    type="submit"
                                    value="submit"
                                />
                            {/if}
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12 theme-sidebar">
                <form action="#" class="sidebar-search">
                    <input type="text" placeholder="Search" />
                    <button class="tran3s"><i class="flaticon-search" /></button
                    >
                </form>
                <div class="sidebar-categories" />
                <!-- /.sidebar-categories -->
                <div class="sidebar-recent-news">
                    <h4>Recent News</h4>
                    <ul>
                        <li class="single-news clearfix">
                            <img
                                src="images/blog/4.jpg"
                                alt=""
                                class="float-left"
                            />
                            <div class="post float-left">
                                <h6>
                                    <a href="blog-details.html" class="tran3s"
                                        >How to Become Master In Java scrpt...</a
                                    >
                                </h6>
                                <p>
                                    <i
                                        class="fa fa-clock-o"
                                        aria-hidden="true"
                                    /> 10 Apr, 2016
                                </p>
                            </div>
                            <!-- /.post -->
                        </li>
                        <li class="single-news clearfix">
                            <img
                                src="images/blog/5.jpg"
                                alt=""
                                class="float-left"
                            />
                            <div class="post float-left">
                                <h6>
                                    <a href="blog-details.html" class="tran3s"
                                        >How to Become Master In Java scrpt...</a
                                    >
                                </h6>
                                <p>
                                    <i
                                        class="fa fa-clock-o"
                                        aria-hidden="true"
                                    /> 10 Apr, 2016
                                </p>
                            </div>
                            <!-- /.post -->
                        </li>
                        <li class="single-news clearfix">
                            <img
                                src="images/blog/6.jpg"
                                alt=""
                                class="float-left"
                            />
                            <div class="post float-left">
                                <h6>
                                    <a href="blog-details.html" class="tran3s"
                                        >How to Become Master In Java scrpt...</a
                                    >
                                </h6>
                                <p>
                                    <i
                                        class="fa fa-clock-o"
                                        aria-hidden="true"
                                    /> 10 Apr, 2016
                                </p>
                            </div>
                            <!-- /.post -->
                        </li>
                    </ul>
                </div>
                <!-- /.sidebar-recent-news -->
                <div class="sidebar-keyword">
                    <h4>Keyword</h4>
                </div>
                <!-- /.sidebar-keyword -->
            </div>
            <!-- /.theme-sidebar -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
</div>

<!-- /.our-event -->
<style>
    .button {
        padding: 5px;
        color: white;
        background: #d3202a;
        border: 0;
        width: 150px;
        height: 50px;
    }
</style>
