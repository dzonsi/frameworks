import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter', () => {
	it('increments count when button is clicked', () => {
		const wrapper = shallowMount(Counter)
		// first click
		wrapper.find('button').trigger('click')
		expect(wrapper.find('div').text()).to.equal('1 Increment')
		expect(wrapper.vm.count).to.equal(1)
		// second click
		wrapper.find('button').trigger('click')
		expect(wrapper.find('div').text()).to.equal('2 Increment')
		expect(wrapper.vm.count).to.equal(2)
	})
})