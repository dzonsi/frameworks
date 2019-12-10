import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import UsersInfo from '@/components/UsersInfo'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

const mock = new MockAdapter(axios)

describe('UsersInfo', () => {

	it('gets users from API', async () => {
		mock.reset()
		mock.onGet('https://jsonplaceholder.typicode.com/users').reply(200, [{first: 'first'}])
		const wrapper = mount(UsersInfo)
		expect(wrapper.vm.users).to.equal(null)
		await wrapper.vm.fetchUsers()
		expect(wrapper.vm.users.data[0].first).to.equal('first')
	})

	it('add new user to API', async () => {
		mock.reset()
		mock.onPost('https://jsonplaceholder.typicode.com/users').reply(200, [{first: 'first'}])
		const wrapper = mount(UsersInfo)
		await wrapper.vm.addUser()
		expect(wrapper.vm.newUserInfo).to.equal(true)
	})

	it('gets single user form API', async () => {
		mock.reset()
		mock.onGet('https://jsonplaceholder.typicode.com/users/1').reply(200, [{first: 'first'}])
		const wrapper = mount(UsersInfo)
		await wrapper.vm.showUser(1)
		expect(wrapper.vm.singleUser).to.equal('first')
	})

})