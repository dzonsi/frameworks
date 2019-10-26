import GithubInput from '../GithubInput/index.vue';
import GithubOutput from '../GithubOutput/index.vue'
import practice from '../practice/index.vue';

export default {
	name: 'App',
	components: {
		'github-input': GithubInput,
		'github-output': GithubOutput,
		'practice': practice,
	},
	data() {
		return {}
	},
}