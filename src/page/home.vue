<template>
  <div class="home">
    <RestaurantRowVue/>
  </div>
</template>

<script>
//IMPORT
// import BDD from '../BDD.js';
//COMPONENTS
import RestaurantRowVue from '@/components/RestaurantRow.vue';
export default {
    name: 'HomePage',
    components: {
        RestaurantRowVue,
    },
    setup() {
    class Restaurant {
        constructor(name, note, image, drive_time) {
            this.name = name
            this.note = note
            this.image = image
            this.drive_time = drive_time
        }
    }

    var resto = new Restaurant('restaurant lechat', 4.5, 'img', '45mn')
    console.log(resto)
}
}
</script>

<style>

</style>