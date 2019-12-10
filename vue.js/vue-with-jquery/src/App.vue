<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <date-picker @update-date="updateDate" :date-format="dateFormat" v-once></date-picker>
    <p>{{ date }}</p>
    <time-picker></time-picker>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DatePicker from './components/DatePicker'
import TimePicker from './components/TimePicker'

export default {
  name: 'app',
  components: {
    HelloWorld,
    DatePicker,
    TimePicker
  },
  data() {
    return {
      dateFormat: 'dd-mm-yy',
      date: null
    }
  },
  methods: {
    updateDate: function(date) {
      this.date = date;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
