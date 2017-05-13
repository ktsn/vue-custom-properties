import _Vue from 'vue'

let Vue: typeof _Vue

function install(Ctor: typeof _Vue) {
  assert(!Vue, 'Already installed')
  Vue = Ctor

  Vue.mixin({
    mounted: init
  })
}

function init(this: _Vue): void {
  const options = this.$options.customProperties || {}
  Object.keys(options).forEach(key => {
    const observer = options[key] as any
    this.$watch(observer, value => {
      const { style } = this.$el
      if (style) {
        style.setProperty(key, value)
      }
    }, {
      immediate: true
    })
  })
}

function assert(condition: any, message: string): void {
  if (!condition) {
    throw new Error('[vue-custom-properties] ' + message)
  }
}

if (typeof window !== 'undefined' && (window as any).Vue) {
  (window as any).Vue.use(install)
}

export default {
  install
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends _Vue> {
    customProperties?: {
      [key: string]: string | ((this: V) => any)
    }
  }
}
