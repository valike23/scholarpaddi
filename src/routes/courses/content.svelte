<script context="module" lang="ts">
  export async function preload(page, session) {
    let id = page.query.courseId;

    let campusData = await this.fetch(`${url}api/courses/course?id=` + id);
    campusData = await campusData.json();

    return { campusData };
  }
</script>

<script lang="ts">
  import axios from "axios";
  import { onMount } from "svelte";
  import { showNav } from "../../stores/nav";
  import Video from "../../components/Video.svelte";
  import type { Ivideo } from "../../Models/auxilary";
  import type { Icourse, IcourseTaken, Iitem } from "../../Models/course";
  import { Iuser, url } from "../../Models/common";
  let isVideo = false;
  let loading = false;
  let isText = false;
  let isQuiz = false;
  let loader = false;
  let isResources = false;
  let isNightMood = true;
  let isDayMood = false;
  let activeItem: Iitem = {};
  export let campusData;
  let course: Icourse = campusData[0];
  let activeWeek = course.weeks[0];
  let preQuiz = true;
  let videoData: Ivideo = {};
  let user: Iuser = {};
  let win: any;
  let courseTaken: IcourseTaken = {};
  const setActiveItem = (item: Iitem) => {
    activeItem = item;
    activeWeek.items.forEach((e, i) => {
      if (e.id == item.id) {
        activeWeek.items[i].active = true;
      } else {
        activeWeek.items[i].active = false;
      }
    });
  };

  const enterQuiz = (item: Iitem) => {
    activeItem = item;
    isVideo = false;
    loading = false;
    isText = false;
    isQuiz = true;
    loader = false;
    preQuiz = false;
  };

  const navigate = (item: Iitem) => {
    setActiveItem(item);
    if (activeItem.type == "video") {
      loader = true;
      loading = true;
      preQuiz = false;
      isText = false;
      isQuiz = false;
      isResources = false;
      isVideo = false;
      axios.get("api/courses/video?id=" + activeItem.id).then((res) => {
        loader = false;
        loading = false;
        videoData = res.data as unknown as Ivideo;
        isVideo = true;
      });
    }
    if (activeItem.type == "quiz") {
      isVideo = false;
      isText = false;
      isResources = false;
      isQuiz = false;
      preQuiz = true;
    }
    if (activeItem.type == "text") {
      isVideo = false;
      isText = true;
      isQuiz = false;
      isResources = false;
    }
    if (activeItem.type == "resource") {
      isVideo = false;
      isText = false;
      isQuiz = false;
      isResources = true;
    }
  };
  showNav.update((n) => false);
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
              courseTaken = res.data.data;
              if (courseTaken.current_item) {
                let item: Iitem = {};
                activeWeek.items.forEach((e, i) => {

                  if (e.item_order <= courseTaken.current_item) {
                    activeWeek.items[i].done = true;
                    item = activeWeek.items[i];
                  } else {
                    activeWeek.items[i].done = false;
                  }
                });
                navigate(item);
              } else {
                navigate(activeWeek.items[0]);
                courseTaken.current_week = activeWeek.id;
                courseTaken.current_item = activeWeek.items[0].item_order;
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
                location.href = "/";
              },
            });
          }
        );
    }
  });
  const toggleNightMood = () => {
    isNightMood = !isNightMood;
    isDayMood = !isDayMood;
  };

  const next = ()=>{
    let item: Iitem = {};
    let length = activeWeek.items.length;
    courseTaken.current_item = activeItem.item_order;
    let form = new FormData();
    form.append('data', JSON.stringify(courseTaken));
    axios.put('api/courses/course/subscribe', form).then(()=>{
      
    },()=>{

    })
    if(length == activeItem.item_order){
      //go to next week
    }
    else{
      //go to next item
      activeWeek.items.forEach((e, i)=>{
        if(activeItem.item_order == activeWeek.items[i].item_order){
          item = activeWeek.items[i + 1];
          console.log(item);
          navigate(item);
        }
      })
    }

  }
</script>

<svelte:head>
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
    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<div class="body">
  <!-- MDL Spinner Component -->

  <div
    class="mdl-layout mdl-js-layout   mdl-layout--fixed-drawer
            mdl-layout--fixed-header "
  >
    <header class="mdl-layout__header text-primary-color dark-primary-color">
      <div class="mdl-layout__header-row">
        <div>schoolPaddi</div>
        <div class="mdl-layout-spacer" />
        <button
          on:click={toggleNightMood}
          class="mdl-button mdl-js-button mdl-button--icon"
        >
          <i class="material-icons">lightbulb</i>
        </button>
        <div
          class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right"
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
      </div>
    </header>
    <div
      class="mdl-layout__drawer"
      class:default-primary-color={isDayMood}
      class:night-primary-color={isNightMood}
    >
      <span class="title">{activeWeek.name}</span>
      <!-- svelte-ignore a11y-missing-attribute -->
      <nav class="mdl-navigation">
        {#each activeWeek.items as item}
          {#if item.type == "video"}
            <div
              on:click={() => {
                navigate(item);
              }}
              class="row nav"
              class:active={item.active}
            >
              <div class="col-2 ml-n3 pr-1">
                <span class="material-icons"> play_circle_filled</span>
              </div>
              <div class="col-8">{item.name}</div>
              <div class="col-2 mr-1">
                {#if item.done}
                  <span class="material-icons icons">done</span>
                {:else}
                  <span class="material-icons icons">minimize</span>
                {/if}
              </div>
            </div>
          {:else if item.type == "quiz"}
            <div
              on:click={() => {
                navigate(item);
              }}
              class="row nav"
              class:active={item.active}
            >
              <div class="col-2 ml-n3 pr-1">
                <span class="material-icons"> quiz</span>
              </div>
              <div class="col-8">{item.name}</div>
              <div class="col-2 mr-1">
                {#if item.done}
                  <span class="material-icons icons">done</span>
                {:else}
                  <span class="material-icons icons">minimize</span>
                {/if}
              </div>
            </div>
          {:else if item.type == "text"}
            <div
              on:click={() => {
                navigate(item);
              }}
              class="row nav"
              class:active={item.active}
            >
              <div class="col-2 ml-n3 pr-1">
                <span class="material-icons"> article</span>
              </div>
              <div class="col-8">{item.name}</div>
              <div class="col-2 mr-1">
                {#if item.done}
                  <span class="material-icons icons">done</span>
                {:else}
                  <span class="material-icons icons">minimize</span>
                {/if}
              </div>
            </div>
          {:else}
            <div
              on:click={() => {
                navigate(item);
              }}
              class="mdl-navigation__link"
              class:active={activeItem.id == item.id}
            >
              <div class="col-2 ml-n3 pr-1">
                <span class="material-icons"> source</span>
              </div>
              <div class="col-8">{item.name}</div>
              <div class="col-2 mr-1">
                <span class="material-icons icons">done</span>
              </div>
            </div>
          {/if}
        {/each}
      </nav>
    </div>
    <main
      class="mdl-layout__content"
      class:default-primary-color={isDayMood}
      class:night-primary-color={isNightMood}
    >
      <div class="page-content ">
        <br />

        {#if isVideo}
          <div id="video">
            <div class="video2">
              <Video {...videoData} />
              <br />
            </div>
            <div class="row pl-2 pr-2">
              <div class="col-6">
                <span class="material-icons"> thumb_up_off_alt </span>
                <span class="material-icons"> thumb_down_off_alt </span>
              </div>
              <div class="col-6">

                <!-- svelte-ignore a11y-missing-attribute -->
                <a on:click="{next}" class="float-right"> <span class="float-right next">Next <span class="fa fa-angle-right ml-2"></span></span>
                </a>
                 <!-- svelte-ignore a11y-missing-attribute -->
                 <a class="float-right">
                  <span class="float-right prev"><span class="fa fa-angle-left mr-2"></span>Prev</span>
             
                </a>
               
               </div>
            </div>
          </div>
        {:else if isText}
          <div id="text" class="pl-2 pl-sm-4 pr-sm-4 pr-2 ">
            <h2 style="text-align: center;">what we need to know</h2>
            <p class="text">
              Thanks for enrolling in our course Algorithms, Part I. You can
              review the syllabus for an overview of the course components. The
              course is based on a variety of material that we have prepared
              over many years:
            </p>

            <ul class="text">
              <li>
                The lecture videos, lecture slides, programming assignments, and
                "job interview" questions will be released weekly on the course
                website
              </li>
              <li>
                Our textbook Algorithms, 4th edition is the basic reference for
                the material we will be covering. Although the lectures are
                designed to be self-contained, we will assign optional readings
                for students who wish more extensive coverage of the material.
              </li>
            </ul>
            <div class="row">
              <div class="col-12 ">
                <!-- Accent-colored raised button with ripple -->
                <button
                  class="mdl-button float-right mdl-js-button mdl-button--raised mdl-js-ripple-effect accent-color"
                >
                  Mark as Read
                </button>
              </div>
            </div>
          </div>
        {:else if isQuiz}
          <div id="quiz">
            <h3>The title of the Quiz</h3>
            <div id="questionArea">
              <div class="row" id="question">
                <div class="col-12 pl-3">
                  1. The top of a mountain is called its ...
                  <img
                    class="img-fluid pl-4 pt-2"
                    src="images/shop/4.jpg"
                    style="max-width:100%"
                    alt="mountain question"
                  />
                  <div class="row pt-2">
                    <div class="col-12 col-sm-6">
                      <input name="pick" type="radio" /><label for="r"
                        >Peak</label
                      >
                    </div>
                    <div class="col-12 col-sm-6">
                      <input name="pick" type="radio" /><label for="r"
                        >Peak</label
                      >
                    </div>
                    <div class="col-12 col-sm-6">
                      <input name="pick" type="radio" /><label for="r"
                        >Peak</label
                      >
                    </div>
                    <div class="col-12 col-sm-6">
                      <input name="pick" type="radio" /><label for="r"
                        >Peak</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="row" id="question">
                <div class="col-12 pl-3">
                  2. The top of a mountain is called its ...
                  <img
                    class="img-fluid pl-4 pt-2"
                    src="images/shop/4.jpg"
                    style="max-width:100%"
                    alt="mountain question"
                  />
                  <div class="row pt-2">
                    <div class="col-12 col-sm-6">
                      <input name="two" type="radio" /><label for="r"
                        >Peak</label
                      >
                    </div>
                    <div class="col-12 col-sm-6">
                      <input name="two" type="radio" /><label for="r"
                        >Peak</label
                      >
                    </div>
                    <div class="col-12 col-sm-6">
                      <input name="two" type="radio" /><label for="r"
                        >Peak</label
                      >
                    </div>
                    <div class="col-12 col-sm-6">
                      <input name="two" type="radio" /><label for="r"
                        >Peak</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {:else if preQuiz}
          <div class="container pl-2 pr-2" id="preQuiz">
            <strong>Pratice Quiz</strong>
            <h2
              class="mt-3"
              class:default-primary-color={isDayMood}
              class:night-primary-color={isNightMood}
            >
              {activeItem.name}
            </h2>

            <br />
            <br />
            <div class="row">
              <div class="col-12">
                <button
                  on:click={enterQuiz}
                  class="mdl-button float-right mdl-js-button mdl-button--raised mdl-js-ripple-effect accent-color"
                  >Start</button
                >
              </div>
            </div>
            <br />
            <br />
            <hr class:hr-day={isDayMood} class:hr-night={isNightMood} />
            <div class="row">
              <div class="col-sm-9 col-12 ">
                <strong>To Pass</strong>
                {activeItem.content}%
              </div>
              <div class="col-sm-3 col-12">
                <strong>Grade</strong><br /> 80%
              </div>
            </div>
            <hr class:hr-day={isDayMood} class:hr-night={isNightMood} />
          </div>
        {:else if loading}
          <div style="height:100%; width: 100%">
            <p>Loading Contents...</p>
          </div>
        {/if}

        <br />
        <br />
      </div>
    </main>
  </div>
</div>

<div
  class="mdl-spinner mdl-js-spinner "
  class:is-active={loader}
  style="z-index: 100; left:50%; margin-top:40vh"
/>

<style>
  @font-face {
    font-family: "Mark Pro Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Mark Pro Regular"),
      url("fonts/mark/MARKPRO.woff") format("woff");
  }
  @font-face {
    font-family: "Mark Pro Heavy";
    font-style: normal;
    font-weight: normal;
    src: local("Mark Pro Heavy"),
      url("fonts/mark/MARKPROHEAVY.woff") format("woff");
  }

  .body {
    font-family: "Roboto", sans-serif;
  }
  .hr-night {
    border-top: 1px solid white;
  }
  .hr-day {
    border-top: 1px solid black;
  }
  .video2 {
    width: 100%;
  }
  .nav {
    font-family: "Mark Pro Regular";
    font-size: 16px;
    margin-bottom: 10px;
    margin-left: 5px;
    padding-top: 12px;
    padding-left: 2px;
    padding-right: 4px;
    padding-bottom: 12px;
    line-height: 1.8;
  }
  .title {
    font-family: "Mark Pro Heavy";
    line-height: 1.9;
    font-size: 18px;
  }
  .nav:hover {
    background-color: gray;
  }
  .icons {
    color: green;
  }
  /* Palette generated by Material Palette - materialpalette.com/indigo/red */
  .material-icons {
    font-size: 30px;
    margin-right: 30px;
  }

  .night-primary-color {
    background: black;
    color: white;
  }
  .dark-primary-color {
    background: #0c0545;
  }
  .default-primary-color {
    background: white;
    color: black;
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
  .prev {
    border-right: 1px solid black;
    padding-left: 5px;
    padding-right: 5px;
  }
  .next {
    padding-left: 5px;
    padding-right: 5px;
  }
  .text {
    font-size: calc(100% + 1vw + 1vh);
    line-height: 1.5;
  }
  #quiz {
    margin-left: 20px;
  }
  label {
    padding: 4px;
  }
  #question {
    font-size: calc(100% + 0.3vw + 0.3vh);
  }
  .active {
    border-left: 6px solid blue;
  }
</style>
