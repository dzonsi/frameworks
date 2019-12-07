export default {
	template: `
		<div>
			<p>Test</p>
		</div>
	`,
	data() {
		return {
			name: 'Test'
		}
	},
  props: {
    custom: { type: Function }
  }
}