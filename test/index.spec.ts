import assert = require('power-assert')
import Vue from 'vue'
import VueCustomProperties from '../src/index'

Vue.config.productionTip = false

describe('Vue Custom Properties', () => {
  before(() => {
    Vue.use(VueCustomProperties)
  })

  it('should initialize custom properties', () => {
    const vm = new Vue({
      template: '<div>Hello</div>',

      data: {
        a: 'red',
        b: 123
      },

      computed: {
        c(this: any) {
          return this.b * 10
        }
      },

      customProperties: {
        '--foo': 'a',
        '--bar': 'c',
        '--baz'(this: any) {
          return this.b + 1
        }
      }
    }).$mount()

    const s = vm.$el.style
    assert(s.getPropertyValue('--foo') === 'red')
    assert(s.getPropertyValue('--bar') === '1230')
    assert(s.getPropertyValue('--baz') === '124')
  })

  it('should aware the changes of dependent data', done => {
    const vm: any = new Vue({
      template: '<div>Hello</div>',

      data: {
        a: 10
      },

      computed: {
        b(this: any) {
          return this.a * 10
        }
      },

      customProperties: {
        '--foo': 'a',
        '--bar'(this: any) {
          return this.b + 1
        }
      }
    }).$mount()

    const s = vm.$el.style
    assert(s.getPropertyValue('--foo') === '10')
    assert(s.getPropertyValue('--bar') === '101')

    vm.a = 20

    Vue.nextTick(() => {
      assert(s.getPropertyValue('--foo') === '20')
      assert(s.getPropertyValue('--bar') === '201')
      done()
    })
  })
})
