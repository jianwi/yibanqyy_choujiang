<template>
  <div>
    <info yb_uid=2></info>
    <div class="body">
      <blackboard :messages="message"></blackboard>
      <card>
        <template slot="title">抽奖券*10</template>
        <template slot="direct">去兑换</template>
      </card>
      <card>
        <template slot="title">网薪抽奖</template>
        <template slot="direct">去抽奖</template>
      </card>
      <card>
        <template slot="title">碎片商店</template>
        <template slot="direct">去购买</template>
      </card>
      <card>
        <template slot="title">我的背包</template>
        <template slot="direct">查看</template>
      </card>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Info from "@/components/User/Info";
import Blackboard from "@/components/Blackboard";

export default {
  name: "Home",
  components: {Info, Card, Blackboard},
  data(){
    return {
      message:Array(20)
          .fill("小明 10s 前抽中了“网薪*88”")
    }
  }

}

</script>

<style scoped>
header {
  color: #355350;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  font-size: 1.3rem;
}
.body{
  width: 95vw;
  margin: auto;
}
</style>