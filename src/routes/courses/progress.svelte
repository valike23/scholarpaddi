
<script lang="ts">
import { showNav } from "../../stores/nav";


showNav.update(n => false );
let isOverView: boolean = false;
let isWeek: boolean = false;


</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
    <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
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
      {#if isOverView}
      <div class="overview">
        <!-- repeat the below div for wk2 to wk4 -->
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
      {:else if isWeek}
      <div id="wkpage">
        <h3 class="ml-4 mt-4">Week 1</h3>

        <div class="card">
          <div class="row card-body">
            <div class="col-7 col-sm-9">
              <p class="bold-text">Week 1</p>
              <p>Discuss and ask questions about week 1</p>
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

              <ol>
                <li>Apply the union-find data type to solve problems in science, engineering, and industry.
                </li>
                <li>
                    Define the union-find (or disjoint sets) data type.
                </li>

                 <li>
                    Compare the performance of different algorithms for the union-find data type.
                </li>
                 <li>
                    Design different algorithms (quick find, quick union, weighted quick union, path compression) for the union-find data type.

               </li>
                <li>
                  Develop Java implementations of different algorithms for the union-find data type.
                </li>
                  <li>
                  Use the parent-link representation to represent tree data structures.
                </li>
                </ol>
            </div>
          </div>
        </div>
        <div class="card mt-4 pb-5 pt-2 pl-3">
          <div class="row col-12 ">
            <p class="bold-text">Week Progress</p>
          </div>
          <div class="row">
            <div class="col-9 ml-0 ml-sm-3">
              <i style="border-radius: 50%" class="material-icons">menu_book</i>

                <strong style="font-size:15px">Reading:</strong>  This book is for reading :
                <span class="small-text">10 mins</span>


            </div>

            <div class="col-2">

              <span class="float-right">
                <button class="rsm" >Resume</button>
              </span>
            </div>
          </div>

        </div>
      </div>
      {:else}
      <div id="courseInfo">
        <br>
        <h2 class="text-center">Algorithms, Part 1</h2>
        <div class="card p-3 mb-2">
          <p class="bold-text">About Course</p>
          <p>
            This course covers the essential information that every serious programmer needs to know about algorithms and data structures, with emphasis on applications and scientific performance analysis of Java implementations. Part I covers elementary data structures, sorting, and searching algorithms. Part II focuses on graph- and string-processing algorithms.

            All the features of this course are available for free.  It does not offer a certificate upon completion.
          </p>
        </div>
        <div class="card p-3 mb-2">
          <p class="bold-text">Instructor</p>
          <div class="row">
            <div class="col-3">
              <div style="background-image: url('images/portfolio/1.jpg')" class="profile-pics">

              </div>
            </div>
            <div class="col-9">
              <p class="bold-text">
                Taught by:
              </p>
              <p>Kevin Smith, Software Developer </p>
            </div>
          </div>
          <div class="row">
            <table class="mdl-data-table mdl-js-data-table mb-n3">
             
              <tbody>
                <tr>
                  <td class="mdl-data-table__cell--non-numeric"><i class="icon fa fa-check-circle-o"></i><strong>Level </strong></td>
                
                  <td class="mdl-data-table__cell--non-numeric table-wrap">Intermidate</td>
                </tr>
                <tr>
                  <td class="mdl-data-table__cell--non-numeric"><i class="icon fa fa-clock-o"></i><strong>Commitment </strong></td>
                 
                  <td class="mdl-data-table__cell--non-numeric table-wrap">4 Weeks of Study and <br> 3 hours per week</td>
                </tr>
                <tr>
                  <td class="mdl-data-table__cell--non-numeric"><i class="icon fa fa-graduation-cap"></i><strong>How to Pass </strong></td>
                 
                  <td class="mdl-data-table__cell--non-numeric table-wrap">Complete all courses <br> and solve all assignment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="card p-3 mb-2">
          <p class="bold-text">Specification and related courses</p>
          <p>Artificial Intelligence and remote Learning </p>
          <small>complete course series on the world of AI and technology</small>
          <div class="row mt-4">
            <div class="col-3">
              <div class="course-image"></div>
            </div>
            <div class="col-9">
              <p class="bold-text">
                Introduction to Programming
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                 It has survived not only five centuries, but also the leap into electronic typesetting, 
                 remaining essentially unchanged. It was popularised 
                in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
              </p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-3">
              <div class="course-image"></div>
            </div>
            <div class="col-9">
              <p class="bold-text">
                Introduction to Programming
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                 It has survived not only five centuries, but also the leap into electronic typesetting, 
                 remaining essentially unchanged. It was popularised 
                in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
              </p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-3">
              <div class="course-image"></div>
            </div>
            <div class="col-9">
              <p class="bold-text">
                Introduction to Programming
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                 It has survived not only five centuries, but also the leap into electronic typesetting, 
                 remaining essentially unchanged. It was popularised 
                in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
              </p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-3">
              <div class="course-image"></div>
            </div>
            <div class="col-9">
              <p class="bold-text">
                Introduction to Programming
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                 It has survived not only five centuries, but also the leap into electronic typesetting, 
                 remaining essentially unchanged. It was popularised 
                in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
              </p>
            </div>
          </div>
        </div>

        
       

      </div>
      {/if}
    </div>
  </main>
</div>

<style>
  .course-image {
    background-image: url('images/portfolio/2.jpg');
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
    background-color:rgb(31, 31, 236) ;
    padding: 5px;
    width: 0px;
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
    color: rgb(31, 31, 236);
    background-color: white;
    border: 1px rgb(31, 31, 236) solid;
  }
  .tran3s:hover {
    color: white;
    background-color:rgb(31, 31, 236);;
  }
  p {
    font-family: 'Playfair Display', serif;
    font-weight: 500;
  }
  div {
    font-family: 'Playfair Display', serif;;
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