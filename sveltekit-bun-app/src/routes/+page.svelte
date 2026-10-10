<script lang="ts">
	let { data, form } = $props();
</script>

<h1>SvelteKit on homeport</h1>
<p>Rendered on the server by Bun {data.bun} for {data.origin}, at {data.at}.</p>

<form method="POST" action="?/greet">
	<label>Your name <input name="name" /></label>
	<button>Greet</button>
</form>
{#if form?.greeting}<p>{form.greeting}</p>{/if}
{#if form?.error}<p>{form.error}</p>{/if}
