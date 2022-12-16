<template>
  <div id='App'>
    <HomePage/>
  </div>
  
</template>

<script>
import HomePage from "./page/home.vue"
export default {
  name: 'App',
  components:{
    HomePage,
  }
}
</script>

<style>
  @import url('./style/reset.css');
  @import url('https://fonts.googleapis.com/css27family=Roboto:wght@300:400:700&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  padding: 20px;
}
</style>
