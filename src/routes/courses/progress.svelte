
<script lang="ts">
import { createEventDispatcher } from "svelte";



    const dispatch = createEventDispatcher();
    dispatch('message',true);
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
    <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
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
    <div class="page-content"><!-- Your content goes here --></div>
  </main>
</div>

<style>
    .course-title {
        font-size: 1.3em;
        font-weight: 400;
        line-height: 1.3;
    }
</style>