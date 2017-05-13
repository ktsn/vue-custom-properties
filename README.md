# vue-custom-properties

Make easier to use CSS custom properties in Vue components

## Installation

```bash
$ npm install --save vue-custom-properties
# or
$ yarn add vue-custom-properties
```

## Example

1. Install it into Vue.js.

```js
import Vue from 'vue'
import VueCustomProperties from 'vue-custom-properties'

Vue.use(VueCustomProperties)
```

2. Define `customProperties` option in your components.

```js
export default {
  data() {
    return {
      color: 'red',
      size: 12
    }
  },

  customProperties: {
    '--base-color': 'color', // --base-color: red;
    '--base-size'() {
      return this.size + 'px' // --base-size: 12px;
    }
  }
}
```

## License

MIT
