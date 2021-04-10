<script lang="ts">
	import Nav from '../components/Nav.svelte';
	import { showNav } from '../stores/nav';
	let isNav: boolean = true;
	const unsubscribe = showNav.subscribe(value => {
		isNav = value;
	});
</script>

<div id="loader-wrapper">
	<div id="loader"></div>
</div>
{#if isNav}
<Nav/>
{/if}



	<slot ></slot>
