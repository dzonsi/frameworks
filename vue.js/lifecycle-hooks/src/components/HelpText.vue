<template>
	<div class="content-wrap">
		<h2>Help component!</h2>
    <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
    <button type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
    <button type="button" class="btn btn-warning" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
    <button type="button" class="btn btn-danger" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
  </div>
</template>

<script>
export default {
	name: 'HelpText',
	mounted() {
		console.log(this.$el)
		$(this.$el).css('color', 'blue')
		$('[data-toggle="tooltip"]').tooltip();
	}
}
</script>

<style scoped>

</style>