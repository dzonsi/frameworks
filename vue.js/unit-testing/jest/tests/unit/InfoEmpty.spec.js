import InfoEmpty from '@/components/InfoEmpty'
import { mount } from '@vue/test-utils'

describe('InfoEmpty component', () => {

	it('renders the correct markup', () => {
		const message = 'test'
		const wrapper = mount(InfoEmpty, {
			propsData: {
				message
			}
		})
		expect(wrapper.find('h2').text()).toBe('test')
	})
})