// Import the mount() method from the test utils
// and the component you want to test
import Vue from 'vue'// for Vue.nextTick()
import { mount } from '@vue/test-utils'
import Counter from './counter'
import ParentComponent from './ParentComponent'
import ChildComponent from './ChildComponent'
import YesNoComponent from './YesNoComponent'
import sinon from 'sinon'
import QuantityComponent from './QuantityComponent'

describe('Counter', () => {
  // mount the component
  const wrapper = mount(Counter)

  it('renders the correct markup for span', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  it('renders the correct markup for button', () => {
    expect(wrapper.html()).toContain('<button>Increment</button>')
  })

  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('button click should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })

  it('button click should increment the count with nextTick', async () => {
    expect(wrapper.text()).toContain('1')
    const button = wrapper.find('button')
    button.trigger('click')
    await Vue.nextTick()
    expect(wrapper.text()).toContain('2')
  })

})

describe('ParentComponent', () => {

  it('should emit own event', () => {
    const wrapper = mount(ParentComponent)
    wrapper.vm.$emit('onCustom')
    expect(wrapper.emitted().onCustom).toBeTruthy()
  })

  it('displays "Emitted!", when custom event is emitted from child component', () => {
    const wrapper = mount(ParentComponent)
    wrapper.find(ChildComponent).vm.$emit('custom')
    expect(wrapper.html()).toContain('Emitted!')
  })

})

describe('ChildComponent', () => {

  it('renders the correct markup for p element', () => {
    const wrapper = mount(ParentComponent)
    expect(wrapper.find(ChildComponent).html()).toContain('<p>Test</p>')
  })

})

// mouse click not working ???
describe('Click event', () => {

  it('Click on yes button calls our method with argument "yes"', () => {
    const spy = sinon.spy()
    const wrapper = mount(YesNoComponent, {
      propsData: {
        callMe: spy
      }
    })
    wrapper.find('button.yes').trigger('click')
    spy.calledWith('yes')
  })

})

// keyboard example
describe('Key events test', () => {

  it('Quantity is zero by default', () => {
    const wrapper = mount(QuantityComponent)
    expect(wrapper.vm.quantity).toBe(0)
  })

  it('Up arrow key increments quantity by 1', () => {
    const wrapper = mount(QuantityComponent)
    wrapper.vm.quantity = 7
    wrapper.trigger('keydown.up')
    expect(wrapper.vm.quantity).toBe(8)
  })

  it('Down arrow key decrements quantity by 1', () => {
    const wrapper = mount(QuantityComponent)
    wrapper.vm.quantity = 8
    wrapper.trigger('keydown.down')
    expect(wrapper.vm.quantity).toBe(7)
  })

  it('Escape sets quantity to 0', () => {
    const wrapper = mount(QuantityComponent)
    wrapper.vm.quantity = 5
    wrapper.trigger('keydown.esc')
    expect(wrapper.vm.quantity).toBe(0)
  })

  it('Magic character "a" sets quantity to 13', () => {
    const wrapper = mount(QuantityComponent)
    wrapper.trigger('keydown', {
      key: 'a'
    })
    expect(wrapper.vm.quantity).toBe(13)
  })

})