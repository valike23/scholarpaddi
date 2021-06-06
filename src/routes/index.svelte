<script>
	// @ts-nocheck

	import Bottom from '$lib/BottomNav.svelte';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/FooterTag.svelte';
	import MenuSettings from '$lib/MenuSettings.svelte';
	import MenuBackground from '$lib/MenuBackground.svelte';
	import MenuHighlights from '$lib/MenuHighlights.svelte';
	import MenuShare from '$lib/MenuShare.svelte';
</script>

<svelte:head />

<!-- svelte-ignore a11y-invalid-attribute -->
<body class="theme-light" data-background="none" data-highlight="red2">
	<div id="page">
		<Bottom />
		<Nav />

		<div
			style="position: relative;max-width: 60em;margin: 0 auto;box-sizing: border-box;"
			class="page-content header-clear-medium"
		>
			<div class="single-slider slider-boxed owl-carousel owl-no-dots">
				<div class="card rounded-m shadow-l">
					<div class="card-bottom text-center mb-0">
						<h1 class="color-white font-700 mb-n1">ScholarPaddi</h1>
						<p class="color-white opacity-80 mb-4">Get all things academic here.</p>
					</div>
					<div class="card-overlay bg-gradient" />
					<img alt="loop1" class="img-fluid" src="images/pictures/13.jpg" />
				</div>
				<div class="card rounded-m shadow-l">
					<div class="card-bottom text-center mb-0">
						<h1 class="color-white font-700 mb-n1">Carefuly Built</h1>
						<p class="color-white opacity-80 mb-4">Flexibility, Speed, Ease of Use.</p>
					</div>
					<div class="card-overlay bg-gradient" />
					<img alt="loop2" class="img-fluid" src="images/pictures/28.jpg" />
				</div>

				<div class="card rounded-m shadow-l">
					<div class="card-bottom text-center mb-0">
						<h1 class="color-white font-700 mb-n1">Elite Quality</h1>
						<p class="color-white opacity-80 mb-4">Mobile Website, App or PWA Ready.</p>
					</div>
					<div class="card-overlay bg-gradient" />
					<img alt="loop3" class="img-fluid" src="images/pictures/29.jpg" />
				</div>
			</div>

			<div class="single-slider owl-carousel owl-no-dots">
				<div class="card card-style">
					<div class="content mb-0">
						<h1 class="text-center mb-0">Call to Actions</h1>
						<p class="text-center color-highlight mt-n1 font-12">Sticky comes Prepared for You</p>
						<p class="boxed-text-xl mt-n3">
							Call to action are highly important, but we can't choose a style for you, so we
							created a few!
						</p>
						<a
							href="#"
							class="btn btn-m btn-center-l bg-red2-dark text-uppercase font-900 text-uppercase rounded-s shadow-xl mb-4"
							>Swipe Left to Begin</a
						>
					</div>
				</div>

				<div class="card card-style">
					<div class="content">
						<h1 class="text-center mb-0">Let's get Social</h1>
						<p class="text-center color-highlight mt-n1 font-12">Follow & Get in Touch with Us</p>
						<p class="boxed-text-xl mt-n3">
							It's easy. Just add your links and you're ready to go. Social links are wildely
							available in Sticky
						</p>
						<p class="text-center pb-2">
							<a href="#" class="icon icon-s rounded-s shadow-xl color-white bg-facebook"
								><i class="fab fa-facebook-f" /></a
							>
							<a href="#" class="icon icon-s rounded-s shadow-xl color-white bg-phone ml-2 mr-2"
								><i class="fa fa-phone" /></a
							>
							<a href="#" class="icon icon-s rounded-s shadow-xl color-white bg-twitter"
								><i class="fab fa-twitter" /></a
							>
						</p>
					</div>
				</div>

				<div class="card card-style">
					<div class="content mb-0">
						<h1 class="text-center mb-0">This or That?</h1>
						<p class="text-center color-highlight mt-n1 font-12">Which is your Favorite?</p>
						<p class="boxed-text-xl mt-n3">
							Multiple choices are awesome, highlighting them is even easier with our Call to
							Actions
						</p>
						<p class="text-center mt-n3 mb-0 pb-0">
							<a
								href="#"
								class="btn btn-m bg-green1-dark text-uppercase font-900 text-uppercase rounded-s shadow-xl mb-4 mt-3"
								>Call Now</a
							>
							<a href="#" class="icon icon-m rounded-s opacity-40 color-theme ml-3 mr-3">or</a>
							<a
								href="#"
								class="btn btn-m bg-red2-dark text-uppercase font-900 text-uppercase rounded-s shadow-xl mb-4 mt-3"
								>GET A QUOTE</a
							>
						</p>
					</div>
				</div>

				<div class="card card-style">
					<div class="content mb-0">
						<h1 class="text-center mb-0">Direct Action</h1>
						<p class="text-center color-highlight mt-n1 mb-2 font-12">Invite Users to Tap Button</p>
						<p class="boxed-text-xl">
							Make a button stand out at the top of your page so it's easily accessible as a first
							option.
						</p>
						<a
							href="#"
							class="btn btn-m btn-center-l bg-red2-dark text-uppercase font-900 text-uppercase rounded-s shadow-xl mb-4"
							>Purchase today for $25</a
						>
					</div>
				</div>
			</div>

			<div class="card card-style">
				<div class="content mb-0">
					<h1 class="text-center mb-0">Packed with Goodies</h1>
					<p class="text-center color-highlight font-11 mt-n1">
						The Absolute Best Products & Care for You
					</p>
					<p class="boxed-text-xl mt-n3">
						Over 10 years of Experience in Building Gorgeous Products only for you! We are Envato
						Elite.
					</p>
					<div class="divider" />
				</div>
				<div class="row mr-2 ml-2 mb-0">
					<div class="col-6 text-center">
						<i class="fa fa-trophy color-yellow1-dark fa-3x" />
						<h2 class="mt-3 mb-1">Future Proof</h2>
						<p>Built to last, with the latest quality code</p>
					</div>
					<div class="col-6 text-center">
						<i class="fab fa-cloudscale color-highlight fa-3x" />
						<h2 class="mt-3 mb-1">Powerful</h2>
						<p>Speed, Features and Flexibility all in One!</p>
					</div>
					<div class="col-6 text-center">
						<i class="fa fa-check color-green1-dark fa-3x" />
						<h2 class="mt-3 mb-1">Easy to Use</h2>
						<p>Customers love our work for it's ease.</p>
					</div>
					<div class="col-6 text-center">
						<i class="fa fa-life-ring color-blue2-dark fa-3x" />
						<h2 class="mt-3 mb-1">Customer Care</h2>
						<p>We treat others like we want to be treated.</p>
					</div>
				</div>
			</div>

			<div class="double-slider owl-carousel owl-no-dots">
				<div class="item">
					<div data-card-height="250" class="card rounded-m shadow-l bg-13">
						<div class="card-bottom text-center">
							<h2 class="color-white font-900 mb-0">EazyMobile</h2>
							<p class="text-center mb-3">
								<i class="fa fa-star color-yellow1-dark" />
								<i class="fa fa-star color-yellow1-dark" />
								<i class="fa fa-star color-yellow1-dark" />
								<i class="fa fa-star color-yellow1-dark" />
								<i class="fa fa-star color-yellow1-dark" />
							</p>
							<a
								href="#"
								class="btn btn-s btn-full text-uppercase font-900 bg-red2-dark rounded-s mr-2 ml-2 mb-2"
								>Purchase</a
							>
						</div>
						<div class="card-overlay bg-gradient" />
					</div>
				</div>
				<div class="item">
					<div data-card-height="250" class="card rounded-m shadow-l bg-27">
						<div class="card-bottom text-center">
							<h2 class="color-white font-900 mb-0">UltraMobile</h2>
							<p class="text-center mb-3">
								<i class="fa fa-star color-yellow1-dark" />
								<i class="fa fa-star color-yellow1-dark" />
								<i class="fa fa-star color-yellow1-dark" />
								<i class="fa fa-star color-yellow1-dark" />
								<i class="fa fa-star color-yellow1-dark" />
							</p>
							<a
								href="#"
								class="btn btn-s btn-full text-uppercase font-900 bg-red2-dark rounded-s mr-2 ml-2 mb-2"
								>Purchase</a
							>
						</div>
						<div class="card-overlay bg-gradient" />
					</div>
				</div>
				<div class="item">
					<div data-card-height="250" class="card rounded-m shadow-l bg-17">
						<div class="card-bottom text-center">
							<h2 class="color-white font-900 mb-0">KolorMobile</h2>
							<p class="text-center mb-3">
								<i class="fa fa-star color-yellow1-dark" />
								<i class="fa fa-star color-yellow1-dark" />
								<i class="fa fa-star color-yellow1-dark" />
								<i class="fa fa-star color-yellow1-dark" />
								<i class="fa fa-star color-yellow1-dark" />
							</p>
							<a
								href="#"
								class="btn btn-s btn-full text-uppercase font-900 bg-red2-dark rounded-s mr-2 ml-2 mb-2"
								>Purchase</a
							>
						</div>
						<div class="card-overlay bg-gradient" />
					</div>
				</div>
			</div>

			<div class="card card-style">
				<div class="content mb-4">
					<h1 class="text-center mb-0">Care & Quality</h1>
					<p class="text-center color-highlight font-11 mt-n1 pb-0">
						No stone left unturned, no aspect overlooked.
					</p>
					<p class="text-center font-20 mt-n2">
						<i class="fa fa-star color-yellow1-dark" />
						<i class="fa fa-star color-yellow1-dark" />
						<i class="fa fa-star color-yellow1-dark" />
						<i class="fa fa-star color-yellow1-dark" />
						<i class="fa fa-star color-yellow1-dark" />
					</p>
					<div class="single-slider slider-boxed owl-carousel owl-no-dots">
						<h2 class="text-center font-300 line-height-xl content mb-0 mt-0">
							The code is always great with any Enabled template, the customer support that wins me
							over always.
						</h2>
						<h2 class="text-center font-300 line-height-xl content mb-0 mt-0">
							The best support I have ever had, it's so good I purchased another theme. Highlighy
							Recommended.
						</h2>
					</div>
					<a
						href="#"
						class="btn btn-m btn-center-l text-uppercase font-900 bg-red2-dark rounded-sm shadow-xl mt-4 mb-0"
						>More Testimonials</a
					>
				</div>
			</div>

			<div class="double-slider owl-carousel owl-no-dots">
				<div class="item">
					<div data-card-height="180" class="card rounded-m shadow-l bg-18">
						<div class="card-top ml-3 mt-3">
							<i class="fa fa-bolt fa-4x color-red2-dark" />
						</div>
						<div class="card-bottom ml-3">
							<h2 class="color-white font-900 mb-0">Performance</h2>
							<p class="color-white font-11 mt-n1 mb-2">Fast and feature filled</p>
						</div>
						<div class="card-overlay bg-black opacity-80" />
					</div>
				</div>
				<div class="item">
					<div data-card-height="180" class="card rounded-m shadow-l bg-14">
						<div class="card-top ml-3 mt-3">
							<i class="fa fa-trophy fa-4x color-blue2-dark" />
						</div>
						<div class="card-bottom ml-3">
							<h2 class="color-white font-900 mb-0">Elite Care</h2>
							<p class="color-white font-11 mt-n1 mb-2">Built by the Best for You</p>
						</div>
						<div class="card-overlay bg-black opacity-80" />
					</div>
				</div>
				<div class="item">
					<div data-card-height="180" class="card rounded-m shadow-l bg-3">
						<div class="card-top ml-3 mt-3">
							<i class="fa fa-star fa-4x color-yellow1-dark" />
						</div>
						<div class="card-bottom ml-3">
							<h2 class="color-white font-900 mb-0">Quality</h2>
							<p class="color-white font-11 mt-n1 mb-2">Built with Care and Detail</p>
						</div>
						<div class="card-overlay bg-black opacity-80" />
					</div>
				</div>
			</div>

			<div class="card card-style">
				<div class="content mb-0">
					<h1 class="text-center mb-0">Join ScholarPaddi Today</h1>
					<p class="text-center color-highlight font-11 mt-n1 pb-0">
						Tons of Awesome Features just for You.
					</p>
					<p class="boxed-text-xl mt-n3">
						Fast, easy to use and filled with features. Use ScholarPaddi today for all you
						educational needs.
					</p>
					<a
						href="#"
						class="btn btn-m btn-center-l text-uppercase font-900 bg-red2-dark rounded-sm shadow-xl mb-4"
						>Sign Up Here</a
					>
				</div>
			</div>
			<Footer />
		</div>
		<!-- End of Page Content-->
		<!-- All Menus, Action Sheets, Modals, Notifications, Toasts, Snackbars get Placed outside the <div class="page-content"> -->

		<!-- Menu Settings Highlights-->
		<MenuSettings />
		<MenuHighlights />
		<!-- Menu Settings Backgrounds-->
		<MenuBackground />
		<!-- Menu Share -->
		<MenuShare />
	</div>

	<script type="text/javascript" src="scripts/jquery.js"></script>
	<script type="text/javascript" src="scripts/bootstrap.min.js"></script>
	<script type="text/javascript" src="scripts/custom.js"></script>
</body>
