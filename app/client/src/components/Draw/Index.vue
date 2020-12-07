<template>
<div>
  <div class="container">
    <box v-for="i in 9" :key="i"></box>
  </div>
  <div class="handle">
    <span>抽奖</span>
    <span>五连抽</span>
  </div>
</div>
</template>

<script>
import Box from "@/components/Draw/Box";
export default {
name: "Draw",
  components: {Box}
}
</script>

<style scoped>
.container{
  display: grid;
  width: 90vw;
  height: 90vw;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>