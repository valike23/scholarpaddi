<script context="module" lang="ts">

import { url } from '../../Models/common';
  export async function preload(page, session) {
    let id = page.query.courseId;

    console.log(id);
    let campusData = await this.fetch(`${url}api/courses/course?id=`+ id);
    campusData = await campusData.json();

    return { campusData };
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import type { Iuser } from "../../Models/common";
  import type { Icourse, IcourseTaken, Iweek } from "../../Models/course";
  import { showNav } from "../../stores/nav";
  import { goto } from "@sapper/app";
  import axios from "axios";
  let courseTaken: IcourseTaken = {};
  let isNightMood = true;
  let isDayMood = false;
  let win: any;
  export let campusData;
  let course: Icourse = campusData[0];
  let activeWeek: Iweek = {};
  let user: Iuser = {};
  onMount(() => {
    win = window;
    if (sessionStorage.getItem("user")) {
      user = JSON.parse(sessionStorage.getItem("user"));
      console.log(course);
      axios
        .get(
          `${url}api/courses/course/subscribe?courseId=${course.id}&studentId=${user.id}`
        )
        .then(
          (res) => {
            if (res.data.status) {
              console.log(res.data);
              courseTaken = res.data.data;
              if(courseTaken.current_week){
                course.weeks.forEach((e,i)=>{
                  if(e.id == courseTaken.current_week) {
                    course.weeks[i].isActive = true;
                    return;

                  }
                  else {
                    course.weeks[i].isDone = true;
                  }
                })
              }else {
                course.weeks[0].isActive = true;
              }
              win.iziToast.success({
                title: "OK",
                message: "Welcome Back, " + user.first_name,
                position: "topRight",
              });
            } else {
            }
          },
          (err) => {
            win.iziToast.error({
              title: "Error",
              message: "Something Went Wrong!",
              position: "topRight",
              onClosed: () => {
                goto("/");
              },
            });
          }
        );
    } else {
      win.iziToast.error({
        title: "Error",
        message: "You have to be logged in to access this page",
        position: "topRight",
        onClosed: () => {
          location.href = "login";
        },
      });
    }
  });
  const gotoContent = () => {
    location.href = "courses/content?courseId=" + course.title;
  };
  showNav.update((n) => false);
  let isOverView: boolean = true;
  let isWeek: boolean = false;
  let isInfo: boolean = false;
  let isForum: boolean = false;
  const navigate = (nav: string, id = "") => {
    console.log(id);
    if (nav == "overview") {
      isOverView = true;
      isWeek = false;
    } else if (nav == "week") {
      course.weeks.forEach((ele) => {
        if (ele.week_order == id) {
          activeWeek = ele;
          console.log(activeWeek);
        }
      });
      isOverView = false;
      isWeek = true;
    } else if (nav == "info") {
      isOverView = false;
      isWeek = false;
    } else {
      isOverView = false;
      isWeek = false;
    }
  };
  const toggleNightMood = () => {
    isNightMood = !isNightMood;
    isDayMood = !isDayMood;
  };
</script>

<svelte:head>
  <title>{course.title}</title>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css"
  />
  <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
    crossorigin="anonymous"
  />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<!-- svelte-ignore a11y-missing-attribute -->
<div
  class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header "
>
  <header class="mdl-layout__header dark-primary-color">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">ScholarPaddi</span>
      <div class="mdl-layout-spacer" />

      <div
        class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
      mdl-textfield--floating-label "
      >
        <label
          class="mdl-button mdl-js-button mdl-button--icon"
          for="fixed-header-drawer-exp"
        >
          <i class="material-icons">search</i>
        </label>
        <div class="mdl-textfield__expandable-holder">
          <input
            class="mdl-textfield__input"
            type="text"
            name="sample"
            id="fixed-header-drawer-exp"
          />
        </div>
      </div>
      <button
        on:click={toggleNightMood}
        class="mdl-button mdl-js-button mdl-button--icon"
      >
        <i class="material-icons">lightbulb</i>
      </button>
      <button
        id="demo-menu-lower-right"
        class="mdl-button mdl-js-button mdl-button--icon"
      >
        <i class="material-icons">more_vert</i>
      </button>

      <ul
        class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
        for="demo-menu-lower-right"
      >
        <li class="mdl-menu__item">{user.first_name} {user.last_name}</li>
        <li class="mdl-menu__item">Profile</li>
        <li disabled class="mdl-menu__item">Disabled Action</li>
        <li class="mdl-menu__item">Yet Another Action</li>
      </ul>
    </div>
  </header>
  <div
    class="mdl-layout__drawer default-primary-color"
    class:default-primary-color={isDayMood}
    class:night-primary-color={isNightMood}
    class:text-primary-color={isNightMood}
  >
    <span class="mdl-layout-title">ScholarPaddi</span>
    <p class="course-title">{course.title}</p>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <nav class="mdl-navigation" class:text-primary-color={isNightMood}>
      <a
        on:click={() => {
          navigate("overview");
        }}
        class="mdl-navigation__link"
      >
        <i class="material-icons">dashboard_customize</i> Overview</a
      >
      {#each course.weeks as week}
        <a
          on:click={() => {
            navigate("week", week.week_order);
          }}
          class="mdl-navigation__link" class:active-course={week.isActive} class:is-done={week.isDone}
          ><i class="material-icons">looks_one</i> Week {week.week_order}
        </a>
      {/each}

      <a
        class="mdl-navigation__link"
        on:click={() => {
          navigate("forum");
        }}><i class="material-icons">forum</i> Discussion Forum</a
      >

      <a
        on:click={() => {
          navigate("info");
        }}
        class="mdl-navigation__link">Course Info</a
      >
    </nav>
  </div>
  <main class="mdl-layout__content pl-sm-2 pr-sm-3" class:night-primary-color={isNightMood}>
    <div class="page-content">
      {#if isOverView}
        <div class="mt-n1 pt-3">
          <!-- repeat the below div for wk2 to wk4 -->
          {#each course.weeks as week}
            <div
              class="mdl-card mdl-shadow--2dp long-card ml-2 ml-sm-3 ml-md-4"
            >
              <div class="mdl-card__title row">
                <p class="mdl-card__title-text title col-9">
                  Week {week.week_order}
                </p>
                <p class="mdl-card__title-text title col-3">5 hrs 20 mins</p>
              </div>
              <div class="mdl-card__supporting-text">
                <div class="row">
                  <div class="col">
                    <p class="block-title">{week.name}</p>
                  </div>
                </div>
              </div>
              <div class="row ">
                <div class="col-sm-6 col-12 items mt-3">
                  {#each week.items as item}
                    {item.name}<span class="circle ml-2 mb-n1" />
                    <span>{item.type}</span><br />
                  {/each}
                </div>
                <div
                  class="col-offset-1 mb-2 "
                  style="border-right:1px solid gray"
                />
                <div class="d-block" style="border-bottom: 2px solid black" />

                <div class="col-sm-5 col-12" style="text-align:left">
                  <div class="row">
                    <div class="col-7">
                      <p class="box-body">Required</p>
                      <div class="row">
                        <div class="col-2">
                          <i class="material-icons">quiz</i>
                        </div>
                        <div class="col-10">
                          <p>Programming Assignment</p>
                          <p>Collinear Points</p>
                          <p>8h</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 ">
                      <p class="box-body">Grade</p>
                      <p>A (80%)</p>
                    </div>
                    <div class="col-3">
                      <p class="box-body"></p>
                   
                      <button class="button" on:click={gotoContent}>Resume</button>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/each}
          <br />
          <br />
        </div>
      {:else if isWeek}
        <div id="wkpage">
          <h3 class="pl-4 pt-4" class:text-primary-color={isNightMood}>
            Week {activeWeek.week_order}
          </h3>

          <div class="card">
            <div class="row card-body">
              <div class="col-7 col-sm-9">
                <p class="bold-text">{activeWeek.name}</p>
                <p>
                  Discuss and ask questions about week {activeWeek.week_order}
                </p>
                <p class="small-text">392 threads . Last post 9 hours ago</p>
              </div>
              <div class="col-5 col-sm-3 float-right">
                <!-- svelte-ignore a11y-missing-attribute -->
                <button class="tran3s mr-md-n5 ">Go to Forum </button>
              </div>
            </div>
          </div>
          <div class="card mt-4">
            <div class="row card-body">
              <div class="col-12">
                <p class="bold-text">Week Objectives</p>
                {@html activeWeek.objectives}
              </div>
            </div>
          </div>
          <div class="card mt-4 pb-5 pt-2 pl-3">
            <div class="row col-12 ">
              <p class="bold-text">Week Progress</p>
            </div>
            <div class="row">
              <div class="col-9 ml-0 ml-sm-3">
                <i style="border-radius: 50%" class="material-icons"
                  >menu_book</i
                >

                <strong style="font-size:15px">Reading:</strong> This book is
                for reading :
                <span class="small-text">10 mins</span>
              </div>

              <div class="col-2">
                <span class="float-right">
                  <button on:click={gotoContent} class="rsm">Resume</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      {:else if isInfo}
        <div id="courseInfo">
          <br />
          <h2 class="text-center">Algorithms, Part 1</h2>
          <div class="card p-3 mb-2">
            <p class="bold-text">About Course</p>
            <p>
              This course covers the essential information that every serious
              programmer needs to know about algorithms and data structures,
              with emphasis on applications and scientific performance analysis
              of Java implementations. Part I covers elementary data structures,
              sorting, and searching algorithms. Part II focuses on graph- and
              string-processing algorithms. All the features of this course are
              available for free. It does not offer a certificate upon
              completion.
            </p>
          </div>
          <div class="card p-3 mb-2">
            <p class="bold-text">Instructor</p>
            <div class="row">
              <div class="col-3">
                <div
                  style="background-image: url('images/portfolio/1.jpg')"
                  class="profile-pics"
                />
              </div>
              <div class="col-9">
                <p class="bold-text">Taught by:</p>
                <p>Kevin Smith, Software Developer</p>
              </div>
            </div>
            <div class="row">
              <table class="mdl-data-table mdl-js-data-table mb-n3">
                <tbody>
                  <tr>
                    <td class="mdl-data-table__cell--non-numeric"
                      ><i class="icon fa fa-check-circle-o" /><strong
                        >Level
                      </strong></td
                    >

                    <td class="mdl-data-table__cell--non-numeric table-wrap"
                      >Intermidate</td
                    >
                  </tr>
                  <tr>
                    <td class="mdl-data-table__cell--non-numeric"
                      ><i class="icon fa fa-clock-o" /><strong
                        >Commitment
                      </strong></td
                    >

                    <td class="mdl-data-table__cell--non-numeric table-wrap"
                      >4 Weeks of Study and <br /> 3 hours per week</td
                    >
                  </tr>
                  <tr>
                    <td class="mdl-data-table__cell--non-numeric"
                      ><i class="icon fa fa-graduation-cap" /><strong
                        >How to Pass
                      </strong></td
                    >

                    <td class="mdl-data-table__cell--non-numeric table-wrap"
                      >Complete all courses <br /> and solve all assignment</td
                    >
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="card p-3 mb-2">
            <p class="bold-text">Specification and related courses</p>
            <p>Artificial Intelligence and remote Learning</p>
            <small
              >complete course series on the world of AI and technology</small
            >
            <div class="row gray mt-4">
              <div class="col-3">
                <div class="course-image" />
              </div>
              <div class="col-9">
                <p class="bold-text">Introduction to Programming</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more
                </p>
              </div>
            </div>
            <div class="row gray mt-4">
              <div class="col-3">
                <div class="course-image" />
              </div>
              <div class="col-9">
                <p class="bold-text">Introduction to Programming</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more
                </p>
              </div>
            </div>
            <div class="row gray mt-4">
              <div class="col-3">
                <div class="course-image" />
              </div>
              <div class="col-9">
                <p class="bold-text">Introduction to Programming</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more
                </p>
              </div>
            </div>
            <div class="row gray mt-4">
              <div class="col-3">
                <div class="course-image" />
              </div>
              <div class="col-9">
                <p class="bold-text">Introduction to Programming</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more
                </p>
              </div>
            </div>
          </div>
        </div>
      {:else}
        <div id="forum">
          <br />
          <h3
            class="text-center font-300"
            class:text-primary-color={isNightMood}
          >
            Discussion Forum
          </h3>
          <p class="text-center" class:text-primary-color={isNightMood}>
            Get help and discuss material with the community.
          </p>
          <div class="row p-0">
            <div class="col-sm-9  col-12">
              <div class="row" class:text-primary-color={isNightMood}>
                <div class="bold-text ml-sm-3 ml-1 col-3 col-sm-2">Forum</div>
                <div class="bold-text p-0 col-3 col-sm-2 active">
                  All Threads
                </div>
                <div class="col-sm-offset-2 " />

                <div class="col-4 col-sm-4">
                  <input type="text" class="form-control" />
                </div>
                <span class="material-icons">search</span>
              </div>
              <br />
              <div id="threads">
                <div class="card">
                  <div class="card-header">
                    <div class="row">
                      <div class="col-12">
                        <span class="bold-text">sort by</span>
                        <select>
                          <option selected value="0">Latest</option>
                          <option value="1">Top</option>
                          <option value="2">Unanswered</option>
                        </select>
                        <button class="float-right button accent-color"
                          >New Thread</button
                        >
                      </div>
                    </div>
                  </div>
                  <div class="card-body box">
                    <div class="gray p-2">
                      <div><strong>General Discussion</strong></div>
                      <div class="row ">
                        <div class="col-sm-10 col-8">
                          <p>General Course Guidlines and F.A.Q</p>
                          <div class="row">
                            <div class="col-6 col-sm-3">
                              <p class="status">Mentor Created</p>
                            </div>
                            <div class="col-6">
                              <small>Last post by </small><a>Gerorgi Dervor</a>
                            </div>
                            <div class="col-sm-3 col-6">
                              <small class="float-left">3 months ago</small>
                            </div>
                          </div>
                        </div>
                        <div class=" col-sm-1 col-2">
                          <p class="views">
                            <strong>4.8k</strong>
                          </p>
                          <p class="views">views</p>
                        </div>

                        <div class="col-sm-1 col-2">
                          <p class="views">
                            <strong>4.8k</strong>
                          </p>

                          <p class="views">views</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body box">
                    <div class="gray p-2">
                      <div><strong>General Discussion</strong></div>
                      <div class="row ">
                        <div class="col-sm-10 col-8">
                          <p>General Course Guidlines and F.A.Q</p>
                          <div class="row">
                            <div class="col-6 col-sm-3">
                              <p class="status">Mentor Created</p>
                            </div>
                            <div class="col-6">
                              <small>Last post by </small><a>Gerorgi Dervor</a>
                            </div>
                            <div class="col-sm-3 col-6">
                              <small class="float-left">3 months ago</small>
                            </div>
                          </div>
                        </div>
                        <div class=" col-sm-1 col-2">
                          <p class="views">
                            <strong>4.8k</strong>
                          </p>
                          <p class="views">views</p>
                        </div>

                        <div class="col-sm-1 col-2">
                          <p class="views">
                            <strong>4.8k</strong>
                          </p>
                          <p class="views">views</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 d-none d-sm-block">
              <div class="card">
                <div class="card-body">
                  <p class="bold-text">Description</p>
                  <p>
                    Welcome to the discussion forums! Ask questions, debate
                    ideas, and find classmates who share your goals. Browse
                    popular threads below or other forums in the sidebar.
                  </p>
                </div>
              </div>
              <br />
              <div class="card">
                <div class="card-body">
                  <p class="bold-text">Forum Guidlines</p>
                  <p>
                    Welcome to the discussion forums! Ask questions, debate
                    ideas, and find classmates who share your goals. Browse
                    popular threads below or other forums in the sidebar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </main>
</div>

<style>
  .is-done {
    background-color: aquamarine;
  }
  .active-course {
    background-color: gainsboro;
  }
  .dark-primary-color {
    background: #0c0545;
  }
  .default-primary-color {
    background: white;
  }
  .night-primary-color {
    background: black;
  }
  .text-primary-color {
    color: #ffffff;
  }

  .accent-color {
    background: #d3202a;
    color: white;
  }
  .accent-color:hover {
    background: #d3202a;
    color: white;
  }
  .box {
    margin-bottom: 2px solid black;
  }
  .views {
    font-size: calc(45% + 0.3vw + 0.3vh);
  }
  .status {
    background-color: rgb(201, 189, 30);
    font-size: calc(50% + 0.3vw + 0.3vh);
    text-align: center;
  }
  .gray:hover {
    background-color: whitesmoke;
  }
  .active {
    border-bottom: rgb(31, 31, 236) 1px solid;
  }
  .button {
    width: 100px;
    height: 40px;
    background-color: #d3202a;
    color: white
  }
  .course-image {
    background-image: url("images/portfolio/2.jpg");
    max-width: 150px;
    max-height: 180px;
    min-width: 80px;
    min-height: 100px;

    background-size: cover;
  }
  .icon {
    margin-right: 20px;
    font-size: 20px;
  }
  table {
    width: 100%;
  }
  .table-wrap {
    text-overflow: clip;
    word-wrap: break-word;
  }
  .profile-pics {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-size: cover;
  }
  button.rsm {
    background-color: #d3202a;
    padding: 5px;
    height: 30px;
    color: white;
    margin-right: -10px;
  }
  .bold-text {
    font-weight: 700px;
    font-size: large;
  }
  .small-text {
    font-size: smaller;
    font-weight: 300;
  }
  button {
    font-family: cursive;
  }
  li {
    margin-bottom: 3px;
    word-spacing: 0.5em;
  }
  .card {
    margin-top: 2px;
    margin-left: 6px;
    margin-right: 6px;
  }
  .tran3s {
    width: 124px;
    height: 52px;
    color: #d3202a;
    background-color: white;
    border: 1px #d3202a solid;
  }
  .tran3s:hover {
    color: white;
    background-color: #d3202a;
  }
  p {
    font-family: "Playfair Display", serif;
    font-weight: 500;
  }
  div {
    font-family: "Playfair Display", serif;
  }
  .mdl-card__title {
    background-color: rgb(179, 174, 174);
  }

  .long-card {
    width: 96%;
    margin-top: 10px;
  }

  .title {
    font-size: 1em;
    font-weight: 500;
  }
  .course-title {
    font-size: 1.3em;
    font-weight: 400;
    line-height: 1.3;
  }
  .items {
    text-align: center;
    line-height: 3.4em;
  }
  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid black;
    display: inline-block;
  }
  .box-body {
    font-weight: 500;
    font-size: 1em;
    color: gray;
    text-align: left;
  }
  .block-title {
    font-size: 1.5em;
  }
</style>
