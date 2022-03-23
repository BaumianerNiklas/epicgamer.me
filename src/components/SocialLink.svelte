<script lang="ts">
/** The name of a Ionicon icon */
export let iconName: string;
/** The url this button should link to */
export let url: string;
</script>

<div class="circle">
	<a href={url} target="blank">
		<div class="icon-container">
			<ion-icon name={iconName} />
		</div>
	</a>
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
.icon-container {
	display: grid;
	place-items: center;
}
ion-icon {
	text-align: center;
	color: white;
	font-size: 2rem;
	transition: 0.1s ease-in-out;
}
.circle:hover ion-icon {
	font-size: 2.3rem;
}
</style>
