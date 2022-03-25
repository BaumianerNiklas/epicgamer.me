<script lang="ts">
import { projectData } from "../data/projects";
import ProjectCard from "./ProjectCard.svelte";
</script>

<section>
	<h1 class="gradient-text">Projects</h1>
	<p>
		Here's a selection of things I am currently working on or have made in the past. I'm a big believer in the
		principles of open source so you'll find the source code to all my projects on GitHub :D
	</p>

	<div class="project-board">
		{#each projectData as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<style>
section {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

h1,
p {
	text-align: center;
}

h1 {
	font-size: 2.5rem;
}
p {
	font-size: 1.2rem;
	max-width: min(85vw, 65rem);
	margin-top: 1em;
}

.project-board {
	margin-top: 1.3rem;
	display: grid;
	max-width: 70vw;
	grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	gap: 1rem;
}
</style>
