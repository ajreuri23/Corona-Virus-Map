<template>
  <div id="app">
    <corona-map/>
  </div>
</template>

<script>
import CoronaMap from './components/CoronaMap.vue'

export default {
  name: 'App',
  components: {
    CoronaMap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
