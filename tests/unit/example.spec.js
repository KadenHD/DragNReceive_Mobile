import { mount } from '@vue/test-utils';
import App from '@/views/App.vue';

describe('App.vue', () => {
  it('renders App vue', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toMatch('Ready to create an app?')
  })
})
