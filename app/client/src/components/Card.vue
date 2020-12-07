<template>
  <div>
    <div class="container">
      <div id="title">
        <slot name="title">抽奖券 * 1000</slot>
      </div>
      <div id="direct">
        <slot name="direct">去兑换</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Card"
}
</script>

<style scoped>
  .container{
    width: 100%;
    height: 6.5rem;
    margin: 15px 0;
    box-shadow: 0px 2px 5px black;
    display: flex;
    background: linear-gradient(45deg, #FF5722, orange, #FFEB3B);
    align-items: center;
  }
  #title{
    font-size: 1.5rem;
    color: white;
    margin-left: 2rem;
  }
  #direct{
    width: 5rem;
    transform: translate(1px);
    align-self: center;
    height: 100%;
    margin-left: auto;
    background: rgba(255,255,255,.2);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 1.1rem;
    color: #ce6c6c;
    padding: 0 1.8rem;
  }
</style>