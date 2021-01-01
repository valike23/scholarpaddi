<script lang="ts">
	import Nav from '../components/Nav.svelte';

	export let segment: string;
</script>

<div id="loader-wrapper">
	<div id="loader"></div>
</div>

<Nav {segment}/>


	<slot></slot>
