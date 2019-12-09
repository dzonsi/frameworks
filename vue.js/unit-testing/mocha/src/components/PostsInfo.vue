<template>
	<div>
		<h2>Posts</h2>
		<span class="post" v-for="post in firstTen" :key="post.id">
			{{ post.title }}
		</span>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'PostsInfo',
	data() {
		return {
			posts: null,
			error: null
		}
	},
	computed: {
		firstTen: function() {
			var all = Object.assign([], this.posts);
			var ten = all.splice(0, 10);
			//console.log(ten)
			return ten
		}
	},
	methods: {
		getApi() {
			return axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(posts => {
				//console.log(posts)
				this.posts = posts
				//console.log(this.posts)
			})
			.catch(error => {
				this.error = error
				//console.log(error)
			})
		}
	},
	created() {
		this.getApi()
	}
}
</script>

<style>
.post:after {
	content: ','
}
.post:last-child:after {
	content: ''
}
</style>