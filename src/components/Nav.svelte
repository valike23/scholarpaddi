<script lang="ts">
import { onMount } from "svelte";

	let user: any = {};
	let stage = false;
	
	onMount(()=>{
		user = JSON.parse( sessionStorage.getItem('user'));
		if(user == null) {
			stage = false;
		}
		else {
			stage = true;
		}
	})
</script>

			<!-- 
			=============================================
				Theme Header
			============================================== 
			-->
			<header class="theme-menu-wrapper menu-style-one">
				<div class="container">
					
					<div class="header-wrapper clearfix">
						<!-- Logo -->
						<div class="logo float-left tran4s"><a href="/"><img src="images/logo/logo.png" alt="Logo"></a></div>

						<!-- ============================ Theme Menu ========================= -->
						<nav class="theme-main-menu float-right navbar" id="mega-menu-wrapper">
							<!-- Brand and toggle get grouped for better mobile display -->
						   <div class="navbar-header">
						     <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
						       <span class="sr-only">Toggle navigation</span>
						       <span class="icon-bar"></span>
							   <span class="icon-bar"></span>
							   
						       <span class="icon-bar"></span>
						     </button>
						   </div>
						   <!-- Collect the nav links, forms, and other content for toggling -->
						   <div class="collapse navbar-collapse" id="navbar-collapse-1">
								<ul class="nav">
									<li class="dropdown-holder menu-list"><a href="/" class="tran3s">Home</a>
										
									</li>
									<!-- svelte-ignore a11y-missing-attribute -->
									<li class="dropdown-holder menu-list"><a  class="tran3s">Course</a>
										<ul class="sub-menu width-half">
											<li><a rel=external href="courses/all">All Courses</a></li>
											<!-- svelte-ignore a11y-invalid-attribute -->
											<li class="dropdown-holder"><a href="#">Third Level menu</a>
												<ul class="second-sub-menu">
													<li><a href="#">menu one</a></li>
													<li><a href="#">menu two</a></li>
												</ul>
											</li>
										</ul>
									</li>
								
									<!-- svelte-ignore a11y-missing-attribute -->
									<li class="dropdown-holder menu-list"><a class="tran3s">Events</a>
										<ul class="sub-menu">
											<li><a sapper:prefetch href="event/top?page=1">Top Events</a></li>
											
											<li><a href="event-details.html">My Events</a></li>
											<li><a sapper:prefetch href="event/create">Create An Event</a></li>
										</ul>
									</li>
									<!-- svelte-ignore a11y-missing-attribute -->
									<li class="dropdown-holder menu-list"><a  class="tran3s">News</a>
										<ul class="sub-menu">
											<li><a sapper:prefetch href="/blog">Breaking News</a></li>
											<li><a sapper:prefetch href="/blog/top">Top News</a></li>
											<li><a href="blog-details.html">News for You</a></li>
										</ul>
									</li>
									<li><a href="/projects" class="tran3s">Projects</a></li>
									<li class="login">
										{#if !stage}
										<button  class="tran3s">
											<i class="flaticon-lock"></i><a style="text-decoration: none; color: white" href="/login">Login</a> 
										</button>
										{:else}
										<button  class="tran3s">
											<!-- svelte-ignore a11y-missing-attribute -->
											<i class="flaticon-lock"></i>

											<!-- svelte-ignore a11y-missing-attribute -->
											<a style="text-decoration: none; color: white" >Logout</a> 
										</button>
										{/if}
										
									</li>
								</ul>
						   </div><!-- /.navbar-collapse -->
						</nav> <!-- /.theme-main-menu -->
					</div> <!-- /.header-wrapper -->
				</div>
			</header> <!-- /.theme-menu-wrapper -->
			