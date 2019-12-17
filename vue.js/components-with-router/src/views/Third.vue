<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage" :skip-init="true">
			<div class="section">
				First section ...
				<button class="btn next" @click="$refs.fullpage.api.moveSectionDown()">Next</button>
			</div>
			<div class="section">
				Second section ...
				<button class="btn prev" @click="$refs.fullpage.api.moveSectionUp()">Prev</button>
			</div>
			<div class="section">
				Third section ...
			</div>
			<div class="section">
				Fourt section ...
			</div>
		</full-page>
  </div>
</template>

<script>

export default {
  name: 'third',
  components: {

  },
  data() {
    return {
			options: {
				anchors: ['page1', 'page2', 'page3', '[page4]'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#666'],
        scrollingSpeed: 1000,
        navigation: true,
        afterLoad: this.afterLoad
			}
		}
  },
  methods: {
		componentsReady() {
			this.$refs.fullpage.init()
		},
		afterLoad() {
			console.log('load')
		}
  },
  mounted() {
		this.componentsReady()
  }
}
</script>

<style scoped="">
.btn {
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
  transition: border-color .2s linear;
}
.btn:hover {
	border-color: #b3b3b3;
}
</style>
