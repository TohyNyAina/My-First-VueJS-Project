<template>
  <div class="home">
    <RestaurantRowVue/>
  </div>
</template>

<script>
//IMPORT
import BDD from '../BDD.js'
import { onMounted } from 'vue'
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

        let data_restaurant = []

        const makeDataRestaurant = () => {
            let three_restaurant = [];
            
            for (const restaurant of BDD) {
                const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)

                if (three_restaurant.length === 2) {
                    three_restaurant.push(new_restaurant);
                    data_restaurant.push(three_restaurant);
                    three_restaurant = [];
                } else {
                    three_restaurant.push(new_restaurant);  
                }
            }
        }

        onMounted(makeDataRestaurant);
    },
}
</script>

<style>

</style>