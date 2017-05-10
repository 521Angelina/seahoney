<template>
  <div id="app" class="wrap">
    <router-view></router-view>
    <div class="loading-box" v-show="loadingShow">
      <div class="loading-css3">
        <div class="loading">loading……</div>
        <div>正在加载</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        cartList:this.$store.state.cartList
      }
    },
    computed:{
      loadingShow:function(){
        return this.$store.state.loadingShow
      }
    }
  }
</script>

<style lang="less">
@import "assets/css/reset.css";
@import "assets/css/base.less";
@import "assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
@import "assets/font/iconfont.css";
html{
  width:100%;
  height:100%;
  font-size:100px;
}
body{
  width:100%;
  height:100%;
  font-size:0.14rem;
  color:#000;
  max-width:950px;
  margin:0 auto;
}
.wrap{
  width:100%;
  height:100%;
}
.loading-box{
  position:fixed;
  z-index:1000;
  bottom:0;
  left:0;
  width:100%;
  height:100%;
  background:transparent;
}
.loading-css3{
  position:fixed;
  top:50%;
  left:50%;
  margin-top:-1rem;
  margin-left: -0.5rem;
  padding:.1rem;
  text-align:center;
  background:rgba(0,0,0,.65);
  border-radius:.15rem;
  z-index:1001;
  color:#fff;
  min-width:.75rem;
  max-width:5rem;
}
.loading-box .loader{
  -webkit-animation:loading 1.1s infinite linear;
  animation:loading 1.1s infinite linear;
  text-indent:-9999em;
  border-top:.3em solid hsla(0,0%,100%,.2);
  border-right:.3em solid hsla(0,0%,100%,.2);
  border-bottom:.3em solid hsla(0,0%,100%,.2);
  border-left:.3em solid #fff;
}
.loading-box .loader,.loading-box .loader:after{
  width:2.5em;
  height:2.5em;
  margin:0 auto .125rem;
  border-radius:50%;
}
@-webkit-keyframes loading{
  0%{
    -webkit-transform:rotate(0deg);
    transform:rotate(0deg)
  }
  to{
    -webkit-transform:rotate(1turn);
    transform:rotate(1turn)
  }
}
@keyframes loading{
  0%{
    -webkit-transform:rotate(0deg);
    transform:rotate(0deg)
  }
  to{
    -webkit-transform:rotate(1turn);
    transform:rotate(1turn)
  }
}
</style>
