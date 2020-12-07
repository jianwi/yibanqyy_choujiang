<template>
  <div class="container">
    <div class="back">
      <div class="back_btn" @click="handleBack"></div>
    </div>
    <div class="title">
      <slot>页面标题</slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "CommonHeader",
  methods:{
    handleBack(){
      console.log("back")
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  background: linear-gradient(40deg, red, orange);
  padding: 4.5px 0;
}
.back{
  margin-left: 12px;
  z-index: 99999;
}
.back_btn {
  display: block;
  width: 1.1rem;
  height: 1.1rem;
  border: solid white;
  border-width: 0 0 3px 3px;
  transform-origin: left center;
  transform: rotate(45deg) translate(.6rem,-.3rem);
}
.title{
  width: 100%;
  position: absolute;
  text-align: center;
  height: 2.5rem;
  line-height: 2.5rem;
  justify-self: center;
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
  z-index: 1;
}
</style>