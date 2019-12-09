import { expect, assert } from 'chai'
import { mount } from '@vue/test-utils'
import FakeNav from '@/components/FakeNav'
import sinon from 'sinon'

describe('FakeNav', () => {

	it('have correct data', () => {
		const wrapper = mount(FakeNav)
		expect(wrapper.vm.first).to.equal('first')
		expect(wrapper.vm.name).to.equal('From created hook!')
	})

	it('renders the correct markup', () => {
		const wrapper = mount(FakeNav)
		expect(wrapper.find('li:first-child a').text()).to.equal('first')
		expect(wrapper.find('h1').text()).to.equal('From created hook!')
	})

	// how to test startTime and stopTime
	// setInterval and clearInterval
	it('first link click trigger startTime method', () => {
		const wrapper = mount(FakeNav)
		var clock = sinon.useFakeTimers()
		wrapper.find('li:first-child a').trigger('click')
		clock.tick(1001)
		assert.equal(wrapper.vm.name, 'From created hook!')
	})

})