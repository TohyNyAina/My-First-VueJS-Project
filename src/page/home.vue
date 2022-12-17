<template>
  <div class="home">
    <div class="header">
        <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="" srcset="">
        <input type="text" placeholder="De quoi avez vous envie ?">
    </div>
    <div class="bannier">

    </div>
    <RestaurantRowVue v-for="(data, i) in data_restaurant" :key="i" :three_restaurant="data"/>
  </div>
</template>

<script>
//IMPORT
import BDD from '../BDD.js'
import { onMounted, ref } from 'vue'
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

        let data_restaurant = ref([]);

        const makeDataRestaurant = () => {
            let three_restaurant = []
            
            for (const restaurant of BDD) {
                const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)

                if (three_restaurant.length === 2) {
                    three_restaurant.push(new_restaurant);
                    data_restaurant.value.push(three_restaurant);
                    three_restaurant = [];
                } else {
                    three_restaurant.push(new_restaurant);  
                }
            }
        }

        onMounted(makeDataRestaurant);

        // return
        return {
            data_restaurant,
        }
    },
}
</script>

<style lang="scss">
.home {
    .header {
       height: 120px; 
       width: 100%;
       display: flex;
       align-items: center;
       justify-content: space-between;
       img {
        width: 200px;
       }
       input {
        background-color: #f6f6f6;
        border: none;
        height: 60px;
        width: 400px;
        outline: none;
        padding-left: 20px;
       }
    }
    .bannier {
        height: 200px;
        width: 100%;
        background-image: url("https://www.ubereats.com/restaurant/_static/7b308f7cbbf8e335ceda0447a8bd7c63.png");
        background-size: cover;
        background-position: center center;
    }
}
</style>