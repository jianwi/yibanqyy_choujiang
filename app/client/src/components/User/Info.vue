<template>
  <div class="container">
    <div>
      <img class="avatar" :src="avatar_src">
    </div>
    <div class="info">
      <div class="user-name">小明</div>
      <div class="detail">
        <span>网薪：122</span>
        <span style="margin-left: 20px">碎片: 168</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Info",
  props:{
    yb_uid:{
      type:String,
      default:'2'
    }
  },
  computed: {
    avatar_src() {
      return "http://img02.fs.yiban.cn/" + this.yb_uid + "/avatar/user/200"
    }
  }
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
.avatar{
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin: 3px;
  background: inherit;
}
.info{
  margin: 10px 15px;
  display: flex;
  flex-direction: column;
  color: white;
}
.user-name{
  font-size: 1.1rem;
  margin-bottom: 3px;
}
.detail{
  font-size: 0.85rem;
}
</style>