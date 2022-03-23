<script lang="ts">
import type { Project } from "../data/projects";

export let project: Project;
</script>

<div class="card">
	<div class="header">
		<h2 class="gradient-text">{project.name}</h2>
		<div class="links">
			{#if project.repoName}
				<div class="icon-container">
					<a href="https://github.com/BaumianerNiklas/{project.repoName}" target="blank">
						<ion-icon name="logo-github" />
					</a>
				</div>
			{/if}
			{#if project.url}
				<div class="icon-container">
					<a href={project.url} target="blank">
						<ion-icon name="link" />
					</a>
				</div>
			{/if}
		</div>
	</div>
	<p>{project.description}</p>
</div>

<style>
.card {
	padding: 1rem;
	border-radius: 10px;
	background-color: #14171e;
}

.header {
	display: flex;
	gap: 0.5rem;
	margin-bottom: 5px;
}

.links {
	display: flex;
	align-items: center;
	gap: 0.2rem;
}

ion-icon {
	color: white;
	font-size: 1.5rem;
}

.icon-container {
	display: grid;
	place-items: center;
}

p {
	line-height: 1.75rem;
	font-size: 1.1rem;
	color: white;
}
</style>
