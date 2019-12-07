import AddButton from '@/components/AddButton'
import { mount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'

describe('AddButton component', () => {

	it('renders the correct markup', () => {
		const wrapper = mount(AddButton)
		expect(wrapper.html()).toContain('<button class="btn">Add</button>')
	})

	it('emits an event with one argument', () => {
		const wrapper = shallowMount(AddButton)
		wrapper.find('button').trigger('click')
		expect(wrapper.emitted().submit).toBeTruthy()
		expect(wrapper.emitted('submit')).toHaveLength(1)
		expect(wrapper.emitted().submit[0]).toEqual([])
	})
})