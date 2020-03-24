<template>
  <div id="app">
    <Navbar/>
    <corona-map/>
  </div>
</template>

<script>
import CoronaMap from './components/CoronaMap.vue'
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    CoronaMap,
    Navbar
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
  margin-top:0px;
}
</style>
