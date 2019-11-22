<template>
  <div id="app">
    <FakeNav v-if="show" />
    <HelpText v-else />
    <button class="btn btn-danger" @click="toggleShow">Toggle</button>
    <button class="btn btn-secondary" @click="toggleShowUsers">{{ showInfo }}</button>
    <UsersInfo v-if="showUsers" />
    <PostsInfo v-else />
  </div>
</template>

<script>
import FakeNav from './components/FakeNav.vue';
import HelpText from './components/HelpText';
import UsersInfo from './components/UsersInfo';
import PostsInfo from './components/PostsInfo';

export default {
  name: 'app',
  components: {
    FakeNav,
    HelpText,
    UsersInfo,
    PostsInfo
  },
  data() {
    return {
      show: true,
      showUsers: true,
      showInfo: 'Show posts'
    }
  },
  methods: {
    toggleShow() {
      this.show = !this.show
    },
    toggleShowUsers() {
      this.showUsers = !this.showUsers
    }
  },
  beforeUpdate() {
    !this.showUsers ? this.showInfo = 'Show users' : this.showInfo = 'Show posts'
  },
  updated() {
    console.log('updated', this.show)
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
}
</style>
