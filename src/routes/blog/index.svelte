<script context="module" lang="ts">
	export function preload() {
		return this.fetch(`blog.json`).then((r: { json: () => any; }) => r.json()).then((posts: { slug: string; title: string, html: any }[]) => {
			return { posts };
		});
	}
</script>

<script lang="ts">
	export let posts: { slug: string; title: string, html: any }[];
</script>

<style>
	
</style>

<svelte:head>
	<title>scholarPaddi: Breaking News</title>
</svelte:head>

<div class="inner-banner">
	<div class="opacity">
		<div class="container">
			<h2>Breaking News</h2>
			<ul>
				<li><a href="/" class="tran3s">Home</a></li>
				<li>/</li>
				<li>Blog</li>
			</ul>
		</div> <!-- /.container -->
	</div> <!-- /.opacity -->
</div> <!-- /.inner-banner -->



<!-- 
=============================================
	Our Blog
============================================== 
-->
<div class="our-blog blog-innner-page">
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-xs-12">
				<div class="row">
					<div class="col-sm-6">
						<div class="single-blog">
							<div class="image"><img src="images/blog/1.jpg" alt=""></div>
							<ul>
								<li>
									<i class="flaticon-comments"></i>
									<a href="#" class="tran3s">13</a>
								</li>
								<li>
									<i class="flaticon-heart"></i>
									<a href="#" class="tran3s">3</a>
								</li>
							</ul>
							<h4><a href="blog-details.html" class="tran3s">Build Education Website...</a></h4>
							<p>At about the same time, Rahul Roy Chowdhury took charge of Google team that oversees...</p>
							<a href="blog-details.html" class="tran3s">Read More</a>
						</div> <!-- /.single-blog -->
					</div> <!-- /.col- -->
					<div class="col-sm-6">
						<div class="single-blog">
							<div class="image"><img src="images/blog/2.jpg" alt=""></div>
							<ul>
								<li>
									<i class="flaticon-comments"></i>
									<a href="#" class="tran3s">13</a>
								</li>
								<li>
									<i class="flaticon-heart"></i>
									<a href="#" class="tran3s">3</a>
								</li>
							</ul>
							<h4><a href="blog-details.html" class="tran3s">Build Education Website...</a></h4>
							<p>At about the same time, Rahul Roy Chowdhury took charge of Google team that oversees...</p>
							<a href="blog-details.html" class="tran3s">Read More</a>
						</div> <!-- /.single-blog -->
					</div> <!-- /.col- -->
					<div class="col-sm-6">
						<div class="single-blog">
							<div class="image"><img src="images/blog/7.jpg" alt=""></div>
							<ul>
								<li>
									<i class="flaticon-comments"></i>
									<a href="#" class="tran3s">13</a>
								</li>
								<li>
									<i class="flaticon-heart"></i>
									<a href="#" class="tran3s">3</a>
								</li>
							</ul>
							<h4><a href="blog-details.html" class="tran3s">Build Education Website...</a></h4>
							<p>At about the same time, Rahul Roy Chowdhury took charge of Google team that oversees...</p>
							<a href="blog-details.html" class="tran3s">Read More</a>
						</div> <!-- /.single-blog -->
					</div> <!-- /.col- -->
					<div class="col-sm-6">
						<div class="single-blog">
							<div class="image"><img src="images/blog/8.jpg" alt=""></div>
							<ul>
								<li>
									<i class="flaticon-comments"></i>
									<a href="#" class="tran3s">13</a>
								</li>
								<li>
									<i class="flaticon-heart"></i>
									<a href="#" class="tran3s">3</a>
								</li>
							</ul>
							<h4><a href="blog-details.html" class="tran3s">Build Education Website...</a></h4>
							<p>At about the same time, Rahul Roy Chowdhury took charge of Google team that oversees...</p>
							<a href="blog-details.html" class="tran3s">Read More</a>
						</div> <!-- /.single-blog -->
					</div> <!-- /.col- -->
					<div class="col-sm-6">
						<div class="single-blog">
							<div class="image"><img src="images/blog/9.jpg" alt=""></div>
							<ul>
								<li>
									<i class="flaticon-comments"></i>
									<a href="#" class="tran3s">13</a>
								</li>
								<li>
									<i class="flaticon-heart"></i>
									<a href="#" class="tran3s">3</a>
								</li>
							</ul>
							<h4><a href="blog-details.html" class="tran3s">Build Education Website...</a></h4>
							<p>At about the same time, Rahul Roy Chowdhury took charge of Google team that oversees...</p>
							<a href="blog-details.html" class="tran3s">Read More</a>
						</div> <!-- /.single-blog -->
					</div> <!-- /.col- -->
					<div class="col-sm-6">
						<div class="single-blog">
							<div class="image"><img src="images/blog/10.jpg" alt=""></div>
							<ul>
								<li>
									<i class="flaticon-comments"></i>
									<a href="#" class="tran3s">13</a>
								</li>
								<li>
									<i class="flaticon-heart"></i>
									<a href="#" class="tran3s">3</a>
								</li>
							</ul>
							<h4><a href="blog-details.html" class="tran3s">Build Education Website...</a></h4>
							<p>At about the same time, Rahul Roy Chowdhury took charge of Google team that oversees...</p>
							<a href="blog-details.html" class="tran3s">Read More</a>
						</div> <!-- /.single-blog -->
					</div> <!-- /.col- -->
				</div> <!-- /.row -->
				<ul class="theme-pagination clearfix">
					<li><a href="#" class="tran3s active">1</a></li>
					<li><a href="#" class="tran3s">2</a></li>
					<li><a href="#" class="tran3s">3</a></li>
					<li><a href="#" class="tran3s">Next</a></li>
				</ul> <!-- /.theme-pagination -->
			</div>
			<div class="col-md-4 col-sm-6 col-xs-12 theme-sidebar">
				<form action="#" class="sidebar-search">
					<input type="text" placeholder="Search">
					<button class="tran3s"><i class="flaticon-search"></i></button>
				</form>
				<div class="sidebar-categories">
					<h4>Categories</h4>
					<ul>
						<li><a href="#" class="tran3s">Web Develoment</a></li>
						<li><a href="#" class="tran3s">Graphic Design</a></li>
						<li><a href="#" class="tran3s">Web Design</a></li>
						<li><a href="#" class="tran3s">IOS/Android Development</a></li>
						<li><a href="#" class="tran3s">Others</a></li>
					</ul>
				</div> <!-- /.sidebar-categories -->
				<div class="sidebar-recent-news">
					<h4>Recent News</h4>
					<ul>
						<li class="single-news clearfix">
							<img src="images/blog/4.jpg" alt="" class="float-left">
							<div class="post float-left">
								<h6><a href="blog-details.html" class="tran3s">How to Become  Master In Java scrpt...</a></h6>
								<p><i class="fa fa-clock-o" aria-hidden="true"></i> 10 Apr, 2016</p>
							</div> <!-- /.post -->
						</li>
						<li class="single-news clearfix">
							<img src="images/blog/5.jpg" alt="" class="float-left">
							<div class="post float-left">
								<h6><a href="blog-details.html" class="tran3s">How to Become  Master In Java scrpt...</a></h6>
								<p><i class="fa fa-clock-o" aria-hidden="true"></i> 10 Apr, 2016</p>
							</div> <!-- /.post -->
						</li>
						<li class="single-news clearfix">
							<img src="images/blog/6.jpg" alt="" class="float-left">
							<div class="post float-left">
								<h6><a href="blog-details.html" class="tran3s">How to Become  Master In Java scrpt...</a></h6>
								<p><i class="fa fa-clock-o" aria-hidden="true"></i> 10 Apr, 2016</p>
							</div> <!-- /.post -->
						</li>
					</ul>
				</div> <!-- /.sidebar-recent-news -->
				<div class="sidebar-keyword">
					<h4>Keyword</h4>
					<ul class="clearfix">
						<li><a href="#" class="tran3s">Ideas</a></li>
						<li><a href="#" class="tran3s">Funrising</a></li>
						<li><a href="#" class="tran3s">Charity</a></li>
						<li><a href="#" class="tran3s">Children</a></li>
						<li><a href="#" class="tran3s">Food</a></li>
					</ul>
				</div> <!-- /.sidebar-keyword -->
			</div> <!-- /.theme-sidebar -->
		</div> <!-- /.row -->
	</div> <!-- /.container -->
</div> <!-- /.our-blog -->


