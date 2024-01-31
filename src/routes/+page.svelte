<script>
	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#await data.stuff}
	<p>Loading...</p>
	{:then stuff}
		<p>{stuff}</p>
	{:catch}
	<p>Error?</p>
	{/await}
