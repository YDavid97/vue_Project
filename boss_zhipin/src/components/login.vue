<template>
  <div class="body_sty">
    <!-- 轮播图 -->
    <van-swipe class="loginMacsk"
    :autoplay="1500" :show-indicators="false" >
      <van-swipe-item class='loginbg_1'></van-swipe-item>
      <van-swipe-item class='loginbg_2'></van-swipe-item>
      <van-swipe-item class='loginbg_3'></van-swipe-item>
    </van-swipe>
    <!-- 我要招人，我要应聘，按钮 -->
    <van-button class="loginBtn_1" type="primary">我要招人</van-button>
    <van-button class="loginBtn_2" type="primary" to='/index_jobList'>我要应聘</van-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'vue+vant高仿boss直聘app',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body_sty {
  height: 100%;
  position: relative;
}
.loginMacsk {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.loginbg_1{
  width: 100%;
  height: 100%;
  background-image: url(../assets/lunbo1.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0;
}
.loginbg_2{
  width: 100%;
  height: 100%;
  background-image: url(../assets/lunbo2.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0;
}
.loginbg_3{
  width: 100%;
  height: 100%;
  background-image: url(../assets/lunbo3.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0;
}
.loginBtn_1 {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 5;
  /* height: .8rem;
  line-height: .8rem; */
}
.loginBtn_2 {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 5;
  /* height: 1rem;
  line-height: 1rem; */
}
</style>
