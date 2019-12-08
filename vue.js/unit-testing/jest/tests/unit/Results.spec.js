import Results from '@/components/Results'
import { mount } from '@vue/test-utils'

describe('Results component', () => {

	it('renders the correct markup', () => {
		const msg = ['first', 'second', 'third']
		const wrapper = mount(Results, {
			propsData: {
				msg
			}
		})
		expect(wrapper.find('ul li:first-child').text()).toMatch(msg[0])
		expect(wrapper.find('ul li:nth-child(2)').text()).toMatch(msg[1])
		expect(wrapper.find('ul li:nth-child(3)').text()).toBe(msg[2])
	})

	it('emits an event with arguments', () => {
		const msg = ['first', 'second', 'third']
		const wrapper = mount(Results, {
			propsData: {
				msg
			}
		})

		wrapper.find('ul li:first-child').trigger('dblclick')
		expect(wrapper.emitted().removeMessage).toBeTruthy()
		expect(wrapper.emitted('removeMessage')).toHaveLength(1)
		expect(wrapper.emitted().removeMessage[0]).toEqual([0])

		wrapper.find('ul li:nth-child(2)').trigger('dblclick')
		expect(wrapper.emitted().removeMessage[1]).toEqual([1])
	})
})