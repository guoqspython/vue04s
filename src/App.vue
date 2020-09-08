<template>
  <div id="app">
      <router-link to="/Home">首页</router-link>
      <router-link to="/User">用户页</router-link>

      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {

}
</style>
