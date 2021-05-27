<script context="module" lang="ts">
    export async function preload(page, session) {
        let id = page.params.slug;
        let campusData = await this.fetch("api/events/event?title=" + id);
        campusData = await campusData.json();
        const event = campusData;
        console.log(event);
        return { event };
    }
</script>

<script lang="ts">
import { onMount } from "svelte";

    import type { Ievent } from "../../Models/event";

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    // your script goes here
    export let event: Ievent;
    const initTime = ()=>{
        let data: any = event.date;
        data = new Date(data);
        data = data - Date.now();
        days = Math.floor(data/86400000);
        data = data/86400000 - days;
        hours = Math.floor(data * 24);
        data = data * 24 - hours;
        minutes = Math.floor( data * 60);
        data = data * 60 - minutes;
        seconds = Math.floor( data * 60);
        console.log(data, days, hours, minutes, seconds);
        
        
    }
    onMount(()=>{
        let timer = setInterval(()=>{
            initTime();
        }, 1000)
    })
</script>

<div class="inner-banner">
    <div class="opacity">
        <div class="container">
            <h2>Single Events</h2>
            <ul>
                <li><a href="index-2.html" class="tran3s">Home</a></li>
                <li>/</li>
                <li><a href="event/top">Event</a></li>
                <li>/</li>
                <li>Event</li>
            </ul>
        </div>
        <!-- /.container -->
    </div>
    <!-- /.opacity -->
</div>

<div class="event-details">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-xs-12">
                <div class="details-wrapper">
                    <div class="title">
                        <h2>{event.name}</h2>
                        <ul class="clearfix">
                            <li class="float-left">
                                <div>
                                    <i class="flaticon-time" />
                                    <span>Start Date</span>
                                    <p>{event.date}</p>
                                </div>
                            </li>
                            <li class="float-left">
                                <div>
                                    <i class="flaticon-clock" />
                                    <span>End Date</span>
                                    <p>{event.endDate}</p>
                                </div>
                            </li>
                            <li class="float-left">
                                <div>
                                    <i class="flaticon-user" />
                                    <span>Speakers</span>
                                    <p>13 Worldwide</p>
                                </div>
                            </li>
                            <li class="float-left">
                                <div>
                                    <i class="flaticon-placeholder" />
                                    <span>Location</span>
                                    <p>California, USA</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- /.title -->
                    <img src={event.imageHttpsUrl} alt="" />
                    <div class="counter-wrapper">
                        <div id="count" class="clearfix" />
                    </div>
                    <div class="counter-wrapper">
                        <div id="count" class="clearfix">
                            <div class="col-xs-3">
                                <div class="wrapper">
                                    <h4>{days}</h4>
                                    <span>day</span>
                                </div>
                            </div>
                            <div class="col-xs-3">
                                <div class="wrapper">
                                    <h4>{hours}</h4>
                                    <span>Hours</span>
                                </div>
                            </div>
                            <div class="col-xs-3">
                                <div class="wrapper">
                                    <h4>{minutes}</h4>
                                    <span>Minutes</span>
                                </div>
                            </div>
                            <div class="col-xs-3">
                                <div class="wrapper">
                                    <h4>{seconds}</h4>
                                    <span>Seconds</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {@html event.content}
                </div>
                <!-- /.details-wrapper -->
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12 theme-sidebar">
                <div class="sidebar-ticket-buy">
                    <h4>Buy Ticket</h4>
                    <div class="ticket-box">
                        <form action="#">
                            <div class="single-input">
                                <label>Your Full Name</label>
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <!-- /.single-input -->
                            <div class="single-input">
                                <label>Your Email</label>
                                <input type="email" placeholder="Your Email" />
                            </div>
                            <!-- /.single-input -->
                            <div class="single-input clearfix">
                                <div class="float-left">
                                    <label>Quantity</label>
                                    <p>Available Slots</p>
                                </div>
                                <input
                                    type="text"
                                    value="1"
                                    min="1"
                                    class="float-right"
                                    id="quantity"
                                />
                                <input
                                    name="courseTicket"
                                    type="hidden"
                                    id="courseTicket"
                                    value="47"
                                />
                            </div>
                            <!-- /.single-input -->
                            <div class="single-input clearfix">
                                <div class="float-left">
                                    <label>Ticket Price</label>
                                    <p>Single Ticket Price</p>
                                </div>
                                <span class="p-color float-right"
                                    >$<strong id="amazon5totalpoints">47</strong
                                    ></span
                                >
                            </div>
                            <!-- /.single-input -->
                            <input
                                type="submit"
                                value="Buy Now"
                                class="s-bg-color tran3s"
                            />
                        </form>
                    </div>
                    <!-- /.ticket-box -->
                </div>
                <!-- /.sidebar-ticket-buy -->
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
                    <ul class="clearfix">
                        <li><a href="#" class="tran3s">Ideas</a></li>
                        <li><a href="#" class="tran3s">Funrising</a></li>
                        <li><a href="#" class="tran3s">Charity</a></li>
                        <li><a href="#" class="tran3s">Children</a></li>
                        <li><a href="#" class="tran3s">Food</a></li>
                    </ul>
                </div>
                <!-- /.sidebar-keyword -->
            </div>
            <!-- /.theme-sidebar -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
</div>
