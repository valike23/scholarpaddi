<script lang="ts">
	export let status: number;
	export let error: Error;

	const dev = process.env.NODE_ENV === 'production';
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>
<div class="inner-banner">
	<div class="opacity">
		<div class="container">
			<h2>Page Not Found</h2>
			<ul>
				<li><a href="/" class="tran3s">Home</a></li>
				<li>/</li>
				<li>error</li>
			</ul>
		</div> <!-- /.container -->
	</div> <!-- /.opacity -->
</div> <!-- /.inner-banner -->



<!-- 
=============================================
	Error Page
============================================== 
-->
<div class="container error-page">
	<h2>{status}</h2>
	<h3>{error.message}</h3>
	<p>The page you are looking for was moved, removed, renamed or might never existed.</p>
	<div>
		<a href="/" class="tran3s s-bg-color hvr-trim">Go Home</a>
		<span class="or">Or</span>
		<form action="#">
			<input type="text" placeholder="Search...">
			<button><i class="fa fa-search" aria-hidden="true"></i></button>
		</form>
	</div>
</div> <!-- /.error-page -->


