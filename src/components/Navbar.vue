<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const menu = ref([
    { label: 'Home', route: '#', section: 'home' },
    { label: 'About', route: '#about', section: 'about' },
    { label: 'Services', route: '#services', section: 'services' },
    { label: 'Contact', route: '#contact', section: 'contact' }
]);
const menuOpen = ref(false);
const isDarkMode = ref(false);
const currentSection = ref('home');
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};

const handleScroll = () => {
    const sections = menu.value.map(item => document.getElementById(item.section));
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            currentSection.value = menu.value[index].section;
        }
    });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
    <nav class=" border-gray-200 mx-4 fixed top-0 inset-x-0 z-[999]">
        <div
            class="lg:max-w-screen-xl bg-primary rounded-md md:rounded-full  backdrop-blur-lg backdrop-grayscale mt-2 absolute inset-x-0 flex flex-wrap items-center justify-between mx-auto py-4 px-8 z-[9999]">
            <a aria-label="icon-rental" title="beranda" href="/rental_mobil/hal/index.php"
                class="text-2xl relative z-50 px-4 font-bold  text-sky-950 font-poppins rounded-lg focus:outline-none focus:shadow-outline">
                Nath Rental </a>
            <button aria-label="buka menu" data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm border-2 border-gray-200 text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default" aria-expanded="false" @click="toggleMenu">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div :class="menuOpen ? 'block' : 'hidden'" class="w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col items-center font-poppins p-4 text-base md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 cursor-pointer">
                    <li v-for="item in menu" :key="item.label">
                        <a aria-label="menu" :title="item.label" :href="item.route"
                            :class="[item.section === currentSection ? 'block py-2  text-gray-800 rounded md:hover:bg-transparent cursor-pointer font-bold md:border-0 ease-in-out duration-300 md:hover:text-gray-900 md:p-0' : 'block cursor-pointer py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent hover:opacity-45 ease-in-out md:border-0 duration-300 md:hover:text-gray-900 md:p-0']"
                            aria-current="page">{{ item.label }}</a>
                    </li>
                    <li>
                        <a href="#services"
                            class="bg-cream hover:bg-creamhover py-2 px-4 rounded-full text-gray-800 font-semibold hover:scale-110 ease-in-out duration-500">Booking</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
</style>
