Vue.component('practice-one', {
	template: '<h1>Vue practice one component</h1>'
});
Vue.component('PracticeTwo', {
	template: '<div>' +
						'<h1>Vue practice two component</h1>' +
						'<practice-one></practice-one>' +
						'</div>'
});


var ComponentA = {
	name: 'practice-three',
	template: '<h1>Vue practice three component</h1>'
};
var ComponentB = {
	name: 'practice-four',
	components: {
		'practice-three': ComponentA
	},
	template: '<div>' +
						'<h1>Vue practice four component</h1>' +
						'<practice-three></practice-three>' +
						'</div>'
};

Vue.component('practice-five', {
	props: {
		fiveTitle: String,
		author: String
	},
	template: '<h1> {{ fiveTitle }} , author: {{ author }}</h1>'
});

Vue.component('practice-six', {
	props: {
		id: Number,
		title: String
	},
	template: '<h1> {{ title }} , id: {{ id }}</h1>'
});

Vue.component('practice-seven', {
	props: {
		post: Object,
	},
	template: '<div>' +
						'<h1> {{ post.title }} , id: {{ post.id }}</h1>' +
						'<button v-on:click="$emit(' +
						'\'enlarge-text\'' + ')">Enlarge text</button>' +
						'</div>'
});

Vue.component('practice-eight', {
	model: {
		prop: 'checked',
		event: 'change'
	},
	props: {
		checked: Boolean
	},
	template: `<div>
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    ><span> {{ checked }}</span>
  	</div>`
});

Vue.component('practice-nine', {
	props: ['url'],
	template: '<a\
						:href="url"\
						>\
						<slot></slot>\
						</a>'
});

Vue.component('practice-ten', {
	props: [],
	template: '<div>\
							<header>\
	    					<slot name="header">Fallback content I</slot>\
	  					</header>\
	  					<main>\
	    					<slot>Fallback content II</slot>\
	  					</main>\
	  					<footer>\
	    					<slot name="footer">Fallback content III</slot>\
	  					</footer>\
						</div>'
});

Vue.component('practice-eleven', {
	props: [],
	template: '<div>\
							<span>\
  							<slot v-bind:user="user">\
    							{{ user.lastName }}\
  							</slot>\
							</span>\
						</div>',
	data: function() {
		return {
			user: {
				firstName: 'Aaron',
				lastName: 'Rodgers'
			}
		}
	}
});

Vue.component('tab-posts', {
	data: function() {
		return {
			posts: [
				{
        	id: 1,
          title: 'Cat Ipsum',
          content: '<p>Dont wait for the storm to pass,\
          	dance in the rain kick up litter decide to\
          	want nothing to do with my owner today\
          	demand to be let outside at once, and \
          	expect owner to wait for me as i think \
          	about it cat cat moo moo lick ears lick \
          	paws so make meme, make cute face but lick \
          	the other cats. Kitty poochy chase \
          	imaginary bugs, but stand in front of the \
          	computer screen. Sweet beast cat dog hate \
          	mouse eat string barf pillow no baths hate \
          	everything stare at guinea pigs. My left \
          	donut is missing, as is my right loved it, \
          	hated it, loved it, hated it scoot butt on \
          	the rug cat not kitten around</p>'
        },
        {
        	id: 2,
          title: 'Hipster Ipsum',
          content: '<p>Bushwick blue bottle scenester \
          helvetica ugh, meh four loko. Put a bird on \
          it lumbersexual franzen shabby chic, street \
          art knausgaard trust fund shaman scenester \
          live-edge mixtape taxidermy viral yuccie \
          succulents. Keytar poke bicycle rights, \
          crucifix street art neutra air plant PBR&B \
          hoodie plaid venmo. Tilde swag art party \
          fanny pack vinyl letterpress venmo jean \
          shorts offal mumblecore. Vice blog gentrify \
          mlkshk tattooed occupy snackwave, hoodie \
          craft beer next level migas 8-bit chartreuse. \
          Trust fund food truck drinking vinegar \
          gochujang.</p>'
        },
        {
        	id: 3,
          title: 'Cupcake Ipsum',
          content: '<p>Icing dessert soufflé lollipop \
          chocolate bar sweet tart cake chupa chups. \
          Soufflé marzipan jelly beans croissant \
          toffee marzipan cupcake icing fruitcake.\
           Muffin cake pudding soufflé wafer jelly \
           bear claw sesame snaps marshmallow. \
           Marzipan soufflé croissant lemon drops \
           gingerbread sugar plum lemon drops apple \
           pie gummies. Sweet roll donut oat cake \
           toffee cake. Liquorice candy macaroon \
           toffee cookie marzipan.</p>'
        }
			],
			selectedPost: null
		}
	},
	template: `
  	<div class="posts-tab">
      <ul class="posts-sidebar">
        <li
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:class="{ selected: post === selectedPost }"
					v-on:click="selectedPost = post"
        >
          {{ post.title }}
        </li>
      </ul>
      <div class="selected-post-container">
      	<div
        	v-if="selectedPost"
          class="selected-post"
        >
          <h3>{{ selectedPost.title }}</h3>
          <div v-html="selectedPost.content"></div>
        </div>
        <strong v-else>
          Click on a blog title to the left to view it.
        </strong>
      </div>
    </div>
  `
});

Vue.component('tab-archive', {
	template: '<div>Archive component</div>'
});

var app = new Vue({
	el: '#app',
	components: {
		'practice-three': ComponentA,
		'practice-four': ComponentB
	},
	data: {
		posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ],
    author: 'Nikola',
    posts2: [
      { id: 4, title: 'My journey with Vue' },
      { id: 5, title: 'Blogging with Vue' },
      { id: 6, title: 'Why Vue is so fun' }
    ],
    postFontSize: 1,
    lovingVue: true,
    url: "https://www.google.com/",
    currentTab: 'Posts',
    tabs: ['Posts', 'Archive']
	},
	methods: {

	},
	computed: {
		currentTabComponent: function() {
			return 'tab-' +
				this.currentTab.toLowerCase();
		}
	}
});