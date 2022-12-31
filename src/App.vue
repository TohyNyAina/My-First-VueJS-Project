<template>
  <div id='App'>
    <router-view></router-view>
  </div>
  
</template>

<script>

// import HomePage from "./page/home.vue"

export default {
  name: 'App',
}
</script>

<style>
  @import url('./style/reset.css');
  @import url('https://fonts.googleapis.com/css27family=Roboto:wght@300:400:700&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  padding: 0px 20px;
}
</style>
