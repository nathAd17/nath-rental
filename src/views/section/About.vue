<script setup>
import { ref, onMounted } from 'vue';
import CarChoice from '@/components/CarChoice.vue';
import { Causes } from '@/data/RentCause';  // Ensure the path is correct

const causes = ref([]);

onMounted(() => {
    Causes.getCauses().then((data) => {
        causes.value = data;
    });
});
</script>

<template>
    <section id="about" class="about relative rounded-[2rem] mx-4 sm:mx-20">
        <div
            class="container px-4 my-4 md:my-10 py-8 lg:max-w-screen-xl sm:max-w-xl md:max-w-full lg:px-8 mx-auto text-gray-700 relative">
            <div class="py-4 mx-2 sm:max-w-xl  md:max-w-full lg:max-w-screen-xl lg:py-6 relative">
                <!-- trusted by -->
                <!-- <div class="title text-center z-10 relative">
                    <h1 class="text-2xl font-bold text-sky-950">Nath Rent Car</h1>
                </div> -->
                <div class="clip absolute top-4 left-0 md:block hidden">
                    <div class="flex flex-row items-center">
                        <svg class="w-14" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3418 0H32L20.2532 52H0L11.3418 0Z" fill="#00FF29" />
                            <path d="M39.3418 0H60L48.2532 52H28L39.3418 0Z" fill="white" />
                        </svg>
                        <hr class="border border-gray-200 w-[18rem] mx-2">
                    </div>
                </div>
                <div class="clip absolute top-4 right-0 md:block hidden">
                    <div class="flex flex-row-reverse items-center">
                        <svg width="60" height="52" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3418 0H32L20.2532 52H0L11.3418 0Z" fill="#00FF29" />
                            <path d="M39.3418 0H60L48.2532 52H28L39.3418 0Z" fill="white" class="shadow-lg" />
                        </svg>
                        <hr class="border border-gray-200 w-[17rem] mr-4 ml-12">
                    </div>
                </div>
                <div class="relative w-full">
                    <div class="title mb-2 md:mb-6 text-center">
                        <h2 data-aos="fade-up"
                            class="mb-2 font-rubik text-xl font-bold tracking-tight text-sky-950 sm:text-4xl sm:leading-none">
                            Nath Rental
                        </h2>
                    </div>
                    <div class="desc md:w-1/2 w-full mx-auto">
                        <p data-aos="fade-down" class="mb-2 text-sm md:text-lg font-normal font-roboto text-center text-sky-950">
                            With unwavering quality, reliability, and sincere service, we're with you every
                            kilometer,making memories at every turn.
                        </p>
                    </div>
                </div>

            </div>
            <div class="md:max-w-5xl w-full my-5 mx-auto carousel-container px-1">
                <h1 class="text-center text-2xl mb-4 ml-2 font-semibold text-sky-950 font-rubik">Our Collection
                </h1>
                <CarChoice />
            </div>

            <!-- MENGAPA BTL RENTAL. -->
            <div data-aos="flip-up" class="lg:max-w-screen-lg mx-auto text-center sm:mt-24 mt-10 relative">
                <h1 class="font-bold font-rubik text-sky-950 my-3 text-3xl">Why Choose Us?
                </h1>
                <p class="leading-relaxed font-roboto text-sky-900">"Quality, Convenience, and Safety: Reasons to Choose
                    Nath Rent
                    Car."</p>
                <span class="absolute top-12 left-24 z-50 hidden w-32 text-gray-900 lg:w-32 sm:block">
                    <svg viewBox="0 0 52 24" fill="currentColor" class="text-gray-900">
                        <defs>
                            <pattern id="b039bae0-fdd5-4311-b198-8557b064fce0" x="0" y="0" width=".135" height=".30">
                                <circle cx="1" cy="1" r=".7"></circle>
                            </pattern>
                        </defs>
                        <rect fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)" width="52" height="24"></rect>
                    </svg>
                </span>
            </div>
            <div class="grid mx-4 my-6 md:my-20 md:grid-cols-3 md:grid-rows-2 lg:max-w-screen-xl md:mx-auto gap-10">
                <div v-for="cause in causes" :key="cause.id" data-aos="fade-up" data-aos-delay="<?= 150 * $i ?>"
                    class="md:p-6 p-2 text-center bg-white shadow-xl rounded-xl">
                    <div :class="['flex items-center justify-center w-10 h-10 md:w-16 md:h-16 mx-auto transform -translate-y-6 md:-translate-y-12 rounded-full shadow-lg']"
                        :style="{ backgroundColor: cause.bgIcon }">
                        <img :src="`/assets/clip/`+cause.icon" alt="icon" class="md:w-8 w-5 md:h-8 h-5">
                    </div>
                    <h1 class="mb-3 md:text-xl text-base font-rubik font-semibold px-2 lg:px-4 text-darken">
                        {{ cause.title}}
                    </h1>
                    <p class="px-2 md:px-4 font-normal font-roboto text-sm md:text-base text-gray-500">
                        {{ cause.desc}}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

