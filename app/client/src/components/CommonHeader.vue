<template>
    <div class="container">
    <span> 《 </span>
    <span>
      <slot>页面标题</slot>
    </span>
  </div>
</template>

<script>
export default {
name: "CommonHeader"
}
</script>

<style scoped>
.container {
  width: 100vw;
  display: flex;
  flex-direction: row;
  background: linear-gradient(90deg,red,orange);
  padding: 4.5px 0;
}
</style>