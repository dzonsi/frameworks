import ChildComponent from './ChildComponent'

export default {
  name: 'ParentComponent',
  components: { ChildComponent },
  template: `
    <div>
      <child-component @custom="onCustom" />
      <p v-if="emitted">Emitted!</p>
    </div>
  `,
  data() {
    return {
      emitted: false
    }
  },
  methods: {
    onCustom() {
      this.emitted = true
    }
  }
}