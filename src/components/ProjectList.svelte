<script lang="ts">
import { projectData } from "../data/projects";
import ProjectCard from "./ProjectCard.svelte";
</script>

<section>
	<h1 class="gradient-text">Projects</h1>
	<p>
		I tend to jump from project to project before finishing one completely, but here's a selection of things I've made
		and/or am working on
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
	font-size: 1.3rem;
	max-width: 85vw;
	margin-top: 1em;
}

.project-board {
	margin-top: 1.3rem;
	display: grid;
	max-width: 70vw;
	grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
	gap: 1rem;
}
</style>
