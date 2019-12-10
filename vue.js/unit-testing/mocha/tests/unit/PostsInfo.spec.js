import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import PostsInfo from '@/components/PostsInfo'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

const mock = new MockAdapter(axios)


// can't mock lifecycle hooks in test
describe('PostsInfo', () => {

	it('gets posts from API', async () => {
		mock.reset()
		mock
			.onGet('https://jsonplaceholder.typicode.com/posts')
			.reply(200, [{first: 'first'}])
		const wrapper = mount(PostsInfo)
		expect(wrapper.vm.posts).to.equal(null)
		await wrapper.vm.getApi()
		expect(wrapper.vm.posts.data[0].first).to.equal('first')
	})

	it('does not modify posts from network error', async () => {
		mock.reset()
		mock
			.onGet('https://jsonplaceholder.typicode.com/posts')
			.networkError()
		const wrapper = mount(PostsInfo)
		await wrapper.vm.getApi()
		expect(wrapper.vm.posts).to.equal(null)
	})

	it("does not modify posts from network timeout", async () => {
    mock.reset()
		mock
			.onGet('https://jsonplaceholder.typicode.com/posts')
			.timeout()
		const wrapper = mount(PostsInfo)
		await wrapper.vm.getApi()
		expect(wrapper.vm.posts).to.equal(null)
  })

})