<script>
import TheIntro from "./components/TheIntro.svelte";
import ProjectList from "./components/ProjectList.svelte";
</script>

<svelte:head>
	<title>Niklas' very awesome site</title>
</svelte:head>

<main>
	<TheIntro />
	<ProjectList />
</main>

<style global>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto+Mono:wght@400;700&family=Source+Code+Pro:wght@400;700&display=swap");

:root {
	--clr-bg: #0a0a0a;
	--clr-gradient-primary: linear-gradient(to right, #7297fc, #18ffff);
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	min-height: 100vh;
	color: white;
	font-family: "Inter", sans-serif;
	background-color: var(--clr-bg);
}
section {
	margin-bottom: 5vh;
}
.gradient-text {
	background: var(--clr-gradient-primary);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
}
</style>
