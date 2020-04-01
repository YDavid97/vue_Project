<template>
  <div class="welcome_sty">
  </div>
</template>

<script>
  export default {
    data(){
      return {
        count:'',//倒计时
      }
    },
    methods:{
      clickJump(){
        const timejump = 1;
        if(!this.timer){
          this.count = timejump;
          this.show = false;
          this.timer = setInterval(()=>{
            if(this.count >0 && this.count <= timejump){
              this.count--;
            }else{
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
              this.$router.push({path: '/login'});
            }
          },2000)
        }
      }
    },
    created(){
      console.log('enter created');
      this.clickJump();
    },
  }
</script>

<style>
.welcome_sty {
  height: 100%;
  width: 100%;
  background-image: url(../assets/lunbo.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0;
}
</style>
