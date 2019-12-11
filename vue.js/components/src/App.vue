<template>
  <div>
    <div class="container">
      <parallax-container :perspective="500">
        <parallax-element style="position: relative;" :parallaxStrength="100" type="translation" tag="div">
          <img class="img" src="@/assets/xmax-light.jpg">
        </parallax-element>
      </parallax-container>
    </div>
    <div>
    <div style="background-color: rgb(255, 255, 255); height: 100vh;"><h1 style="margin-top: 0px; padding-top: 20px;">Scroll down ⬇</h1></div>
    <parallax :parallax="true" :fixed="true">
      <img src="@/assets/mt-dark.jpg" alt="very cool bg">
    </parallax>
    <div style="background-color: rgb(255, 255, 255); height: 100vh;"><h1 style="margin-top: 0px; padding-top: 20px;">Scroll up ⬇</h1></div>
  </div>
  </div>
</template>

<script>
import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax'
  import Parallax from 'vue-parallaxy'
export default {
  name: 'app',
  components: {
    ParallaxContainer,
    ParallaxElement,
    Parallax
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
body {
  margin: 0;
}
.container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  width: 1000px;
  height: 563px;
  border-radius: 50%;
}
</style>
