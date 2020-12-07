<template>
<div id="container">
  <p id="title">小黑板，大事件</p>
  <div ref="board" id="board">
    <p class="bullet" v-for="(message,index) in messages" :key="index">
      {{ message }}
    </p>
  </div>
</div>
</template>

<script>
export default {
name: "Blackboard",
  props: {
  messages:{
    type:Array,
    default(){
      return ["黑板现在很黑，没有消息哦"]
    }
  }
  },
  mounted() {
    let i = 0;
    let ele = this.$refs.board
    console.log(ele)
    while (ele.scrollHeight - i*100 < 10){
      console.log(i)
      ele.scrollTo(++i * 100)
    }
  }
}


</script>

<style scoped>
  #board{
    width: 100%;
    height: 10rem;
    text-align: center;
    background: #355350;
    color: white;
    overflow: scroll;
    box-sizing: border-box;
    border: 3px solid orange;
    z-index: -1;
  }
  .bullet{
    margin: 5px;
  }
  #title{
    margin: 0;
    background: #355350;
    width: 8rem;
    margin: 3px auto 0;
    text-align: center;
    color: #cdcdcd;
    border: solid orange;
    border-width: 3px 3px 0 3px;
    z-index: 2;
    position: relative;
    bottom: -3px;
  }
</style>