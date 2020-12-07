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
    messages: {
      type: Array,
      default() {
        return ["黑板现在很黑，没有消息哦"]
      }
    }
  },
  mounted() {
    const ele = this.$refs.board
    const sh = ele.scrollHeight
    const ch = ele.clientHeight
    let i = 0;
    let left = sh - ch
    let every_down = 78

    let interval_id = setInterval(() => {
      let start_n = i * every_down
      let end_n = ++i * every_down

      // 慢慢下滑
      function slow_scroll_down() {
        return requestAnimationFrame(() => {
          ele.scrollTo(0, ++start_n)
          if (start_n < end_n) {
            slow_scroll_down()
          }
        })
      }
      slow_scroll_down()

      left = left - every_down
      // console.log(left)
      if (left < 20) {
        console.log("结束，信息到底了")
        clearInterval(interval_id)
      }
    }, 5000)

  }
}


</script>

<style scoped>
#board {
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

.bullet {
  margin: 5px;
}

#title {
  background: #355350;
  font-size: 1.2rem;
  width: 10rem;
  margin: 3px auto 0;
  text-align: center;
  color: #cdcdcd;
  border: solid orange;
  border-width: 3px 3px 0 3px;
  z-index: 2;
  position: relative;
  bottom: -3px;
  text-shadow: 0 0 1px white;
}
</style>