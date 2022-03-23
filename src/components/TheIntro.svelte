<script>
import SocialLink from "./SocialLink.svelte";
</script>

<section>
	<div class="intro-paragraph">
		<h1 class="heading">Hey, I'm <span class="gradient-text">Niklas</span></h1>
		<p>
			You'll find me online as <code>BaumianerNiklas</code> or <code>Neoon</code>. <br />
			I'm a student from Germany who enjoys coding in his free time.
		</p>
	</div>
	<div class="socials">
		<SocialLink iconName="logo-github" url="https://github.com/BaumianerNiklas" />
	</div>
</section>

<style>
section {
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 2rem;
}
.intro-paragraph {
	margin-top: 7.5vh;
	flex-direction: column;
	display: flex;
	align-items: center;
}
h1,
p,
span {
	text-align: center;
}
h1 {
	font-weight: bold;
	font-size: 3.5rem;
	margin-bottom: 1rem;
}
p {
	font-size: 1.3rem;
	max-width: 85vw;
}
span {
	background: var(--clr-gradient-primary);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
}
</style>
