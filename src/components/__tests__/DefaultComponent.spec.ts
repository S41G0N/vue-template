import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheDefaultComponent from '../DefaultComponent.vue'

describe('TheDefaultComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(TheDefaultComponent)
    expect(wrapper.text()).toContain('THIS IS THE DEFAULT VUE')
  })
})
