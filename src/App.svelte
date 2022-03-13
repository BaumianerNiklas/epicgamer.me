<svelte:head>
	<title>Niklas' very awesome site</title>
</svelte:head>

<main>
	<div class="intro">
		<h1 class="heading">Hey, I'm Niklas</h1>
		<p>You'll find me online as <code>BaumianerNiklas</code> or <code>Neoon</code>.</p>
		<div class="links">
			<a href="https://github.com/BaumianerNiklas" class="gh-link">GitHub</a>
		</div>
	</div>
</main>

<style global>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Source+Code+Pro:wght@400;700&display=swap");

* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

main {
	width: 100vw;
	height: 100vh;
	background-color: #1a1b26;
	font-family: "Source Code Pro", monospace;
	display: flex;
	justify-content: center;
}

.intro {
	margin-top: 25vh;
}

h1 {
	text-align: center;
	font-size: 3.5rem;
	margin-bottom: 15px;
}
.heading {
	font-weight: bold;
	background: linear-gradient(to right, #18ffff, #617ee2);
	background-clip: text;
	color: transparent;
}

p,
a {
	font-size: 1.5rem;
	color: white;
	margin-bottom: 15px;
}

p {
	text-align: center;
}

.links {
	display: flex;
	justify-content: center;
	align-items: center;
}

a {
	width: fit-content;
	text-decoration: underline white;
}

a:hover {
	width: fit-cotent;
	color: white;
	text-decoration: none;
	color: #1a1b26;
	background-color: #448aff;
}
</style>
