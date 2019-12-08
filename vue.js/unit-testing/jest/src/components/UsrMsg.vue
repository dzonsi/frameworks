<template>
	<div>
		<input
			class="input-text"
			type="text"
			placeholder="Enter Text Here"
			v-model="tempMessage"
			@keyup.enter="submit"
		/>
		<AddButton @submit="submit" />
	</div>
</template>

<script>
import AddButton from './AddButton';

export default {
	name: 'UsrMsg',
	components: {
		AddButton
	},
	data() {
		return {
			tempMessage: ''
		}
	},
	methods: {
		submit() {
			if(!this.tempMessage) {
				this.tempMessage = 'You must enter message!';
			} else {
				this.$emit('inputData', this.tempMessage);
				this.tempMessage = '';
			}
		}
	}
}
</script>

<style scoped>
	.input-text {
  width: 300px;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>