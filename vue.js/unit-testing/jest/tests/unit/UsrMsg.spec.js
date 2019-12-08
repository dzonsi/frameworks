import UsrMsg from '@/components/UsrMsg'
import { mount } from '@vue/test-utils'
import AddButton from '@/components/AddButton'

describe('UsrMsg component', () => {

	it('tempMessage is "You must enter message!" when AddButton event is emitted', () => {
		const wrapper = mount(UsrMsg)
		wrapper.find(AddButton).vm.$emit('submit')
		expect(wrapper.find(AddButton).emitted().submit).toBeTruthy()
		expect(wrapper.vm.tempMessage).toBe('You must enter message!')
	})

	it('tempMessage is "" when AddButton event is emitted twice', () => {
		const wrapper = mount(UsrMsg)
		wrapper.find(AddButton).vm.$emit('submit')
		wrapper.find(AddButton).vm.$emit('submit')
		expect(wrapper.vm.tempMessage).toBe('')
	})

	it('when AddButton event is emitted twice, UsrMsg emit event', () => {
		const wrapper = mount(UsrMsg)
		wrapper.find(AddButton).vm.$emit('submit')
		wrapper.find(AddButton).vm.$emit('submit')
		expect(wrapper.emitted().inputData[0]).toEqual(['You must enter message!'])
	})

	it('UsrMsg input on keyup.enter triggers method', () => {
		const wrapper = mount(UsrMsg)
		expect(wrapper.vm.tempMessage).toBe('')
		wrapper.find('input').trigger('keyup.enter')
		expect(wrapper.vm.tempMessage).toBe('You must enter message!')
	})

	it('UsrMsg input on keyup.enter triggers method that emit event', () => {
		const wrapper = mount(UsrMsg)
		wrapper.setData({ tempMessage: 'test' })
		wrapper.find('input').trigger('keyup.enter')
		expect(wrapper.emitted().inputData).toBeTruthy()
		expect(wrapper.emitted().inputData[0]).toEqual(['test'])
		expect(wrapper.vm.tempMessage).toBe('')
	})

})