<template>
  <div class="app">
    <h1 class="title">Vue Custom Properties Example</h1>
    <p class="text">Select a text color</p>

    <label class="input" v-for="c in colors">
      <input type="radio" name="color" :value="c" v-model="textColor">
      <span>{{ c }}</span>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ['black', 'red', 'green', 'blue'],
      textColor: 'black'
    }
  },

  customProperties: {
    '--app-text-color': 'textColor'
  }
}
</script>

<style scoped>
.app {
  text-align: center;
  color: var(--app-text-color, black)
}

.title {
  font-weight: normal;
}

.input {
  margin: 0 10px;
}
</style>