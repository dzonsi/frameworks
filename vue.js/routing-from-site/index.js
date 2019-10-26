const Foo = { template: '<div>Foo</div>'};
const Bar = { template: '<div>Bar</div>'};
const Baz = { template: '<div>Baz</div>' };
const Practice = {
	name: 'practice',
	template: '<div>Practice</div>'
};
const User = {
  template: '<div class="user">\
  					<h2>User {{ $route.params.id }}</h2>\
  					<router-view></router-view>\
  					</div>'
};

const UserHome = { template: '<div>Home</div>' };
const UserProfile = { template: '<div>Profile</div>' };
const UserPosts = { template: '<div>Posts</div>' };

const routes = [
		{ path: '/user/:id', component: User,
			children: [
				{ path: '', component: UserHome },
				{ path: 'profile', component: UserProfile },
				{ path: 'posts', component: UserPosts }
			]
		},
		{ path: '/practice',
			name: 'practice-route',// proveriti???
			component: Practice
		},
		{ path: '/',
			components: {
				default: Foo,
				a: Bar,
				b: Baz
			}
		},
		{
      path: '/other',
      components: {
        default: Baz,
        a: Bar,
        b: Foo
      }
    }
	]

const router = new VueRouter({
	mode: 'history',// sta je ovo???
	routes // moze i routes: routes
});

const app = new Vue({
	router
}).$mount('#app');