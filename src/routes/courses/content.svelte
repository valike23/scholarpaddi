<script lang="ts">
    import { onMount } from "svelte";
    import { showNav } from "../../stores/nav";
    import Video from '../../components/Video.svelte';
    import type { Ivideo } from "../../Models/auxilary";
    const videoData: Ivideo = {
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
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">

</svelte:head>
<div>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
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
      <a class="mdl-navigation__link">Link</a>
      <a class="mdl-navigation__link">Link</a>
      <a class="mdl-navigation__link">Link</a>
    
      <a class="mdl-navigation__link">Link</a>
    </nav>
  </div>
  <main class="mdl-layout__content">
    <div class="page-content">
        <br>
        <div class="video2">

          <Video {...videoData}></Video>
        </div>
    </div>
  </main>
</div>
</div>
<style>
  .video2 {
    width: 100%;
    height: 400px;
  }
</style>