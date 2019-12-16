<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="javascript:void(0)" role="button">Learn more</a>
  </p>
</div>
    <h1 class="first">{{ msg }} purple changed in component style</h1>
    <h2 class="first">Vue with Bootstrap</h2>
    <div class="card-group">
      <div class="card">
        <img src="../assets/xmax-light.jpg" class="card-img-top" alt="Xmax 300">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <img src="../assets/mt-medium.jpg" class="card-img-top" alt="MT">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
      <img src="../assets/mt-dark.jpg" class="card-img-top" alt="MT">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'First',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$purple: #800080;
.first {
  color: $purple;
  background-color: $input-border-color;
}
h2.first {
  background-color: gray('300')
}
</style>