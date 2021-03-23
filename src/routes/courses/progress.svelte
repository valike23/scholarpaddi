
<script lang="ts">
import { showNav } from "../../stores/nav";


showNav.update(n => false );

</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
    <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</svelte:head>

<div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <div class="mdl-layout-spacer"></div>
    
<div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
      mdl-textfield--floating-label ">
<label class="mdl-button mdl-js-button mdl-button--icon"
   for="fixed-header-drawer-exp">
<i class="material-icons">search</i>
</label>
<div class="mdl-textfield__expandable-holder">
<input class="mdl-textfield__input" type="text" name="sample"
     id="fixed-header-drawer-exp">
</div>
</div>
<button id="demo-menu-lower-right"
class="mdl-button mdl-js-button mdl-button--icon">
<i class="material-icons">more_vert</i>
</button>

<ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
for="demo-menu-lower-right">
<li class="mdl-menu__item">Valentine Emmanuel</li>
<li class="mdl-menu__item">Profile</li>
<li disabled class="mdl-menu__item">Disabled Action</li>
<li class="mdl-menu__item">Yet Another Action</li>
</ul> 
     
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">ScholarPaddi</span>
    <p class="course-title">Neural Network and Deep Learning</p>
     <!-- svelte-ignore a11y-invalid-attribute -->
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" href=""> <i class="material-icons">dashboard_customize</i> Overview</a>
      <a class="mdl-navigation__link" href=""><i class="material-icons">looks_one</i> Week 1</a>
      <a class="mdl-navigation__link" href=""><i class="material-icons">looks_two</i> Week 2</a>
      <a class="mdl-navigation__link" href=""><i class="material-icons">looks_3</i> Week 3</a>
      <a class="mdl-navigation__link" href=""><i class="material-icons">looks_4</i> Week 4</a>
      <a class="mdl-navigation__link" href=""><i class="material-icons">forum</i> Discussion Forum</a>
     
      <a class="mdl-navigation__link" href="">Course Info</a>
    </nav>
  </div>
  <main class="mdl-layout__content">
    <div class="page-content">
      <div class="overview">
        <div class="mdl-card mdl-shadow--2dp long-card ml-2 ml-sm-3 ml-md-4">
          <div class="mdl-card__title row">
            <p class="mdl-card__title-text title col-9">Week 1 </p>
            <p class="mdl-card__title-text title col-3">5 hrs 20 mins</p>
          </div>
          <div class="mdl-card__supporting-text">
            <div class="row">
              <div class="col">
                <p class="block-title">
                  Course Introduction
                </p>
              </div>
            </div>
          </div>
          <div class="row ">
            <div class="col-sm-6 col-12 items mt-3" >
              
                Videos <span class="circle ml-2 mb-n1"></span> <span>45 minutes</span><br>
             
              Reading <span class="circle ml-2 mb-n1"></span> <span>45 minutes</span><br>
              Practice Exercise <span class="circle ml-2 mb-n1"></span> <span>45 minutes</span><br>
            </div>
            <div class="col-offset-1 mb-2 " style="border-right:1px solid gray"></div>
           <div class="d-block" style="border-bottom: 2px solid black"></div>
          
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
                  <p class="box-body">Due</p>
                  24, September 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

<style>
  p {
    font-family: cursive;
  }
  div {
    font-family: cursive;
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
    display:inline-block;
    
  }
  .box-body {
    font-weight: 500;
    font-size: 1em;
    color: gray;
    text-align: left
  }
  .block-title {
    font-size: 1.5em;
  }
   
</style>