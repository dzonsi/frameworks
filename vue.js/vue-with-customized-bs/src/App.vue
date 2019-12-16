<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <First msg="I am new component" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import First from './components/First.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    First
  }
}
</script>

<style lang="scss">
/* import custom bootstrap for whole app */
@import "./styles/custom-bootstrap";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
