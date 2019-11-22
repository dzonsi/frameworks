<template>
	<div>
		<h2>Users</h2>
		<span class="user" v-for="user in users" :key="user.id">
			{{ user.name }}
		</span>
		<div>
			<h3>Add new user:</h3>
			<input type="text" name="name" v-model="newName" placeholder="Name">
			<input type="text" name="username" v-model="newUsername" placeholder="Username">
			<input type="text" name="email" v-model="newEmail" placeholder="Email">
			<button class="btn btn-success" @click="addUser">Add new user</button>
		</div>
		<div v-if="newUserInfo">
			<h3>New user info:</h3>
			<p>Name: {{newUser.name}}</p>
			<p>Usernaem: {{newUser.username}}</p>
			<p>Email: {{newUser.email}}</p>
			<p>Id: {{newUser.id}}</p>
		</div>
		<div>
			<input type="text" name="id" v-model="userId" placeholder="Enter user id">
			<button class="btn btn-primary" @click="showUser(userId)">Display user</button>
		</div>
		<div v-if="singleUserShow">
			<h3>User info:</h3>
			<p>Name: {{singleUser.name}}</p>
			<p>Usernaem: {{singleUser.username}}</p>
			<p>Email: {{singleUser.email}}</p>
			<p>Id: {{singleUser.id}}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UsersInfo',
	data() {
		return {
			users: null,
			newName: null,
			newUsername: null,
			newEmail: null,
			newUser: null,
			newUserInfo: false,
			userId: null,
			singleUser: null,
			singleUserShow: false
		}
	},
	created() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {
				console.log(users)
				this.users = users
				console.log(this.users)
			})
			.catch(error => console.log(error))

	},
	methods: {
		addUser() {
			fetch('https://jsonplaceholder.typicode.com/users', {
				method: 'POST',
				body: JSON.stringify({
					name: this.newName,
					username: this.newUsername,
					email: this.newEmail
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8'
				}
			})
			.then(response => response.json())
			.then(user => {
				console.log(user)
				this.newUser = user
				this.users.push(user)
				this.newUserInfo = true
			})
			.catch(error => console.log(error))
		},
		showUser(id) {
			console.log(id)
			fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(response => response.json())
			.then(user => {
				console.log(user)
				this.singleUser = user
				this.singleUserShow = true
			})
			.catch(error => console.log(error))
		}
	}
}
</script>

<style>
.user:after {
	content: ','
}
.user:last-child:after {
	content: ''
}
</style>