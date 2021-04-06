<script lang="ts">
	import Course from './Course.svelte';
	import { completer, explorer_general, explorer_specific } from './courses';
	import Pathways from './Pathways.svelte';
</script>

<style lang="scss">
	main, header {
		padding: 8px;
	}

	h2 {
		text-align: center;
	}

	header {
		position: fixed;
		top: 0;
		z-index: 10;
		background: #028090;
		color: white;

		nav {
			min-width: 100vw;
			display: flex;
			flex-direction: row;
			justify-content: center;
		}

		& a {
			color: white;
			padding: 12px 16px;
			display: inline-block;
		}
	}

	main {
		margin-top: 60px;
	}
</style>

<header>
	<nav>
		<a href="#general">Explorer Courses - General</a>
		<a href="#specific">Explorer Courses - Specific</a>
		<a href="#completer">Completer Courses</a>
		<a href="#pathways">CTE Pathways</a>
	</nav>
</header>

<main>
	<h1>Merit Prep Academy CS Courses</h1>
	<p>For the year 2021-2022. App built with Svelte.</p>
	<article>
		<section id="general">
			<h2>Explorer Courses - General</h2>
			<div>
				{#each explorer_general as c}
					<Course course={c} />
				{/each}
			</div>
		</section>
		<section id="specific">
			<h2>Explorer Courses - Specific</h2>
			<div>
				{#each explorer_specific as c}
					<Course course={c} />
				{/each}
			</div>
		</section>
		<section id="completer">
			<h2>Completer Courses</h2>
			<div>
				{#each completer as c}
					<Course course={c} />
				{/each}
			</div>
		</section>
		<section id="pathways">
			<h2>CTE Pathways</h2>
			<Pathways />
		</section>
	</article>
	
</main>