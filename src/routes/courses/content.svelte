<script lang="ts">
    import { onMount } from "svelte";
    import { showNav } from "../../stores/nav";
    import Video from '../../components/Video.svelte';
    import type { Ivideo } from "../../Models/auxilary";
    let isVideo = false;
    let isText = false;
    let isQuiz = false;
    let isResources = false;
    let preQuiz = true;
    const videoData: Ivideo = 
    {
      quizs: [
        {
          time: '120',
          questions: [
            {
              quiz: "who is the president of Nigeria?",
              option1: "Buhari",
              option2: "Mark",
              option3: "Smith",
              option4: "Lorde",
              answer: "Buhari",
              explantion: "Buhari was elected president by the majority of " + 
              " miscrenants in the country this  was to ensure the majority of"+
              " the country remain in perpertual poverty while a minority enjoy" +
              " the so called dividence of democracy."
            },
            {
              quiz: "who is the president of USA?",
              option1: "Buhari",
              option2: "Mark",
              option3: "Biden",
              option4: "Lorde",
              answer: "Biden",
              explantion: "Joseph Biden also known as sleepy joe is the 46th president" + 
              " of the United States he had made laws that would destroy his country"+
              " almost like he is sick and dying and what the hell... his reach could" +
              " end up destroying the world."
            }
          ]
        },
        {
          time: '129',
          questions: [
            {
              quiz: "who is the president of Nigeria?",
              option1: "Buhari",
              option2: "Mark",
              option3: "Smith",
              option4: "Lorde",
              answer: "Buhari",
              explantion: "Buhari was elected president by the majority of " + 
              " miscrenants in the country this  was to ensure the majority of"+
              " the country remain in perpertual poverty while a minority enjoy" +
              " the so called dividence of democracy."
            },
            {
              quiz: "who is the president of USA?",
              option1: "Buhari",
              option2: "Mark",
              option3: "Biden",
              option4: "Lorde",
              answer: "Biden",
              explantion: "Joseph Biden also known as sleepy joe is the 46th president" + 
              " of the United States he had made laws that would destroy his country"+
              " almost like he is sick and dying and what the hell... his reach could" +
              " end up destroying the world."
            }
          ]
        }
      ],
      ads: [ {
        img: 'images/event/1.jpg',
        time:  '100'
      },
      {
        img: 'images/event/2.jpg',
        time:  '150'
      }],
      sources: [{src: 'videos/binary_classfication_01.mp4',
                size: '576'},
                {src: 'videos/logistic_regression_03.mp4',
                size: '720'},
                {src: 'videos/logistic_regression_02.mp4',
                size: '1080'}],
      poster: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
      tracks: [{
        kind: 'captions',
        label: 'English',
        srcLang: 'en',
        src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
        isDefault: true
      },
      {
        kind: 'captions',
        label: 'French',
        srcLang: 'fr',
        src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt',
        isDefault: false
      }]
    }
    
    showNav.update(n => false );
    onMount(()=>{
       
        
    })
    
</script>    
<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
    <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

</svelte:head>
<div class="body">
    <div class="mdl-layout mdl-js-layout   mdl-layout--fixed-drawer
            mdl-layout--fixed-header ">
      <header class="mdl-layout__header text-primary-color dark-primary-color">
        <div class="mdl-layout__header-row">
           <div>schoolPaddi</div>
           <div class="mdl-layout-spacer"></div>
           <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right">
              <label class="mdl-button mdl-js-button mdl-button--icon"
               for="fixed-header-drawer-exp">
                <i class="material-icons">search</i>
              </label>
              <div class="mdl-textfield__expandable-holder">
                <input class="mdl-textfield__input" type="text" name="sample"
                 id="fixed-header-drawer-exp">
              </div>
            </div>
          </div>
       </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Title</span>
      <!-- svelte-ignore a11y-missing-attribute -->
    <nav class="mdl-navigation">
      <p class="mdl-navigation__link active"> <span class="material-icons">
        play_circle_filled
        </span> Artifical Intelligence Align</p>
      <p class="mdl-navigation__link"><span class="material-icons">
        article
        </span>What it takes to be great</p>
      <p class="mdl-navigation__link"><span class="material-icons">
        source
        </span>The file to download</p>
    
      <p class="mdl-navigation__link"><span class="material-icons">
        quiz
        </span>first quiz</p>
    </nav>
  </div>
  <main class="mdl-layout__content">
    <div class="page-content default-primary-color">
        <br>
        {#if isVideo}
          <div id="video">
            <div class="video2">

              <Video {...videoData}></Video>
              <br>
            </div>
            <div class="row pl-2 pr-2">
              <div class="col-6">
                <span class="material-icons">
                  thumb_up_off_alt
                </span>
                <span class="material-icons">
                  thumb_down_off_alt
                </span>
              </div>
              <div class="col-6">
              
                <span class="float-right next">Next</span>
                <span class="float-right prev">Prev</span>
             
              </div>
            </div>
          </div>
          {:else if isText}
            <div id='text' class="pl-2 pl-sm-4 pr-sm-4 pr-2 ">
              <h2 style="text-align: center;">what we need to know</h2>
              <p class="text">Thanks for enrolling in our course Algorithms, Part I. 
              You can review the syllabus for an overview of the course components. 
              The course is based on a variety of material that we have prepared over many years:
  
              </p>
            
                <ul class="text">
                  <li>The lecture videos, lecture slides, programming assignments, 
                    and "job interview" questions will be released weekly on the course website
                  </li>
                  <li>
                    Our textbook Algorithms, 4th edition is the basic reference for the material we will be covering.
                    Although the lectures are designed to be self-contained, we will assign optional readings for students 
                    who wish more extensive coverage of the material.
                  </li>
                </ul>
              <div class="row">
                <div class="col-12 ">
                  <!-- Accent-colored raised button with ripple -->
                  <button class="mdl-button float-right mdl-js-button mdl-button--raised mdl-js-ripple-effect accent-color">
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
                    <img class="img-fluid pl-4 pt-2" src="images/shop/4.jpg" style="max-width:100%" alt="mountain question">
                    <div class="row pt-2">
                        <div class="col-12 col-sm-6">
                          <input name="pick" type="radio"><label for="r">Peak</label>
                        </div>
                        <div class="col-12 col-sm-6">
                          <input name="pick" type="radio"><label for="r">Peak</label>
                        </div>
                        <div class="col-12 col-sm-6">
                          <input name="pick" type="radio"><label for="r">Peak</label>
                        </div>
                        <div class="col-12 col-sm-6">
                          <input name="pick" type="radio"><label for="r">Peak</label>
                        </div>
                    </div>
                  </div>
                </div>
                <hr>
                <div class="row" id="question">
                  <div class="col-12 pl-3">
                    2. The top of a mountain is called its ...
                    <img class="img-fluid pl-4 pt-2" src="images/shop/4.jpg" style="max-width:100%" alt="mountain question">
                    <div class="row pt-2">
                        <div class="col-12 col-sm-6">
                          <input name="two" type="radio"><label for="r">Peak</label>
                        </div>
                        <div class="col-12 col-sm-6">
                          <input name="two" type="radio"><label for="r">Peak</label>
                        </div>
                        <div class="col-12 col-sm-6">
                          <input name="two" type="radio"><label for="r">Peak</label>
                        </div>
                        <div class="col-12 col-sm-6">
                          <input name="two" type="radio"><label for="r">Peak</label>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {:else if preQuiz}
            <div class="container pl-2 pr-2" id="preQuiz">
              <strong>Pratice Quiz</strong>
              <h2 class="mt-3">Interview Questions Test your skills to upgrade</h2>

              <br>
              <br>
              <div class="row">
                <div class="col-12">
                  <button class="mdl-button float-right mdl-js-button mdl-button--raised mdl-js-ripple-effect accent-color">Start</button>
                </div>
              </div>
              <br>
              <br>
              <hr>
              <div class="row">
                <div class="col-sm-9 col-12 ">
                  <strong>To Pass</strong>
                  80%
                </div>
                <div class="col-sm-3 col-12">
                  <strong>Grade</strong><br> 80%
                </div>
              </div>
              <hr>
            </div>
        {/if}
      
       
        <br>
        <br>
       

    </div>
  </main>
</div>
</div>
<style>
  .body {
    font-family: 'Roboto', sans-serif;
  }
  .video2 {
    width: 100%;
    
  }
  /* Palette generated by Material Palette - materialpalette.com/indigo/red */
.material-icons{
  font-size: 30px;
  margin-right: 30px;
}
.dark-primary-color    { background: #0C0545; }
.default-primary-color { background: white; }
.text-primary-color    { color: #FFFFFF; }
.accent-color { background: #D3202A;
              color: white
}
.accent-color:hover {
              background: #D3202A;
              color: white
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
  padding: 4px
}
#question {
  font-size: calc(100% + 0.3vw + 0.3vh);
}
.active {
  border-left: 6px solid blue;
}

</style>