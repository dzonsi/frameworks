<template>
  <div>
		<vue-up></vue-up>
		<vue-progress-bar></vue-progress-bar>
    <button class="btn" @click="notify()">Click to notify</button>
    <button class="btn" @click="getData()">Get users and then notify</button>
    <button class="btn" @click="test()">Activate progerssbar</button>
    <ul v-if="show">
			<li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
    <radial-progress-bar
			class="center"
			:diameter="300"
      :completed-steps="completedSteps"
      :total-steps="totalSteps"
      startColor="#bbff42"
      stopColor="#429321"
      innerStrokeColor="#b3b3b3"
    >
			<p>Total steps: {{ totalSteps }}</p>
			<p>Completed steps: {{ completedSteps }}</p>
		</radial-progress-bar>
		<button class="btn" @click="dec()">
			<v-icon name="minus"></v-icon>
		</button>
		<button class="btn" @click="inc()">
			<v-icon name="plus"></v-icon>
		</button>
  </div>
</template>

<script>
	import RadialProgressBar from 'vue-radial-progress'
export default {
	name: 'second',
	components: {
		RadialProgressBar
	},
	data() {
		return {
			// data for vue-up
			show: false,
			users: null,
			// data for RadialProgressBar
			completedSteps: 3,
      totalSteps: 10
		}
	},
	methods: {
		notify() {
			this.$popup({
				message: 'Simple popup',
				color: '#4d89fb',
				backgroundColor: 'rgba(0, 0, 0, 0.8)',
				delay: 3,
				fontSize: 60
			})
		},
		getData() {
			fetch('https://jsonplaceholder.typicode.com/users')
					.then(response => response.json())
					// successful fetch
					.then(json => this.users = json)
					.then(() => {
						// show info
						this.$popup({
							message: 'Users are here',
							color: '#33ffad',
							backgroundColor: 'rgba(0, 0, 0, 0.8)',
							delay: 3,
							fontSize: 60
					})
						// show users
						.then(() => {
							this.show = true
						})
				})
		},
		// vur-progressbar methods
		start () {
        this.$Progress.start()
    },
    set (num) {
        this.$Progress.set(num)
    },
    increase (num) {
        this.$Progress.increase(num)
    },
    decrease (num) {
        this.$Progress.decrease(num)
    },
    finish () {
        this.$Progress.finish()
    },
    fail () {
        this.$Progress.fail()
    },
    test(){
      this.$Progress.start()

      setTimeout(() => {
				this.$Progress.finish()
      }, 5000)
    },
    // radial-progress-bar methods
    inc() {
			this.completedSteps++
		},
		dec() {
			this.completedSteps--
		}
	}
}
</script>

<style scoped>
.center {
	margin: 0 auto;
}
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