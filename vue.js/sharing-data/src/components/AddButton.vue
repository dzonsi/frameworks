<template>
	<button class="btn" v-on:click="add">Add</button>
</template>

<script>
export default {
	name: 'AddButton',
	methods: {
		add() {
			this.$emit('submit');
		}
	}
}
</script>

<style scoped>
.btn {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 13px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn:hover {
	background-color: #45a049;
}
</style>