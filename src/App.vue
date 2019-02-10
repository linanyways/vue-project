<template>
  <div id="app">
    <div class="header">
      <div class="center">
        <div class="logo">
          <img src="./assets/logo.png">
        </div>

        <ul class="nav">
          <router-link tag="li" to="/home">首页</router-link>
          <router-link tag="li" to="/learn">课程学习</router-link>
          <router-link tag="li" to="/student">学员信息</router-link>
          <router-link tag="li" :to="{name:'about'}">关于</router-link>
          <router-link tag="li" to="/community">社区</router-link>
        </ul>
      </div>
    </div>
     <router-view class="router-view"/>
     <router-view class="router-view" name="academic"/>
    <div class="footer"></div>
  </div>
</template>

<script>
import "@/assets/style/reset.css";

// LinkActiveClass: 'active'
export default {
  name: "App"
};
</script>
<style>
  .header {
    background-color: #000;
    line-height: 70px;
    padding-bottom: 2px;
  }
   .header .center {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      width: 1000px;
   }
   .header .center img {
        width: 50px;
        height: 50px;
        vertical-align: middle;
      }
     .header .center .logo {
        line-height: 70px;
      }
   .header .center ul {
        display: flex;
   }
  .header .center ul li {
      color: #fff;
      padding: 0 30px;
      cursor: pointer;
    }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height:50px;
    background: #000;
  }
  .active {
    border-bottom: 2px solid #f4f4f4;
  }
  .router-view {
    width: 1000px;
    margin: 0 auto;
    padding: 40px;
  }
</style>

