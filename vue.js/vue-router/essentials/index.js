const First = { template: '<div>First component</div>'};
const Second = { template: '<div>Second component</div>'};
const Third = { template: '<div>Third component</div>'};
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
	template: `
		<div>
			<h3>Component: User, $route.params.id: {{ $route.params.id }}</h3>
			<router-view></router-view>
		</div>
	`
}
const UserProfile = {
	template: `
		<div>
			<h4>User Profile</h4>
		</div>
	`
}
const UserPosts = {
	template: `
		<div>
			<h4>User Posts</h4>
		</div>
	`
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

const routes = [
	{ path: '/first', component: First, alias: '/alias' },
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
				component: UserPosts
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
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
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