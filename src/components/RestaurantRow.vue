<template>
  <div class="restaurant--row">
    <h2 class="title">
        Nos Restaurant
    </h2>
    <div class="wrapper--card">
        <restaurent-card-vue v-for="(card, index) in 3" :key="index"/>
    </div>
  </div>
</template>

<script>
import RestaurentCardVue from './RestaurentCard.vue';
export default {
    name: "RestaurantRow",
    components: {
     RestaurentCardVue,   
    }
}
</script>

<style lang="scss">
.restaurant--row {
    .title{
        font-size: 2rem;
    }
    .wrapper--card {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>