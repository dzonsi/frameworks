export default {
	name: 'YesNoComponent',
	template: `
		<div>
    	<button class="yes" @click="callYes">Yes</button>
    	<button class="no" @click="callNo">No</button>
  	</div>
	`,
	props: {
    callMe: {
      type: Function
    }
  },
  methods: {
    callYes() {
      this.callMe('yes')
    },
    callNo() {
      this.callMe('no')
    }
  }
}