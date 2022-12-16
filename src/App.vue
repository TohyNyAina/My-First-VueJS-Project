<template>
  <div id='App'>
    <restaurant-row-vue/>
  </div>
  
</template>

<script>
import RestaurantRowVue from './components/RestaurantRow.vue';
export default {
  name: 'App',
  components:{
    RestaurantRowVue,
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
