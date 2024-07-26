<script setup>
import { ref, onMounted } from 'vue';
import { CarsService } from '@/data/CarsService';  // Ensure the path is correct
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const cars = ref([]);

onMounted(() => {
    CarsService.getCars().then((data) => {
        cars.value = data;
    });
});
</script>

<template>
    <Carousel v-bind="settings" :breakpoints="breakpoints" wrapAround="true" :transition="500" :autoplay="1500"
        pauseAutoplayOnHover="true">
        <Slide v-for="car in cars" :key="car.id"> <!-- Ensure each car object has a unique id -->
            <div class="carousel__item py-2 mx-2">
                <div data-aos="fade-up"
                    class="overflow-hidden mr-2 transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img :src="`/assets/album/` + car.image" width="400" height="400" class="object-cover"
                        aria-label="rental mobil kupang" alt="rental mobil kupang" loading="lazy" />
                </div>
            </div>
        </Slide>
        <template #addons>
            <Pagination />
        </template>
    </Carousel>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default defineComponent({
    name: 'AutoplayCarousel',
    components: {
        Carousel,
        Slide,
        Pagination
    },
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 3,
            snapAlign: 'center',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 700px and up
            300: {
                itemsToShow: 2,
                snapAlign: 'start',
            },
            700: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 3.25,
                snapAlign: 'center',
            },
        },
    }),
});
</script>