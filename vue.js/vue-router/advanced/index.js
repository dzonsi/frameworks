const First = {
	template: `
	<transition name="fade">
		<div>First component</div>
	</transition>
	`
};
// in component guards
const Second = {
	template: '<div>Second component</div>',
	beforeRouteEnter(to, from, next) {
		// does not have access to this component instance
		console.log('beforeRouteEnter');
		// you can access component instance by passing a callback to next
		next(vm => {
			console.log(vm);
		});
	},
	beforeRouteUpdate(to, from, next) {
		console.log('beforeRouteUpdate');
		next();
	},
	beforeRouteLeave(to, from, next) {
		console.log('beforeRouteLeave');
		const answer = window.confirm('Do you really want to leave?');
		if(answer) {
			next();
		} else {
			next(false);
		}
	}
};
const Third = {
	template: '<div>Third component</div>',
	beforeRouteUpdate(to, from, next) {
		console.log('Change route but the same component instance is reused');
		next();
	}
};
const Fourth = {
	data: function() {
		return {
			newData: 'Data for new',
			allData: 'Data for all',
			data: ''
		}
	},
	template: `
	<div>
		<div>Fourth component, $route.params.id: {{ $route.params.id }}</div>
		<div v-if="$route.params.id === 'new'">{{ newData }}</div>
		<div v-if="$route.params.id === 'all'">{{ allData }}</div>
	</div>
	`,
	// watch: {
	//	 $route(to, from) {
	//	 		// react to route changes
	//	 }
	// }
	// or
	beforeRouteUpdate(to, from, next) {
		console.log(to, from);
		// react to route changes
		next();
	}
};
// nested routes
const User = {
	data() {
		return {
			transitionName: 'slide-left'
		}
	},
	beforeRouteUpdate(to, from, next) {
		const toDepth = to.path.split('/').length;
		const fromDepth = from.path.split('/').length;
		this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
		next();
	},
	template: `
		<div>
			<h3>Component: User, $route.params.id: {{ $route.params.id }}</h3>
			<transition :name="transitionName">
				<router-view class="user"></router-view>
			</transition>
		</div>
	`
}
const UserProfile = {
	template: `
		<div>
			<h4 style=" margin-top: 0">User Profile</h4>
		</div>
	`
}
const UserPosts = {
	template: `
		<div>
			<h4 style=" margin-top: 0">User Posts</h4>
		</div>
	`,
	beforeRouteEnter(to, from, next) {
		if(to.matched.some(record => record.meta.requiresAuth)) {
			console.log('Requires auth');
			next();
		} else {
			next();
		}
	}
}
const UserInfo = {
	template: `
		<div>
			<router-link to="/user/7/profile">Go to user/7/profile</router-link>
			<router-link to="/user/7/posts">Go to user/7/posts</router-link>
		</div>
	`
}
const ComponentWithProps = {
	props: ['name', 'age'],
	template: `
		<div>
			<p>User name is {{ name }}.</p>
			<p>User age is  {{ age }}.</p>
		</div>
	`
}

// fetching after navigation
const FetchingAfterNavigation = {
	template: `
		<div class="post">
    	<div v-if="loading" class="loading">
    	  <div class="lds-facebook"><div></div><div></div><div></div></div>
    	</div>

    	<div v-if="error" class="error">
    	  {{ error }}
    	</div>

    	<div v-if="post" class="content">
    	  <h2>{{ post.title }}</h2>
    	  <p>{{ post.body }}</p>
    	</div>
  	</div>
	`,
	data() {
		return {
			loading: false,
			post: null,
			error: null
		}
	},
	created() {
		this.fetchData();
	},
	watch: {
		// call again the method if the route changes
		'$route': 'fetchData'
	},
	methods: {
		fetchData() {
			this.error = this.post = null;
			this.loading = true;
			const id = this.$route.params.id;
			fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
				.then(response => response.json())
				.then(response => {
						console.log(response)
						this.loading = false;
						this.post = response;
					}
				)
				.catch(error => {
					console.log(error);
					this.error = error;
				});
		}
	}
}

// fetching before navigation
const FetchingBeforeNavigation = {
	template: `
		<div class="comment">
    	<div v-if="error" class="error">
    	  {{ error.name }}
    	</div>

    	<div v-if="comment" class="content">
    	  <h2>{{ comment.name }}</h2>
    	  <p>{{ comment.body }}</p>
    	</div>
  	</div>
	`,
	data() {
		return {
			comment: null,
			error: null
		}
	},
	methods: {
		setError(error) {
			this.error = error;
		},
		setComment(comment) {
			this.comment = comment;
		}
	},
	// for new route
	beforeRouteEnter(to, from, next) {
		const id = to.params.id;
		console.log(id);
		console.log(next)
// how to call next inside fetch when router mode is history ???
// throws an error NS_ERROR_FILE_UNRECOGNIZED_PATH
		fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
			.then(response => response.json())
			.then(response => {
					console.log(response)
					next(vm => vm.setComment(response));
				}
			)
			.catch(error => {
				console.log(error);
				next(vm => vm.setError(error));
			});
	},
	// when same component instance is used only params changed
	beforeRouteUpdate(to, from, next) {
		this.comment = null;
		const id = to.params.id;
		fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
			.then(response => response.json())
			.then(response => {
					console.log(response);
					this.setComment(response);
					next();
				}
			)
			.catch(error => {
				console.log(error);
				this.setError(error);
				next();
			});
	}
}

const routes = [
	{ path: '/first', component: First, alias: '/alias', beforeEnter: (to, from, next) => {
		console.log('Before enter guards in route\'s configuration object.');
		next();
	} },
	// named routes
	{ path: '/second', name: 'second-route', component: Second },
	{ path: '/third', component: Third },
	// dinamic route matching
	{ path: '/third/:id', name: 'third-route', component: Fourth},
	// nested routes
	{ path: '/user/:id', component: User,
		children: [
			{
				path: '',
				component: UserInfo
			},
			{
				path: 'profile',
				component: UserProfile
			},
			{
				path: 'posts',
				component: UserPosts,
				// a meta field
				meta: { requiresAuth: true}
			}
		]
	},
	// named views
	{
		path: '/named',
		components: {
			default: First,
			a: Second,
			b: Third
		}
	},
	{
		path: '/named-backwards',
		components: {
			default: Third,
			a: Second,
			b: First
		}
	},
	// redirect
	{
		path: '/redirect', redirect: '/first'
	},
	{
		path: '/redirect-with-function', redirect: to => {
			return '/second';
		}
	},
	// alias
	// An alias of /a as /b means when the user visits /b
	// the URL remains /b
	// but it will be matched as if the user is visiting /a
	{
		path: '/user-with-props',
		component: ComponentWithProps,
		// props: true, route.params will be set as the component props
		// object mode
		// props: { name: 'Aaron', age: 30 }
		// or function mode
		props: route => {
			console.log(route);
			return {
			name: 'Aaron',
			age: 30
		}}
	},
	// fetching data
	{
		path: '/post/:id',
		component: FetchingAfterNavigation
	},
	{
		path: '/comment/:id',
		component: FetchingBeforeNavigation
	}
];

const router = new VueRouter({
	routes
});

// global before guards
router.beforeEach((to, from, next) => {
	console.log(from, to);
	next();
});
// global after hooks
router.afterEach((to, from) =>{
	console.log('Route is changed');
});

const app = new Vue({
	router,
	methods: {
		goToThird: () => {
			router.push('/third',
				// onComplete callback
				() => {
					console.log('success');
				},
				// onAbort callback
				() => {
					console.log('abort');
				}
			);
		},
		// replace
		// navigates without pushing a new history entry
		// it replaces the current entry
		replace: () => {
			router.replace('/user/8',
				// onComplete callback
				() => {
					console.log('success');
				},
				// onAbort callback
				() => {
					console.log('abort');
				}
			);
		},
		// history manipulation
		historyBack: function() {
			this.$router.go(-1);
		},
		historyForward: () => {
			router.go(1);
		}
	}
}).$mount('#app');