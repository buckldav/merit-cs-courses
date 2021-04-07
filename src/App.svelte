<script lang="ts">
	import Course from './Course.svelte';
	import { completer, explorer_general, explorer_specific } from './courses';
	import Pathways from './Pathways.svelte';
import Tag from './Tag.svelte';
</script>

<style lang="scss">
	main, header {
		padding: 8px;

		h2 {
			text-align: center;
		}
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

	footer {
		margin-top: 56px;
		padding: 16px 16px 32px;
		text-align: center;
		color: #999;

		img {
			display: block;
			margin: 0 auto;
		}
	}

	#hero {
		margin-top: 52px;
		margin-bottom: -36px;
		padding: 24px;
		height: calc(70vh - 52px);
		background: white; 
		clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);

		.big {
			font-size: 1.25em;
		}

		a.btn {
			display: inline-block;
			padding: 9px 13px;
			border-width: 3px;
			border-radius: 4px;
			border-style: solid;
			color: white;   
			outline: 0;
			&:hover {
				text-decoration: none;
				transition: ease 0.5s;
				border-style: outset;
			}
			&.primary {
				background: #028090;
				border-color: #028090;
			}
			&.secondary {
				background: #333;
				border-color: #333;
			}
			&:visited {
				color: white;
			}
		}
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

<div id="hero">
	<div class="row">
		<div>
			<h1>Merit Preparatory Academy CS Courses</h1>
			<p>For the year 2021-2022.</p>
			<p class="big">
				Unsure of what computer class to take?<br>
				Check out your options below.
			</p>
			<a class="btn primary" href="#general">Browse Courses</a>
		</div>
		<img src="/packing.svg" width="500" alt="Getting Ready For School">
	</div>
</div>

<main role="main">
	<article>
		<section>
			<a class="anchor" id="general" href="#general">Explorer Courses - General</a>
			<h2>Explorer Courses - General</h2>
			<div>
				{#each explorer_general as c}
					<Course course={c} />
				{/each}
			</div>
		</section>
		<section>
			<a class="anchor" id="specific" href="#specific">Explorer Courses - Specific</a>
			<h2>Explorer Courses - Specific</h2>
			<div>
				{#each explorer_specific as c}
					<Course course={c} />
				{/each}
			</div>
		</section>
		<section>
			<a class="anchor" id="completer" href="#completer">Completer Courses</a>
			<h2>Completer Courses</h2>
			<div>
				{#each completer as c}
					<Course course={c} />
				{/each}
			</div>
		</section>
		<section>
			<a class="anchor" id="pathways" href="#pathways">CTE Pathways</a>
			<h2>CTE Pathways</h2>
			<Pathways />
		</section>
	</article>
</main>

<footer>
	<img src="/graduation.svg" width="400" alt="Graduation">
	&copy; David Buckley 2021. Made with Svelte.
</footer>