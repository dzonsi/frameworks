<template>
  <div class="hello">
    <h1 class="text-primary">{{ msg }} dodgerblue changed in styles/_variables.scss</h1>
    <h2 class="test">HelloWorld component</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* for manually accessing function and variables in every component
@import "../../node_modules/bootstrap/scss/functions";
@import "../styles/variables";
*/

.test {
  color: $red;
}
</style>
