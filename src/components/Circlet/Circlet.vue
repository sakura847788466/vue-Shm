<template>
  <div id="page_end_html">
    <!-- 圆圈特效-->
    <div id="circle"></div>
    <div id="circle1"></div>
    <div id="circletext"
         style="text-align: center;"
        >点击进入</div>

  </div>
</template>

<script>
export default {
  name: 'Circlet',
  data () {
    return {
    }
  },
  methods: {
   
  }
}
</script>

<style scoped>
#circle {
  border: 5px solid rgba(247, 14, 42, 1);
  opacity: 0.9;
  border-right: 5px solid rgba(0, 0, 0, 0);
  border-left: 5px solid rgba(0, 0, 0, 0);
  border-radius: 65px;
  box-shadow: 0 0 35px #808080;
  width: 130px;
  height: 130px;
  position: absolute;
  animation: spinPulse 10s infinite linear;
  left: 50%;
  top: 50%;
  margin-top: -65px;
  margin-left: -65px;
  cursor: pointer;
}
#circle1 {
  background-color: rgba(0, 0, 0, 0);
  border: 6px solid rgba(31, 62, 230, 0.9);
  opacity: 0.9;
  border-left: 6px solid rgba(0, 0, 0, 0);
  border-right: 6px solid rgba(0, 0, 0, 0);
  border-radius: 55px;
  box-shadow: 0 0 15px #202020;
  width: 110px;
  height: 110px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -55px;
  margin-left: -55px;
  animation: spinoffPulse 20s infinite linear;
  cursor: pointer;
}
#circletext {
    font-weight: bold;
    color: #808080;
    text-align: center;
    font-size: 16px;
    width: 84px;
    height: 53px;
    line-height: 53px;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -30px;
    margin-left: -39px;
    cursor: pointer;
}
@keyframes spinPulse {
  0% {
    transform: rotate(160deg);
    opacity: 0.5;
    box-shadow: 0 0 1px #505050;
  }
  50% {
    transform: rotate(100deg);
    opacity: 1;
  }
  100% {
    transform: rotate(-320deg);
    opacity: 0.5;
  }
}
@keyframes spinoffPulse {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>