<template>
    <section id="services" class="relative bg-gray-50 my-4 md:my-10 font-poppins">
        <div class="container px-4 my-4 md:my-10 py-8 lg:max-w-screen-xl lg:px-8 mx-auto text-gray-700 relative">
            <div class="py-3 mx-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-6 relative sm:mx-auto">
                <div class="clip absolute top-4 left-0 md:block hidden">
                    <div class="flex flex-row items-center">
                        <svg class="w-14" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3418 0H32L20.2532 52H0L11.3418 0Z" fill="#00FF29" />
                            <path d="M39.3418 0H60L48.2532 52H28L39.3418 0Z" fill="white" />
                        </svg>
                        <hr class="border border-gray-200 w-[16rem] mx-2">
                    </div>
                </div>
                <div class="clip absolute top-4 right-0 md:block hidden">
                    <div class="flex flex-row-reverse items-center">
                        <svg width="60" height="52" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3418 0H32L20.2532 52H0L11.3418 0Z" fill="#00FF29" />
                            <path d="M39.3418 0H60L48.2532 52H28L39.3418 0Z" fill="white" class="shadow-lg" />
                        </svg>
                        <hr class="border border-gray-200 w-[16rem] mx-2">
                    </div>
                </div>
                <div class="relative">
                    <div class="title mb-2 md:mb-6 text-center">
                        <h2 data-aos="fade-up"
                            class="mb-2 font-rubik text-xl font-bold tracking-tight text-sky-950 sm:text-4xl sm:leading-none">
                            Explore Services
                        </h2>
                    </div>
                    <div class="desc w-full md:w-1/2 mx-auto">
                        <p data-aos="fade-down"
                            class="mb-2 text-sm md:text-lg font-normal leading-relaxed font-roboto text-center text-sky-950">
                            Discover our wide range of services designed to provide the best solutions for your mobility
                            needs, featuring a fleet
                            of high-quality vehicles.
                        </p>
                    </div>
                    <span class="absolute bottom-28 left-80 z-50 hidden w-32 text-gray-900 lg:w-32 sm:block">
                        <svg viewBox="0 0 52 24" fill="currentColor" class="text-gray-900">
                            <defs>
                                <pattern id="b039bae0-fdd5-4311-b198-8557b064fce0" x="0" y="0" width=".135"
                                    height=".30">
                                    <circle cx="1" cy="1" r=".7"></circle>
                                </pattern>
                            </defs>
                            <rect fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)" width="52" height="24"></rect>
                        </svg>
                    </span>
                </div>
            </div>
            <div class="md:gap-10 sm:mx-8 lg:mx-auto lg:grid-cols-3 lg:max-w-screen-xl grid grid-cols-2 gap-2 mx-2">
                <div v-for="car in cars" :key="car.id" data-aos="zoom-in"
                    class="rounded-md bg-slate-100 border-dotted border-[3px] border-sky-800">
                    <div class="relative mb-4 rounded shadow">
                        <img class="object-cover rounded" width="400" height="400" :src="`/assets/album/`+ car.image"
                            aria-label="rental mobil kupang" title="rental mobil kupang"
                            alt="layanan rental mobil kupang" />
                    </div>
                    <div class="font-poppins flex flex-col gap-4 text-center">
                        <p class="text-base md:text-lg font-bold text-sky-900 uppercase">
                            {{ car.name}}
                        </p>
                        <p class="mb-2 text-xs font-semibold text-sky-900 capitalize">IN CITY/SELF DRIVE</p>

                        <Button label="Booking" @click="showModal(car)"
                            class="bg-cream hover:bg-creamhover text-gray-100 font-poppins py-0 text-base" :pt="{root: 'py-2 rounded-t-md'}"/>
                    </div>
                </div>
                <Dialog v-model:visible="mobil" modal header="Car Reservation"
                    :style="{ width: '60rem', backgroundColor: '#f9fafb', color: '#0c4a6e'}"
                    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
                    :pt="{title: 'text-xl font-rubik font-bold px-2'}">
                    <div class="bg-slate-50 relative overflow-y-auto">
                        <!-- Modal body -->
                        <div
                            class="lg:items-start lg:justify-between lg:flex-row flex flex-col items-center justify-center gap-6 p-2">
                            <div class="w-full my-auto">
                                <img class="sm:h-[22rem] object-fill rounded shadow-lg"
                                    :src="`/assets/album/` + selectedCar.image" aria-label="rental mobil kupang"
                                    title="rental mobil kupang" width="500" alt="layanan rental mobil kupang" />
                            </div>
                            <div class="w-full">
                                <h2 class="sm:pr-12 text-base md:text-xl font-rubik text-sky-900 font-semibold capitalize">select
                                    service
                                </h2>
                                <section aria-labelledby="options-heading" class="mt-1">
                                    <h3 id="options-heading" class="sr-only">Service options
                                    </h3>
                                    <!-- Type -->
                                    <div class="mt-2 font-poppins">
                                        <div class="pt-2">
                                            <div class="flex items-center p-2 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50"
                                                role="alert">
                                                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                                </svg>
                                                <span class="sr-only">Info</span>
                                                <div>
                                                    <p class="text-[12px] font-light">Please select the type of service
                                                        below, and contact the admin to confirm!.</p>
                                                </div>
                                            </div>
                                            <h3 class="text-sm font-rubik text-sky-900 font-medium">Type of Service</h3>
                                        </div>
                                        <fieldset class="relative mt-2" id="pilihanFieldset">
                                            <legend class="sr-only">Pilihan </legend>
                                            <div
                                                class="sm:grid-cols-10 lg:grid-cols-5 grid grid-cols-5 items-center gap-5">
                                                <div class="flex rounded-md items-center content-center shadow-sm"
                                                    role="group">
                                                    <div class="radio-inputs">
                                                        <label>
                                                            <input checked="" class="radio-input" type="radio"
                                                                name="engine" value="Dalam Kota">
                                                            <span class="radio-tile">
                                                                <span class="radio-label">In City <br>( Driver +
                                                                    BBM)</span>
                                                                <span class="radio-label">Rp.
                                                                    {{ selectedCar.cityCar}}
                                                                </span>
                                                            </span>
                                                        </label>
                                                        <label>
                                                            <input class="radio-input" type="radio" name="engine"
                                                                value="Lepas Kunci">
                                                            <span class="radio-tile">
                                                                <span class="radio-label">Self Drive</span>
                                                                <span class="radio-label">Rp.
                                                                    {{ selectedCar.selfDrive}}
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <!-- button cart & buy -->
                                    <h2
                                        class="text-sky-900 sm:text-left font-rubik text-center my-2 text-base md:text-lg font-semibold">
                                        Contact Admin to Rent Now
                                    </h2>
                                    <div class="item-center flex mt-1">
                                        <button type="button"
                                            class="border-[2.5px] font-rubik border-green-400 border-dotted px-5 py-2.5 relative text-base font-semibold text-sky-950 w-full flex justify-center items-center bg-green-100 hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center transition-colors duration-300 ease-in-out">
                                            <span class="absolute top-2 left-2 flex w-3 h-3">
                                                <span
                                                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-700 opacity-75"></span>
                                                <span
                                                    class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                            </span>
                                            <svg class="fill-sky-900 icon w-6 h-6 me-2"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path
                                                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                            </svg>
                                            Contact Admin
                                        </button>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>
        </div>
    </section>
</template>
<script>
import { ref, onMounted } from 'vue';
import { CarsService } from '@/data/CarsService';  // Ensure the path is correct
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import 'vue3-carousel/dist/carousel.css';

export default {
    components: {
        Dialog,
        Button
    },
    setup() {
        const cars = ref([]);
        const mobil = ref(false);
        const selectedCar = ref(null);

        const showModal = (car) => {
            selectedCar.value = car;
            mobil.value = true;
        };

        onMounted(() => {
            CarsService.getCars().then((data) => {
                cars.value = data;
            });
        });

        return {
            cars,
            mobil,
            selectedCar,
            showModal
        };
    }
};
</script>
<style scoped>
    .radio-inputs {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        max-width: 500px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .radio-inputs>* {
        margin: 6px;
    }

    .radio-input:checked+.radio-tile {
        border-color: #2260ff;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        color: #2260ff;
    }

    .radio-input:checked+.radio-tile:before {
        transform: scale(1);
        opacity: 1;
        background-color: #2260ff;
        border-color: #2260ff;
    }

    .radio-input:checked+.radio-tile .radio-icon svg {
        fill: #2260ff;
    }

    .radio-input:checked+.radio-tile .radio-label {
        color: #2260ff;
    }

    .radio-input:focus+.radio-tile {
        border-color: #2260ff;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 0 0 4px #b5c9fc;
    }

    .radio-input:focus+.radio-tile:before {
        transform: scale(1);
        opacity: 1;
    }

    .radio-tile {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 150px;
        min-height: 100px;
        border-radius: 0.5rem;
        border: 2px solid #b5bfd9;
        background-color: #fff;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        transition: 0.15s ease;
        cursor: pointer;
        position: relative;
    }

    @media (max-width: 450px) {

        .radio-inputs {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
        }
    }

    .radio-tile:before {
        content: "";
        position: absolute;
        display: block;
        width: 0.75rem;
        height: 0.75rem;
        border: 2px solid #b5bfd9;
        background-color: #fff;
        border-radius: 50%;
        top: 0.25rem;
        left: 0.25rem;
        opacity: 0;
        transform: scale(0);
        transition: 0.25s ease;
    }

    .radio-tile:hover {
        border-color: #2260ff;
    }

    .radio-tile:hover:before {
        transform: scale(1);
        opacity: 1;
    }

    .radio-icon svg {
        width: 2rem;
        height: 2rem;
        fill: #494949;
    }

    .radio-label {
        color: #707070;
        transition: 0.375s ease;
        text-align: center;
        font-size: 14px;
    }

    .radio-input {
        clip: rect(0 0 0 0);
        -webkit-clip-path: inset(100%);
        clip-path: inset(100%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
</style>