<template>
	<input />
</template>

<script>
	export default {
		name: 'date-picker',
		props: {
			dateFormat: {
				type: String
			}
		},
		mounted() {
			var self = this
			$(this.$el).datepicker({
				dateFormat: this.dateFormat,
				onSelect(date) {
					self.$emit('update-date', date)
				}
			})
		},
		beforeDestroy() {
			$(this.$el).datepicker('hide').datepicker('destroy')
		}
	}
</script>

<style scoped>

</style>