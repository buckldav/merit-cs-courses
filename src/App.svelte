<script lang="ts">
	import Course from './Course.svelte';
	import { explorer_half, explorer_game, completer } from './courses';
</script>

<style lang="scss">
	.masonry {
		display: flex;
		flex-direction: row;
	}
</style>

<main>
	<h1>Merit Prep Academy CS Courses</h1>
	<p>For the year 2021-2022. App built with Svelte.</p>
	<article class="masonry">
		<div>
			{#each explorer_half as c}
				<Course course={c} />
			{/each}
		</div>
		<div>
			{#each explorer_game as c}
				<Course course={c} />
			{/each}
		</div>
		<div>
			{#each completer as c}
				<Course course={c} />
			{/each}
		</div>
	</article>
	
</main>