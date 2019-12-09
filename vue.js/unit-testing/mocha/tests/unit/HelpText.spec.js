import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import HelpText from '@/components/HelpText'

describe('HelpText', () => {
	it('contains "Help component!" text in template', () => {
		const wrapper = mount(HelpText)
		expect(wrapper.find('h2').text()).to.equal('Help component!')
	})
})