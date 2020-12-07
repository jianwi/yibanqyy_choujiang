<template>
  <div>
    <common-header>网薪抽奖</common-header>
    <div class="body">
      <div class="info">
        <p>抽奖券： 10个</p>
        <p>本周累计：</p>
        <p>
          <button>10</button>
          <button>10</button>
          <button>15</button>
          <button>30</button>
          <button>50</button>
        </p>
      </div>
      <draw></draw>
    </div>

  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader";
import Draw from "@/components/Draw/Index";
export default {
name: "LuckyDraw",
  components: {Draw, CommonHeader}
}
</script>

<style scoped>
.body{
  width: 95vw;
  margin: auto;
}
</style>