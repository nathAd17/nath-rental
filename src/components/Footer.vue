<template>
    <section class="relative  bg-cream font-rubik mt-14">
        <svg class="absolute top-0 w-full left-0 h-6 -mt-5 sm:-mt-10 sm:h-16 text-cream" preserveAspectRatio="none"
            viewBox="0 0 1440 54">
            <path fill="currentColor"
                d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z">
            </path>
        </svg>
        <span class="absolute bottom-12 right-[35rem] z-50 hidden w-32 text-gray-900 lg:w-32 sm:block">
            <svg viewBox="0 0 52 24" fill="currentColor" class="text-gray-900">
                <defs>
                    <pattern id="b039bae0-fdd5-4311-b198-8557b064fce0" x="0" y="0" width=".135" height=".30">
                        <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                </defs>
                <rect fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)" width="52" height="24"></rect>
            </svg>
        </span>
        <div class="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  py-14 lg:px-8 mx-auto relative bg-cream">
            <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
                <div class="sm:col-span-2">
                    <a href="/" aria-label="Go home" title="Company" class="inline-flex items-center">
                        <span class="text-xl font-bold tracking-wide text-sky-950 uppercase">Nath Rental</span>
                    </a>
                    <div class="mt-2 lg:max-w-sm px-2 md:px-0">
                        <p class="text-sm text-center md:text-left text-gray-800 capitalize">
                            {{ deskripsi_rental}}
                        </p>
                    </div>
                </div>
                <div class="space-y-2 text-sm">
                    <p class="text-base font-bold tracking-wide text-sky-950">Contacts</p>
                    <div class="flex md:justify-start justify-center">
                        <p class="mr-1 text-gray-800">Phone:</p>
                        <a :href="`tel: `+ kontak_rental" target="_blank" aria-label="Our phone" title="Our phone"
                            class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">{{kontak_rental}}</a>
                    </div>
                    <div class="flex md:justify-start justify-center">
                        <p class="mr-1 text-gray-800">Address:</p>
                        <a :href="maps_rental" target="_blank" rel="noopener noreferrer" aria-label="Our address"
                            title="Our address"
                            class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                            {{alamat_rental}}
                        </a>
                    </div>
                </div>
                <div>
                    <span class="text-base font-bold tracking-wide text-sky-950">Social</span>
                    <div class="flex items-center md:justify-normal justify-center mt-1 space-x-3">

                        <a target="_blank" v-for="medsos in mediaSosial" :key="medsos.label" :href="medsos.link"
                            class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                            <component :is="medsos.icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p class="text-sm text-gray-900 text-center">
                    © Copyright <span>{{ new Date().getFullYear() }}</span> Lorem Inc. All rights reserved.
                </p>
                <ul class="flex mb-3 lg:mb-0 sm:space-y-0 sm:space-x-5 flex-row justify-center items-center gap-4 md:gap-0">
                    <li v-for="menu in menus" :key="menu.label">
                        <a :href="menu.route"
                            class="text-sm text-gray-900 transition-colors duration-300 hover:text-gray-500">{{menu.label}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
import IconWa from './icons/IconWa.vue';
import IconFb from './icons/IconFb.vue';
import IconIg from './icons/IconIg.vue';
export default {
    data() {
        return {
            menus :[
                { label: 'Home', route: '#' },
                { label: 'About', route: '#about'},
                { label: 'Services', route: '#services' },
                { label: 'Contact', route: '#contact' }
            ],
            deskripsi_rental: "car rental service in Kupang City, NTT which offers various types of cars at affordable prices",
            kontak_rental: "08123456789",
            alamat_rental: "Jl. Example No. 123, Kupang",
            maps_rental: "https://maps.app.goo.gl/xbD46Ei2N2NzxjE96" ,
            mediaSosial:[
                { label: 'Whatsapp', link: 'https://wa.me/08123456789', icon: 'IconWa' },
                { label: 'Facebook', link: 'https://www.facebook.com', icon: 'IconFb' },
                { label: 'Instagram', link: 'https://www.instagram.com', icon: 'IconIg' },
            ],
            dataAdmin: [
                {
                    nama_admin: "ADMIN",
                    no_telp: "628123456789",
                },
            ],
        };
    },
    methods: {
        generateWhatsAppLink(admin) {
            const pesan = `Halo Kak ${admin.nama_admin}, saya dengan nama ... ingin bertanya-tanya tentang BTA RENTAL apakah bisa?`;
            return `https://api.whatsapp.com/send?phone=${admin.no_telp}&text=${encodeURIComponent(pesan)}`;
        },
    },
    components: {
        IconWa,
        IconFb,
        IconIg,
    }
};
</script>

<style scoped>
    /* Add any additional styles if needed */
</style>
