<template>
	<div>
		<ul class="result">
			<li
				v-for="(message, index) in messageList"
				:item="message"
				:key="index"
				@dblclick="remove(index)"
			>
				{{ message }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Results',
	props: {
		msg: {
			type: Array
		},

		noData: {
			type: Boolean
		}
	},
	data() {
		return {
			messageList: this.msg,
			showInfo: this.noData
		}
	},
	methods: {
		remove(index) {
			this.$emit('removeMessage', index);
		}
	}
}
</script>

<style scoped>
	.result {
		list-style-type: none;
	}
	.result li {
		font-family: 'Comic Sans MS';
		padding: 10px;
		color: white;
		background-color: black;
		background: linear-gradient(to right, royalblue, white);
		margin-bottom: 8px;
		border-radius: 4px;
	}
</style>