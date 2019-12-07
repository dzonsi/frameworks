import InfoRemove from '@/components/InfoRemove'
import { mount } from '@vue/test-utils'

describe('InfoEmpty component', () => {

	it('renders the correct markup', () => {
		const message = 'test'
		const wrapper = mount(InfoRemove, {
			propsData: {
				message
			}
		})
		expect(wrapper.find('h3').text()).toBe('test')
	})
})