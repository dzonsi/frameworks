<template>
	<h2 class="info">{{ infoMessage }}</h2>
</template>

<script>
export default {
	name: 'InfoEmpty',
	props: {
		message: {
			type: String
		}
	},
	data() {
		return {
			infoMessage: this.message
		}
	}
}
</script>

<style scoped>
	.info {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: scale(1) translate(-50%, -50%);
		display: inline-block;
		padding: 20px;
		border-radius: 4px;
		color: white;
		background-color: red;
		background: linear-gradient(to bottom right, fuchsia, dodgerblue);
	}
</style>