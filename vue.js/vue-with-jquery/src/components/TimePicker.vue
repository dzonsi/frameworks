<template>
  <div>
    <input type="text" :name="id" :id="id" value=" ">
  </div>
</template>

<script>
export default {
  name: 'time-picker',
  computed: {
    id() {
      // give the component a unique id/name
      // each component has a unique id
      // which can be accessed as this._uid
      return "time-picker-" + this._uid
    }
  },
  mounted() {
    $("#" + this.id).timepicker({
      timeFormat: "HH:mm:ss:l"
    })
  }
};
</script>

<style>
</style>