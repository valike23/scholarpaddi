<script context="module" lang="ts">

export async  function preload( page, session) {
    let id = page.params.slug;
    let ary = id.split('&');
    console.log(JSON.stringify(ary));
    let campusData = await this.fetch('api/courses/course?id=' + ary[0]);
    const feedBackData = await this.fetch('api/courses/student_feedback?id=' + ary[1])
    let categoryData = await this.fetch('api/courses/category');
    campusData = await campusData.json();
    const feedBack = await feedBackData.json();
    let categories = await categoryData.json();
    const course = campusData[0];
    return {course, categories, feedBack}
}

</script>
<script lang="ts">
import type { Icourse, IstudentFeedBack } from "../../Models/course";
import moment from 'moment';
import type { Icategory } from "../../Models/category";
import { showNav } from "../../stores/nav";

showNav.update(n => true );
    export let course;
    export let categories: Array<Icategory>;
    export let feedBack: Array<IstudentFeedBack>;
    let totalRatings: number = 0;
    feedBack.forEach((e,i) =>{
        totalRatings = e.ratings as unknown as number + totalRatings;
        let ary = [];
        for (let index = 0; index < e.ratings; index++) {
            ary.push(index); 
        }
        feedBack[i].ratingList = ary;
    })
    const feeds :Array<IstudentFeedBack> =  [];
    for (let index = 0; index < feedBack.length; index++) {
        const element = feedBack[index];
        feeds.push(element);
        console.log(index);
        if(index >= 3) {
            console.log('done')
            break;
        };
    }
   
    let courseData: Icourse = course;
    const m = moment(course.created_date);
    console.log(feedBack);
</script>


<div class="inner-banner">
    <div class="opacity">
        <div class="container">
            <h2>Course Details</h2>
            <ul>
                <li><a href="/" class="tran3s">Home</a></li>
                <li>/</li>
                <li>Courses</li>
            </ul>
        </div> <!-- /.container -->
    </div> <!-- /.opacity -->
</div> <!-- /.inner-banner -->


<!-- 
=============================================
    Course Details
============================================== 
-->
<div class="course-details">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-xs-12">
                <div class="details-wrapper">
                    <div class="course-title">
                        <h2>{courseData.title}</h2>
                        <span>Posted  {m.fromNow()}</span>
                    </div> <!-- /.course-title -->
                    <div class="course-info row">
                        <div class="col-xs-4">
                            <div>
                                <i class="flaticon-time"></i>
                                <p>Duration</p>
                                <b>18 class - 36 Hours</b>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div>
                                <i class="flaticon-bookmark"></i>
                                <p>Categories</p>
                                <b>{courseData.sub_category}</b>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div>
                                <i class="flaticon-star"></i>
                                <p><b>4.5</b> ({feedBack.length})</p>
                                <ul>
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star-half-o" aria-hidden="true"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div> <!-- /.course-info -->
                    <img src="{courseData.course_image}" alt="">
                    <p class="p1">{courseData.description}</p>
                    <div class="learn-list">
                        <h3>What Will I Learn?</h3>
                        <ul class="row">
                            {#each courseData.what_to_learn as learn}
                            <li class="col-sm-6 col-xs-12"><span>{learn}</span></li>
                         
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
                        <div class="panel-group theme-accordion" id="accordionTwo">
                        {#each courseData.weeks as week}
                        <div class="panel">
                            <div class="panel-heading">
                              <h5 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordionTwo" href="#{"week" + week.id}" class="clearfix">
                                     <h6 class="float-left">
                                        <span>Week {week.week_order}</span>
                                        {week.name}
                                    </h6>
                                    <p class="float-right">13:41min</p>
                                 </a>
                              </h5>
                            </div>
                            <div id="{"week" + week.id}" class="panel-collapse collapse">
                              <div class="panel-body">
                                  <ul>
                                      {#each week.items as item}
                                      {#if item.type == 'video' && item.preview}
                                         <li class="clearfix">
                                            <span class="float-left"><i class="fa fa-play-circle" aria-hidden="true"></i> {item.name} <a data-fancybox href="{item.content}" class="tran3s preview p-bg-color">Preview </a></span>
                                            <span class="float-right">10:23min</span>
                                        </li>
                                    {:else if item.type == 'video' && !item.preview}
                                         <li class="clearfix">
                                            <span class="float-left"><i class="fa fa-play-circle" aria-hidden="true"></i> {item.name} </span>
                                            <span class="float-right">10:23min</span>
                                        </li>
                                    {:else}
                                    <li class="clearfix">
                                        <span class="float-left"><a href="#" class="tran3s"><i class="fa fa-file-text-o" aria-hidden="true"></i> {item.name}</a></span>
                                        <span class="float-right">75kb</span>
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
                      <div class="course-feedback">
                        <h3>Students Feedback</h3>
                        <div class="feedback-container">
                            <ul class="clearfix">
                                <li class="float-left">
                                    <h2>{totalRatings/feedBack.length}</h2>
                                    <p>Avarage rating ({feedBack.length})</p>
                                    <ul>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star-half-o" aria-hidden="true"></i></li>
                                    </ul>
                                </li>
                                <li class="float-left">
                                    <ul class="clearfix">
                                        <li>5 Star</li>
                                        <li><div style="width:77%;"></div></li>
                                        <li>87%</li>
                                        <li class="float-right">(5 Reviews)</li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li>4 Star</li>
                                        <li><div style="width:70%;"></div></li>
                                        <li>70%</li>
                                        <li class="float-right">(2 Reviews)</li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li>3 Star</li>
                                        <li><div style="width:60%;"></div></li>
                                        <li>32%</li>
                                        <li class="float-right">(1 Reviews)</li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li>2 Star</li>
                                        <li><div style="width:45%;"></div></li>
                                        <li>10%</li>
                                        <li class="float-right">(1 Reviews)</li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li>1 Star</li>
                                        <li><div style="width:2%;"></div></li>
                                        <li>0%</li>
                                        <li class="float-right">(0 Reviews)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div> <!-- /.feedback-container -->
                        {#each feedBack as feeds}
                        <div class="single-review clearfix">
                            <img src="images/course/30.jpg" alt="" class="float-left">
                            <div class="text float-left">
                                <div class="clearfix">
                                    <div class="float-left">
                                        <h6>{feeds.full_name}</h6>
                                        <span>{moment(feeds.created_date).fromNow()}</span>
                                    </div>
                                    <ul class="float-right">
                                       {#each feeds.ratingList  as list}
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                       {/each}
                                       
                                    </ul>
                                </div> <!-- /.clearfix -->
                                <p>{feeds.comment}</p>
                            </div> <!-- /.text -->
                        </div>
                        {/each}
                    </div> <!-- /.course-feedback -->

                   
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
                                <strong class="s-color"><del>{course.price}. <sup>99</sup></del>${course.price - course.price/100 * course.discount}<sup>.99</sup></strong>
                                {:else}
                                <strong class="s-color">${course.price}<sup>.99</sup></strong>
                               
                            {/if}
                                
                            </li>
                            <li class="float-right"><a href="#" class="tran3s"><i class="flaticon-like"></i></a></li>
                        </ul>
                        <ul class="info-list row">
                            <li class="col-xs-6"><b>Lectures :</b> 9</li>
                            <li class="col-xs-6"><b>Skill :</b> {course.level}</li>
                            <li class="col-xs-6"><b>Language :</b> {course.language}</li>
                            <li class="col-xs-6"><b>Duration :</b> 40:23</li>
                        </ul>
                        <div>
                            <ul class="clearfix student-image">
                              {#each feeds as feed}
                              <li><img src="{feed.profile_pics}" alt=""></li>
                              {/each}
                              {#if feedBack[4]}
                              <li>
                                <div class="image">
                                    <img src="{feedBack[4].profile_pics}" alt="">
                                    <div class="opacity">{feedBack.length - 4}+</div>
                                </div>
                            </li>
                              {/if}
                                
                            </ul>
                            <p><b>{feedBack.length}</b> Students Enroolled</p>
                        </div>
                        <a href="#" class="tran3s s-bg-color take-course hvr-trim">Take this course</a>
                    </div> <!-- /.sidebar-course-information -->

                    <div class="sidebar-instructor-info">
                        <h4>Instructor Info</h4>
                        <div class="wrapper">
                            <div class="name">
                                <img src="{courseData.author_pics}" alt="{courseData.author}">
                                <h6>{courseData.author}</h6>
                                <span>{courseData.author_career}</span>
                                <ul>
                                    <li><a href="#" class="tran3s"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#" class="tran3s"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                                    <li><a href="#" class="tran3s"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
                                </ul>
                            </div> <!-- /.name -->
                            <p>
                                {courseData.author_bio}
                            </p>
                            <a href="#" class="tran3s p-bg-color follow hvr-trim">Follow Now</a>
                        </div> <!-- /.wrapper -->
                    </div> <!-- /.sidebar-instructor-info -->

                    <div class="sidebar-categories">
                        <h4>Categories</h4>
                        <div class="panel-group theme-accordion" id="accordion">
                         
                         {#each categories as cat}
                         <div class="panel">
                            <div class="panel-heading">
                              <h6 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse{cat.id}">
                                {cat.name}</a>
                              </h6>
                            </div>
                            <div id="collapse{cat.id}" class="panel-collapse collapse">
                              <div class="panel-body">
                                  <ul>
                                     {#each cat.subCategory as sub}
                                        <li><a href="#" class="tran3s">{sub.name}</a></li>
                                     {/each}
                                  </ul>
                              </div>
                            </div>
                          </div> 
                         {/each}
                        </div> <!-- end #accordion -->
                    </div> <!-- /.sidebar-categories -->
                </div> <!-- /.course-sidebar -->
            </div> <!-- /.col- -->
        </div> <!-- /.row -->
    </div> <!-- /.container -->
</div> 