<script lang="ts">
/** The name of a bootstrap icon (without the 'bi-' prefix)*/
export let iconName: string;
/** The url this button should link to upon pressing */
export let url: string;
</script>

<div class="circle">
	<a href={url} target="blank"><i class="bi-{iconName}" /></a>
</div>

<style>
.circle {
	display: grid;
	place-items: center;
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	color: transparent;
	background: var(--clr-gradient-primary);
}
.circle:hover {
	cursor: pointer;
}
i {
	color: white;
	font-size: 1.75rem;
	text-emphasis: none;
	transition: 0.1s ease-in-out;
}
.circle:hover > a > i {
	font-size: 2rem;
}
</style>
