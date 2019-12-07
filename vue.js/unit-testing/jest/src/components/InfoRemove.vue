<template>
	<h3 class="remove-info">{{ removeMessage }}</h3>
</template>

<script>
export default {
	name: 'InfoRemove',
	props: {
		message: {
			type: String
		}
	},
	data() {
		return {
			removeMessage: this.message
		}
	}
}
</script>

<style scoped>
	.remove-info {
		font-family: 'Comic Sans MS';
		position: fixed;
		top: 70px;
		right: 100px;
		transform: rotate(20deg);
	}
</style>