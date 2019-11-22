<template>
	<div>
		<h2>Posts</h2>
		<span class="post" v-for="post in firstTen" :key="post.id">
			{{ post.title }}
		</span>
	</div>
</template>

<script>
export default {
	name: 'PostsInfo',
	data() {
		return {
			posts: null
		}
	},
	computed: {
		firstTen: function() {
			var all = Object.assign([], this.posts);
			var ten = all.splice(0, 10);
			console.log(ten)
			return ten
		}
	},
	created() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(posts => {
				console.log(posts)
				this.posts = posts
				console.log(this.posts)
			})
			.catch(error => console.log(error))

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