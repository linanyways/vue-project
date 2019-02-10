<template>
  <div class="community">
    <ul class="nav">
      <router-link tag="li" :to="{name:'academic'}">学术讨论</router-link>
      <router-link tag="li" :to="{name:'download'}">下载</router-link>
      <router-link tag="li" :to="{name: 'consult'}">咨询</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  display: flex;
  color: #000;
}
.nav li {
  padding: 10px 20px;
}
.active {
  background-color: #000;
  color: #fff;
}
</style>