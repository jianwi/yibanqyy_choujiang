<template>
  <div id="app">
    <transition enter-active-class="animated bounce" leave-active-class="animated hinge">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
