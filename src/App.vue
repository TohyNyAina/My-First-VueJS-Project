<template>
  <div id='App'>
    <RestaurentCard/>
  </div>
  
</template>

<script>
import RestaurentCard from './components/RestaurentCard.vue';

export default {
  name: 'App',
  components:{
    RestaurentCard
  }
}
</script>

<style>
  @import url('./style/reset.css');
  @import url('https://fonts.googleapis.com/css27family=Roboto:wght@300:400:700&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
