<script context="module" lang="ts">
    export async function preload(page, session) {
        let id = page.params.slug;
        let ary = id.split("&");
        console.log(JSON.stringify(ary));
        let campusData = await this.fetch("api/courses/course?id=" + ary[0]);
        const feedBackData = await this.fetch(
            "api/courses/student_feedback?id=" + ary[1]
        );
        let categoryData = await this.fetch("api/courses/category");
        campusData = await campusData.json();
        const feedBack = await feedBackData.json();
        let categories = await categoryData.json();
        const course = campusData[0];
        return { course, categories, feedBack };
    }
</script>

<script lang="ts">
    import type { Icourse, IcourseTaken, IstudentFeedBack } from "../../Models/course";
    import moment from "moment";
    import type { Icategory } from "../../Models/category";
    import { showNav } from "../../stores/nav";
    import { goto } from "@sapper/app";
    import { onMount } from "svelte";
    import axios from "axios";
    let win: any;
    let amount: any;
    let user: any;
    let isActive = false;
    const gotoProgress = () =>{
        location.href = "courses/progress?courseId=" + course.title;
    }

    onMount(() => {
        win = window;
        if (sessionStorage.getItem("user")) {
            user = JSON.parse(sessionStorage.getItem("user"));
            axios
        .get(
          `api/courses/course/subscribe?courseId=${course.id}&studentId=${user.id}`
        )
        .then(
          (res) => {
            if (res.data.status) {
              isActive = true;
            } else {
                isActive = false;
            }
          },
          (err) => {
            win.iziToast.error({
              title: "Error",
              message: "Something Went Wrong!",
              position: "topRight",
              
            });
          }
        );
   
        }
    });
    const openModal = (data) => {
        win.$("#modal-iframe").iziModal({
            iframe: true,
            iframeHeight: 800,
            iframeURL: data,
        });

        win.$("#modal-iframe").iziModal("open");
    };
    showNav.update((n) => true);
    export let course: Icourse;
    export let categories: Array<Icategory>;
    export let feedBack: Array<IstudentFeedBack>;
    let totalRatings: number = 0;
    const makePayment = () => {
        console.log("make");
        win.FlutterwaveCheckout({
            public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
            tx_ref: "hooli-tx-1920bbtyt",
            amount: amount,
            currency: "NGN",
            country: "NG",
            payment_options: "card, mobilemoneyghana, ussd",
            // specified redirect URL
            //  redirect_url:"/courses/progress",
            meta: {
                consumer_id: 23,
                consumer_mac: "92a3-912ba-1192a",
            },
            customer: {
                email: `${user.email}`,
                phone_number: `${user.phone}`,
                name: `${user.first_name} ${user.last_name}`,
            },
            callback: function (data) {
                console.log(data);
                if (data.status == "successful") {
                    let form = new FormData();
                    let courseTaken: IcourseTaken = {};
                    courseTaken.course_id = course.id;
                    courseTaken.student_id = user.id;
                    form.append('body', JSON.stringify(courseTaken));
                    axios.post('api/courses/course/subscribe', form).then((res)=>{
                        win.iziToast.success({
                            title: "OK",
                            message: "Your Payment has been approved, you now have access to the course.",
                            position: "bottomLeft",
                            onClosed: ()=>{
                                goto('courses/progress?courseId=' + course.title)
                            }
                        })
                    },(err)=>{
                        win.iziToast.error({
                            title: "Error",
                            message: err.msg,
                            position: "bottomLeft"
                        })
                    })
                } else {
                    win;
                }
            },
            onclose: function () {
               
            },
            customizations: {
                title: course.title,
                description: course.description,
                logo: course.course_image,
            },
        });
    };
    axios
        .get(
            "api/public/currency?currency=naira&amount=" +
                (course.price - (course.price * course.discount) / 100)
        )
        .then((res) => {
            amount = res.data;
        });
    feedBack.forEach((e, i) => {
        totalRatings = ((e.ratings as unknown) as number) + totalRatings;
        let ary = [];
        for (
            let index = 0;
            index < ((e.ratings as unknown) as number);
            index++
        ) {
            ary.push(index);
        }
        feedBack[i].ratingList = ary;
    });
    const nav = () => {
        if (sessionStorage.getItem("user")) {
            win.$("#modal").iziModal({
                title: "Make Payment",
                subtitle: course.title,
                headerColor: "#88A0B9",
                background: null,
                theme: "", // light
                icon: "fa fa-money",
                iconText: null,
                iconColor: "white",
                rtl: false,
                width: 600,
                top: null,
                bottom: null,
                borderBottom: true,
                padding: 10,
                radius: 3,
                zindex: 999,
                iframe: false,
                iframeHeight: 400,
                iframeURL: null,
                focusInput: true,
                group: "",
                loop: false,
                arrowKeys: true,
                navigateCaption: true,
                navigateArrows: true, // Boolean, 'closeToModal', 'closeScreenEdge'
                history: false,
                restoreDefaultContent: false,
                autoOpen: 0, // Boolean, Number
                bodyOverflow: false,
                fullscreen: false,
                openFullscreen: false,
                closeOnEscape: true,
                closeButton: true,
                appendTo: "body", // or false
                appendToOverlay: "body", // or false
                overlay: true,
                overlayClose: true,
                overlayColor: "rgba(0, 0, 0, 0.4)",
                timeout: false,
                timeoutProgressbar: false,
                pauseOnHover: false,
                timeoutProgressbarColor: "rgba(255,255,255,0.5)",
                transitionIn: "comingIn",
                transitionOut: "comingOut",
                transitionInOverlay: "fadeIn",
                transitionOutOverlay: "fadeOut",
                onFullscreen: function () {},
                onResize: function () {},
                onOpening: function () {},
                onOpened: function () {},
                onClosing: function () {},
                onClosed: function () {},
                afterRender: function () {},
            });
            win.$("#modal").iziModal("open");

            //location.href = "courses/progress?courseId=" + course.title;
        } else {
            goto("login");
        }
    };
    const feeds: Array<IstudentFeedBack> = [];
    for (let index = 0; index < feedBack.length; index++) {
        const element = feedBack[index];
        feeds.push(element);
        console.log(index);
        if (index >= 3) {
            console.log("done");
            break;
        }
    }

    let courseData: Icourse = course;
    const m = moment(course.created_date);
    console.log(feedBack);
</script>

<svelte:head>
    <form>
        <script src="https://checkout.flutterwave.com/v3.js"></script>
    </form>
</svelte:head>
<!-- svelte-ignore a11y-invalid-attribute -->
<div class="inner-banner">
    <div class="opacity">
        <div class="container">
            <h2>Course Details</h2>
            <ul>
                <li><a href="/" class="tran3s">Home</a></li>
                <li>/</li>
                <li>Courses</li>
            </ul>
        </div>
        <!-- /.container -->
    </div>
    <!-- /.opacity -->
</div>
<!-- /.inner-banner -->

<div class="course-details">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-xs-12">
                <div class="details-wrapper">
                    <div class="course-title">
                        <h2>{courseData.title}</h2>
                        <span>Posted {m.fromNow()}</span>
                    </div>
                    <!-- /.course-title -->
                    <div class="course-info row">
                        <div class="col-xs-4">
                            <div>
                                <i class="flaticon-time" />
                                <p>Duration</p>
                                <b>18 class - 36 Hours</b>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div>
                                <i class="flaticon-bookmark" />
                                <p>Categories</p>
                                <b>{courseData.sub_category}</b>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div>
                                <i class="flaticon-star" />
                                <p><b>4.5</b> ({feedBack.length})</p>
                                <ul>
                                    <li>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        />
                                    </li>
                                    <li>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        />
                                    </li>
                                    <li>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        />
                                    </li>
                                    <li>
                                        <i
                                            class="fa fa-star"
                                            aria-hidden="true"
                                        />
                                    </li>
                                    <li>
                                        <i
                                            class="fa fa-star-half-o"
                                            aria-hidden="true"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /.course-info -->
                    <img src={courseData.course_image} alt="" />
                    <p class="p1">{courseData.description}</p>
                    <div class="learn-list">
                        <h3>What Will I Learn?</h3>
                        <ul class="row">
                            {#each courseData.what_to_learn as learn}
                                <li class="col-sm-6 col-xs-12">
                                    <span>{learn}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>

                    <div class="curriculum-panel">
                        <div class="clearfix">
                            <h3 class="float-left">Curriculum</h3>
                            <ul class="float-right">
                                <li><span>6 </span> Lectures</li>
                                <li><span>40 : 30</span></li>
                            </ul>
                        </div>
                        <div
                            class="panel-group theme-accordion"
                            id="accordionTwo"
                        >
                            {#each courseData.weeks as week}
                                <div class="panel">
                                    <div class="panel-heading">
                                        <h5 class="panel-title">
                                            <a
                                                data-toggle="collapse"
                                                data-parent="#accordionTwo"
                                                href="#{'week' + week.id}"
                                                class="clearfix"
                                            >
                                                <h6 class="float-left">
                                                    <span
                                                        >Week {week.week_order}</span
                                                    >
                                                    {week.name}
                                                </h6>
                                                <p class="float-right">
                                                    13:41min
                                                </p>
                                            </a>
                                        </h5>
                                    </div>
                                    <div
                                        id={"week" + week.id}
                                        class="panel-collapse collapse"
                                    >
                                        <div class="panel-body">
                                            <ul>
                                                {#each week.items as item}
                                                    {#if item.type == "video" && item.preview}
                                                        <li class="clearfix">
                                                            <span
                                                                class="float-left"
                                                                ><i
                                                                    class="fa fa-play-circle"
                                                                    aria-hidden="true"
                                                                />
                                                                {item.name}
                                                                <!-- svelte-ignore a11y-missing-attribute -->
                                                                <a
                                                                    on:click={() => {
                                                                        openModal(
                                                                            item.content
                                                                        );
                                                                    }}
                                                                    class="trigger-iframe tran3s preview p-bg-color"
                                                                    >Preview
                                                                </a></span
                                                            >
                                                            <span
                                                                class="float-right"
                                                                >10:23min</span
                                                            >
                                                        </li>
                                                    {:else if item.type == "video" && !item.preview}
                                                        <li class="clearfix">
                                                            <span
                                                                class="float-left"
                                                                ><i
                                                                    class="fa fa-play-circle"
                                                                    aria-hidden="true"
                                                                />
                                                                {item.name}
                                                            </span>
                                                            <span
                                                                class="float-right"
                                                                >10:23min</span
                                                            >
                                                        </li>
                                                    {:else}
                                                        <li class="clearfix">
                                                            <!-- svelte-ignore missing-declaration -->
                                                            <span
                                                                class="float-left"
                                                            >
                                                                <a
                                                                    href="#"
                                                                    class="tran3s"
                                                                    ><i
                                                                        class="fa fa-file-text-o"
                                                                        aria-hidden="true"
                                                                    />
                                                                    {item.name}</a
                                                                >
                                                            </span>
                                                            <span
                                                                class="float-right"
                                                                >75kb</span
                                                            >
                                                        </li>
                                                    {/if}
                                                {/each}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <div class="course-feedback">
                        <h3>Students Feedback</h3>
                        <div class="feedback-container">
                            <ul class="clearfix">
                                <li class="float-left">
                                    <h2>{totalRatings / feedBack.length}</h2>
                                    <p>Avarage rating ({feedBack.length})</p>
                                    <ul>
                                        <li>
                                            <i
                                                class="fa fa-star"
                                                aria-hidden="true"
                                            />
                                        </li>
                                        <li>
                                            <i
                                                class="fa fa-star"
                                                aria-hidden="true"
                                            />
                                        </li>
                                        <li>
                                            <i
                                                class="fa fa-star"
                                                aria-hidden="true"
                                            />
                                        </li>
                                        <li>
                                            <i
                                                class="fa fa-star"
                                                aria-hidden="true"
                                            />
                                        </li>
                                        <li>
                                            <i
                                                class="fa fa-star-half-o"
                                                aria-hidden="true"
                                            />
                                        </li>
                                    </ul>
                                </li>
                                <li class="float-left">
                                    <ul class="clearfix">
                                        <li>5 Star</li>
                                        <li><div style="width:77%;" /></li>
                                        <li>87%</li>
                                        <li class="float-right">(5 Reviews)</li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li>4 Star</li>
                                        <li><div style="width:70%;" /></li>
                                        <li>70%</li>
                                        <li class="float-right">(2 Reviews)</li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li>3 Star</li>
                                        <li><div style="width:60%;" /></li>
                                        <li>32%</li>
                                        <li class="float-right">(1 Reviews)</li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li>2 Star</li>
                                        <li><div style="width:45%;" /></li>
                                        <li>10%</li>
                                        <li class="float-right">(1 Reviews)</li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li>1 Star</li>
                                        <li><div style="width:2%;" /></li>
                                        <li>0%</li>
                                        <li class="float-right">(0 Reviews)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <!-- /.feedback-container -->
                        {#each feedBack as feeds}
                            <div class="single-review clearfix">
                                <img
                                    src="images/course/30.jpg"
                                    alt=""
                                    class="float-left"
                                />
                                <div class="text float-left">
                                    <div class="clearfix">
                                        <div class="float-left">
                                            <h6>{feeds.full_name}</h6>
                                            <span
                                                >{moment(
                                                    feeds.created_date
                                                ).fromNow()}</span
                                            >
                                        </div>
                                        <ul class="float-right">
                                            {#each feeds.ratingList as list}
                                                <li>
                                                    <i
                                                        class="fa fa-star"
                                                        aria-hidden="true"
                                                    />
                                                </li>
                                            {/each}
                                        </ul>
                                    </div>
                                    <!-- /.clearfix -->
                                    <p>{feeds.comment}</p>
                                </div>
                                <!-- /.text -->
                            </div>
                        {/each}
                    </div>
                    <!-- /.course-feedback -->
                </div>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="course-sidebar">
                    <div class="sidebar-course-information">
                        <ul class="price clearfix">
                            <li class="float-left">
                                {#if course.is_free}
                                    <strong class="s-color">Free</strong>
                                {:else if course.discount}
                                    <strong class="s-color"
                                        ><del>{course.price}. <sup>99</sup></del
                                        >${course.price -
                                            (course.price / 100) *
                                                course.discount}<sup>.99</sup
                                        ></strong
                                    >
                                {:else}
                                    <strong class="s-color"
                                        >${course.price}<sup>.99</sup></strong
                                    >
                                {/if}
                            </li>
                            <li class="float-right">
                                <a href="#" class="tran3s"
                                    ><i class="flaticon-like" /></a
                                >
                            </li>
                        </ul>
                        <ul class="info-list row">
                            <li class="col-xs-6"><b>Lectures :</b> 9</li>
                            <li class="col-xs-6">
                                <b>Skill :</b>
                                {course.level}
                            </li>
                            <li class="col-xs-6">
                                <b>Language :</b>
                                {course.language}
                            </li>
                            <li class="col-xs-6"><b>Duration :</b> 40:23</li>
                        </ul>
                        <div>
                            <ul class="clearfix student-image">
                                {#each feeds as feed}
                                    <li>
                                        <img src={feed.profile_pics} alt="" />
                                    </li>
                                    <!-- svelte-ignore a11y-invalid-attribute -->
                                {/each}
                                {#if feedBack[4]}
                                    <li>
                                        <div class="image">
                                            <img
                                                src={feedBack[4].profile_pics}
                                                alt=""
                                            />
                                            <div class="opacity">
                                                {feedBack.length - 4}+
                                            </div>
                                        </div>
                                    </li>
                                {/if}
                            </ul>
                            <p><b>{feedBack.length}</b> Students Enroolled</p>
                        </div>
                        {#if isActive}
                             <!-- content here -->
                             <a on:click="{gotoProgress}"
                            class="tran3s s-bg-color take-course hvr-trim"
                            >Continue the course</a
                        >
                        {:else}
                             <!-- else content here -->
                             <a
                            on:click={makePayment}
                            class="tran3s s-bg-color take-course hvr-trim"
                            >Take this course</a
                        >
                        {/if}
                    </div>
                    <!-- /.sidebar-course-information -->

                    <div class="sidebar-instructor-info">
                        <h4>Instructor Info</h4>
                        <div class="wrapper">
                            <div class="name">
                                <img
                                    src={courseData.author_pics}
                                    alt={courseData.author}
                                />
                                <h6>{courseData.author}</h6>
                                <span>{courseData.author_career}</span>
                                <!-- svelte-ignore a11y-missing-attribute -->
                                <ul>
                                    <li>
                                        <a href="#" class="tran3s"
                                            ><i
                                                class="fa fa-facebook"
                                                aria-hidden="true"
                                            /></a
                                        >
                                    </li>
                                    <li>
                                        <a href="#" class="tran3s"
                                            ><i
                                                class="fa fa-github"
                                                aria-hidden="true"
                                            /></a
                                        >
                                    </li>
                                    <li>
                                        <a href="#" class="tran3s"
                                            ><i
                                                class="fa fa-dribbble"
                                                aria-hidden="true"
                                            /></a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <!-- /.name -->
                            <p>
                                {courseData.author_bio}
                            </p>
                            <a
                                href="#"
                                class="tran3s p-bg-color follow hvr-trim"
                                >Follow Now
                            </a>
                        </div>
                    </div>

                    <div class="sidebar-categories">
                        <h4>Categories</h4>
                        <div class="panel-group theme-accordion" id="accordion">
                            {#each categories as cat}
                                <div class="panel">
                                    <div class="panel-heading">
                                        <h6 class="panel-title">
                                            <a
                                                data-toggle="collapse"
                                                data-parent="#accordion"
                                                href="#collapse{cat.id}"
                                            >
                                                {cat.name}</a
                                            >
                                        </h6>
                                    </div>
                                    <div
                                        id="collapse{cat.id}"
                                        class="panel-collapse collapse"
                                    >
                                        <div class="panel-body">
                                            <ul>
                                                {#each cat.subCategory as sub}
                                                    <li>
                                                        <a
                                                            href="#"
                                                            class="tran3s"
                                                            >{sub.name}</a
                                                        >
                                                    </li>
                                                {/each}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="modal-iframe" />
<div id="modal" class="iziModal" data-izimodal-loop="">
    <div class="container" style="width:600px">
        <div class="row" style="padding-left:20px; padding-right:40px">
            <div class="col-sm-6">
                <img
                    src={course.course_image}
                    alt="..."
                    class="img-thumbnail"
                />
                <br />
                <p>
                    <strong>₦{amount}</strong>
                </p>
            </div>
            <div class="col-sm-6">
                <p><small>{course.description}</small></p>

                <button on:click={makePayment} class="button">Pay</button>
            </div>
        </div>
    </div>
</div>

<style>
    .button {
        width: 100%;
        height: 40px;
        color: white;
        background-color: #d3202a;
    }
</style>
