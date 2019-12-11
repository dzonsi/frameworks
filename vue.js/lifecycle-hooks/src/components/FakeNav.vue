<template>
	<div>
		<ul class="my-nav">
			<li>
				<a class="nav-link" href="javascript:void(0)" @click="startTime"> {{ first }}</a>
			</li>
			<li>
				<a class="nav-link" href="javascript:void(0)" @click="stopTime"> {{ second }}</a>
			</li>
			<li>
				<a id="third" class="nav-link" href="javascript:void(0)"> {{ third }}</a>
			</li>
			<li>
				<a id="fourth" class="nav-link" href="javascript:void(0)">{{ fourth }}</a>
			</li>
		</ul>
		<h1>{{ name }}</h1>
		<h2>{{ timer }}</h2>
	</div>
</template>

<script>
import 'jquery'
export default {
	name: 'FakeNav',
	data() {
		return {
			first: 'first',
			second: 'second',
			third: 'third',
			fourth: 'fourth',
			name: '',
			timer : null
		}
	},
	methods: {
		startTime() {
			var vm = this;
			this.timer = setInterval(function() {
				var date = new Date();
				vm.name = date.toLocaleTimeString('sr-SR');
				console.log('date running')
				console.log(this)
			}, 1000);
		},
		stopTime() {
			clearInterval(this.timer);
		}
	},
	// The beforeCreate hook runs at the very
	// initialization of your component.
	// data has not been made reactive
	// events have not been set up yet
	beforeCreate() {
		console.log('Nothing gets called before me!');
	},
	// In the created hook, you will be able to
	// access reactive data and events are active
	// Templates and Virtual DOM have not
	// yet been mounted or rendered
	// use for fetchind data
	created() {
		this.name = 'From created hook!';
	},
	// The beforeMount hook runs right before the
	// initial render happens and after the
	// template or render functions have been
	// compiled
	beforeMount() {
		console.log(`this.$el doesn't exist yet, but it will soon!`)
	},
	// In the mounted hook, you will have full
	// access to the reactive component,
	// templates, and rendered DOM (via.
	// this.$el)
	// used for modifying the DOM
	mounted() {
		console.log(this.$el)
		$('#fourth').css('color', 'magenta')
		$('#third').css('color', 'lime')
	},
	// Updating hooks are called whenever a
	// reactive property used by your
	// component changes, or something else
	// causes it to re-render
	// Use if: You need to know when your
	// component re-renders
	// Do not use if: You need to know when
	// a reactive property on your component
	// changes. Use computed propertis or
	// watchers for that instead
	beforeUpdate() {
		// The beforeUpdate hook runs after data
		// changes on your component and the
		// update cycle begins, right before the
		// DOM is patched and re-rendered. It
		// allows you to get the new state of any
		// reactive data on your component before
		// it actually gets rendered.
		console.log('beforeUpdate');
	},
	updated() {
		// The updated hook runs after data
		// changes on your component and the DOM
		// re-renders. If you need to access the
		// DOM after a property change, here is
		// probably the safest place to do it.
		console.log('updated')
	},
	// Destruction hooks allow you to perform
	// actions when your component is
	// destroyed, such as cleanup or analytics
	// sending. They fire when your component
	// is being torn down and removed from the
	// DOM.
	beforeDestroy() {
		// beforeDestroy is fired right before
		// teardown. Your component will still be
		// fully present and functional. If you
		// need to cleanup events or reactive
		// subscriptions, beforeDestroy would
		// probably be the time to do it.
		console.log('beforeDestroy')
		console.log(this.timer)
		if(this.timer) {
			clearInterval(this.timer);
			console.log('clear interval works')
		}
	},
	destroyed() {
		// By the time you reach the destroyed
		// hook, there’s pretty much nothing left
		// on your component. Everything that was
		// attached to it has been destroyed. You
		// might use the destroyed hook to do any
		// last-minute cleanup or inform a remote
		// server that the component was
		// destroyed like a sneaky snitch.
		console.log('destroyed')
	}
}
</script>

<style scoped>
.my-nav {
	list-style-type: none;
	background-color: #555;
	background: linear-gradient(to bottom right, #333, #777);
	margin: 0;
}
.my-nav li {
	display: inline-block;
}
.nav-link {
	display: inline-block;
	text-decoration: none;
	color: white;
	font-size: 20px;
	padding: 10px 18px;
}
.nav-link:hover {
	color: orange;
}
h1 {
	background: -webkit-linear-gradient(right, mediumseagreen, dodgerblue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>