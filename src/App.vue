<template>
  <div id="app">
    <datav></datav>
  </div>
</template>

<script>
import datav from './components/datav.vue'

export default {
  name: 'App',
  components: {
    datav
  }
}
</script>

<style>
body{
  background:black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
