<script context="module" lang="ts">
import { url } from '../../Models/common';

    export async function preload( page, session) {
        let query = page.query;
        let campusData = await this.fetch(`${url}api/courses/all?id=${query.page || 1}`);
        let countData = await this.fetch(`${url}api/courses/all`,{method: 'PUT'});
        campusData = await campusData.json();
        countData = await countData.json();
        countData = countData[0]
        console.log('crazy crazy crazy!! crazy crazy fun tonight',countData);
        return {campusData, countData}  
    }
  
</script>
<script lang="ts">
import type { Icourse } from '../../Models/course';
import { showNav } from '../../stores/nav';
showNav.update(n => true );
     export let  campusData;
     export let countData;
     let count = Math.ceil( countData.count/9);
     console.log(count);
     let countArray = [];
     for (let index = 0; index < count; index++) {
         countArray.push({id: index + 1})   
     }
     let courses: Array<Icourse> =  campusData[0];
     const nav = (num:number) =>{
        location.href = 'courses/all?page=' + num;
     }
     
</script>

<svelte:head>
	<title>All Courses</title>
</svelte:head>
<div class="inner-banner">
    <div class="opacity">
        <div class="container">
            <h2>Our Courses</h2>
            <ul>
                <li><a href="/" class="tran3s">Home</a></li>
                <li>/</li>
                <li>Courses</li>
            </ul>
        </div> 
    </div> 
</div> 

 <!-- svelte-ignore a11y-missing-attribute -->

<div class="our-course course-grid">
    <div class="container">
        <div class="row">
            <div class="col-lg-9 col-md-8 col-xs-12 popular-course float-right">
                <div class="course-style-filter clearfix">
                    <ul class="float-left clearfix">
                        <li><a  class="tran3s">Tending</a></li>
                        <li><a  class="tran3s">New</a></li>
                        <li><a  class="tran3s active">Populer</a></li>
                       
                        <li><a  class="tran3s">free</a></li>
                    </ul>
                   
                </div>
                <div class="row">
                   {#each courses as course}
                   <div class="col-lg-4 col-sm-6 col-xs-6">
                    <div class="single-course">
                        <div class="image-box"><img height="200" src="{course.course_image}" alt=""></div>
                        <div class="text">
                            <div class="image"><img height="200" src="images/course/4.jpg" alt="{course.title}"></div>
                            <div class="name clearfix">
                                <h6 class="float-left">Jemmi Koli</h6>
                                {#if course.is_free}
                                <span class="p-bg-color float-right">Free</span>
                                {:else}
                                <strong class="s-color float-right">${course.price}<sup>.00</sup></strong>
                                {/if}
                                
                            </div>
                            <h5 style="height:120px;overflow-y"><a href="courses/{course.title}&{course.id}" class="tran3s">{course.title}</a></h5>
                            <ul class="clearfix">
                                <li class="float-left">
                                    <i class="flaticon-people"></i>
                                    <a  class="tran3s">2,680</a>
                                </li>
                                <li class="float-left">
                                    <i class="flaticon-comments"></i>
                                    <a  class="tran3s">13</a>
                                </li>
                                <li class="float-right">
                                    <i class="flaticon-heart"></i>
                                    <a  class="tran3s">3</a>
                                </li>
                            </ul>
                        </div>
                    </div> <!-- /.single-course -->
                </div>
                   {/each}
                </div> <!-- /.row -->
                <ul class="theme-pagination clearfix">
                    <!-- <li><a  class="tran3s active">1</a></li>
                    <li><a  class="tran3s">2</a></li> -->
                    {#each countArray as item}
                    <li><a href="courses/all?page={item.id}" on:click="{()=>{nav(item.id)}}" class="tran3s">{item.id}</a></li>
                    {/each}
                    
                    <li><a  class="tran3s">Next</a></li>
                </ul> <!-- /.theme-pagination -->
            </div> <!-- /.popular-course -->

            <!-- ************************* SIDEBAR ***************************** -->
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="course-sidebar">
                    <div class="sidebar-categories">
                        <h4>Categories</h4>
                        <div class="panel-group theme-accordion" id="accordion">
                          <div class="panel">
                            <div class="panel-heading active-panel">
                              <h6 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                Web Develoment</a>
                              </h6>
                            </div>
                            <div id="collapse1" class="panel-collapse collapse in">
                              <div class="panel-body">
                                  <ul>
                                      <li><a  class="tran3s">Html/Css</a></li>
                                      <li><a  class="tran3s">jQuery</a></li>
                                      <li><a  class="tran3s">Sass/less</a></li>
                                  </ul>
                              </div>
                            </div>
                          </div> <!-- /panel 1 -->
                          <div class="panel">
                            <div class="panel-heading">
                              <h6 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                                Graphics Design</a>
                              </h6>
                            </div>
                            <div id="collapse2" class="panel-collapse collapse">
                              <div class="panel-body">
                                  <ul>
                                      <li><a  class="tran3s">Html/Css</a></li>
                                      <li><a  class="tran3s">jQuery</a></li>
                                      <li><a  class="tran3s">Sass/less</a></li>
                                  </ul>
                              </div>
                            </div>
                          </div> <!-- /panel 2 -->
                          <div class="panel">
                            <div class="panel-heading">
                              <h6 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                                Web Design</a>
                              </h6>
                            </div>
                            <div id="collapse3" class="panel-collapse collapse">
                              <div class="panel-body">
                                  <ul>
                                      <li><a  class="tran3s">Html/Css</a></li>
                                      <li><a  class="tran3s">jQuery</a></li>
                                      <li><a  class="tran3s">Sass/less</a></li>
                                  </ul>
                              </div>
                            </div>
                          </div> <!-- /panel 3 -->
                          <div class="panel">
                            <div class="panel-heading">
                              <h6 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                                IOS/Android Development</a>
                              </h6>
                            </div>
                            <div id="collapse4" class="panel-collapse collapse">
                              <div class="panel-body">
                                  <ul>
                                      <li><a  class="tran3s">Html/Css</a></li>
                                      <li><a  class="tran3s">jQuery</a></li>
                                      <li><a  class="tran3s">Sass/less</a></li>
                                  </ul>
                              </div>
                            </div>
                          </div> <!-- /panel 4 -->
                          <div class="panel">
                            <div class="panel-heading">
                              <h6 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">
                                Others</a>
                              </h6>
                            </div>
                            <div id="collapse5" class="panel-collapse collapse">
                              <div class="panel-body">
                                  <ul>
                                      <li><a  class="tran3s">Html/Css</a></li>
                                      <li><a  class="tran3s">jQuery</a></li>
                                      <li><a  class="tran3s">Sass/less</a></li>
                                  </ul>
                              </div>
                            </div>
                          </div> <!-- /panel 5 -->
                        </div> <!-- end #accordion -->
                    </div> <!-- /.sidebar-categories -->

                    <div class="course-filter">
                        <h4>Search By Filters</h4>
                        <form action="#" class="main-wrapper">
                            <div class="tag-option">
                                <h5>Tag</h5>
                                <ul class="clearfix">
                                    <li>
                                        <input type="checkbox" id="book" checked>
                                        <label for="book">Book</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="linux">
                                        <label for="linux">Linux</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="design" checked>
                                        <label for="design">Design</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="development" checked>
                                        <label for="development">Development</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="art" checked>
                                        <label for="art">Art</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="web">
                                        <label for="web">Design</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="software">
                                        <label for="software">Softwear</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="php" checked>
                                        <label for="php">PHP</label>
                                    </li>
                                </ul>
                            </div> <!-- /.tag-option -->

                            <div class="course-price-filter">
                                <h5>Price Range</h5>
                                <div class="price-ranger">
                                    <div class="ranger-min-max-block">
                                        <ul class="clearfix">
                                            <li class="float-left">
                                                <label for="min">From</label>
                                                <input type="text" class="min" readonly>
                                            </li>
                                            <li class="float-left">
                                                <label for="max">To</label>
                                                <input type="text" class="max" readonly>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="slider-range"></div>
                                </div> <!-- /price-ranger -->
                            </div> <!-- /.course-price-filter -->

                            <div class="course-work-level">
                                <h5>Work level</h5>
                                <ul class="clearfix">
                                    <li>
                                        <input type="checkbox" id="starting">
                                        <label for="starting">Starting</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="begainer">
                                        <label for="begainer">Begainer</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="expert" checked>
                                        <label for="expert">Expert</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="intermediate">
                                        <label for="intermediate">Intermediate</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="advance">
                                        <label for="advance">Advance</label>
                                    </li>
                                </ul>
                            </div> <!-- /.course-work-level -->

                            <div class="course-location">
                                <h5>Location</h5>
                                <div class="form-group">
                                  <div>
                                    <select id="loaction" class="selectpicker show-tick form-control" data-live-search="true">
                                      <option>Dhaka</option>
                                      <option>Bab Ezzouar</option>
                                      <option>Baguio</option>
                                      <option>London</option>
                                      <option>Paris</option>
                                      <option>Dubai</option>
                                      <option>New York</option>
                                      <option>Singapore</option>
                                      <option>Kuala Lumpur</option>
                                      <option>Istanbul</option>
                                      <option>Tokyo</option>
                                      <option>Seoul</option>
                                      <option>Amsterdam</option>
                                      <option>Osaka</option>
                                      <option>Vienna</option>
                                    </select>
                                  </div>
                                </div>
                            </div> <!-- /.course-location -->

                            <div class="button-wrapper"><input type="submit" value="Apply filters" class="p-bg-color tran3s"></div>
                        </form> <!-- /.main-wrapper -->
                    </div> <!-- /.course-filter -->
                </div> <!-- /.course-sidebar -->
            </div> <!-- /.col- -->
        </div> <!-- /.row -->
    </div> <!-- /.container -->
</div> <!-- /.our-course -->

