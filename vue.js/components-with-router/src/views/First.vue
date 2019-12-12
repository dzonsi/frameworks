<template>
  <div>
    <vue-accordion class="center" :items="items" :styles="styles"></vue-accordion>
    <div>
			<label for="div-height">Height:</label>
			<input id="div-height" type="range" min="100" max="350" value="200" class="form-control" v-model="height" :input="changeHeight()">
    </div>
    <div>
			<v-icon name="flag"></v-icon>
			<br>
			<v-icon name="minus-square" scale="2"></v-icon>
			<br>
			<v-icon name="sync" spin scale="2"></v-icon>
			<br>
			<v-icon label="No Photos">
				<v-icon name="camera"></v-icon>
				<v-icon name="ban" scale="2" class="alert" label="Two icons"></v-icon>
			</v-icon>
    </div>
  </div>
</template>

<script>
import { vueAccordion } from 'vue-accordion'
import { items, styles } from '@/views/first-data'

export default {
  name: 'first',
  components: {
    vueAccordion
  },
  data() {
    return {
			items,
			styles,
			height: 200
		}
  },
  methods: {
		changeHeight() {
			this.styles.div.height = this.height + 'px'
		}
  }
}
</script>

<style>
	.center {
		margin: 0 auto;
	}
	.alert {
		color: red;
	}
</style>
