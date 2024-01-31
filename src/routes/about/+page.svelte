<script lang="ts">
	export let data;

	</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />

</svelte:head>


{#await data.stuff}
	<p>Loading...</p>
	{:then stuff}
		<p>{stuff}</p>
	{:catch}
	<p>Error?</p>
	{/await}
