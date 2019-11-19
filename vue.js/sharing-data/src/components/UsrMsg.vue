<template>
	<div>
		<input
			class="input-text"
			type="text"
			placeholder="Enter Text Here"
			v-model="tempMessage"
			@keyup.enter="submit"
		/>
		<Button @submit="submit" />
	</div>
</template>

<script>
import Button from './Button';

export default {
	name: 'UsrMsg',
	components: {
		Button
	},
	data() {
		return {
			tempMessage: ''
		}
	},
	methods: {
		submit() {
			if(!this.tempMessage) {
				alert('You must enter message!');
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