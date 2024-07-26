<template>
    <section id="contact" class="relative lg:py-10 bg-gray-50">
        <div class="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8">
            <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl text-center">
                <h2 data-aos="fade-up"
                    class="mb-6 font-rubik text-xl font-bold tracking-tight text-sky-900 sm:text-4xl sm:leading-none">
                    Build Communication, Realize Your Dream Journey: Contact Us
                </h2>
                <p data-aos="fade-down" class="mb-6 text-base font-roboto text-sky-800"> We are ready to provide the
                    assistance you need, ensuring every detail of your trip with <span class="font-semibold">NATH
                        RENTAL</span> is unforgettable.
                    .
                </p>
            </div>
        </div>
        <div
            class="flex flex-col items-center justify-between lg:p-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:px-5 lg:flex-row">
            <div class="flex flex-col items-center w-full py-8 px-6 lg:flex-row bg-sky-900 rounded-[2rem] gap-6">
                <div class="w-full relative max-w-md lg:max-w-2xl lg:w-7/12 px-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1651.1252727486979!2d123.593518099862!3d-10.1757912488839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c569d42d7e53af9%3A0xb2ac3bd6b199c75f!2sBETA%20RENTAL%20MOBIL%20KUANINO!5e0!3m2!1sid!2sid!4v1721925263069!5m2!1sid!2sid"
                        loading="lazy" height="525" class="rounded-lg w-full"></iframe>
                </div>
                <div class="w-full relative z-10 max-w-2xl lg:mt-0 lg:w-5/12 px-4">
                    <div data-aos="zoom-in-left" data-aos-offset="200" data-aos-delay="200"
                        class="flex flex-col items-start m-0 justify-start p-4 bg-white shadow-2xl rounded-xl relative">
                        <form action="../src/pengunjung.php" class="w-full z-50" method="post">
                            <div class="flex items-center p-2 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50"
                                role="alert">
                                <svg class="hidden sm:block flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span class="sr-only">Info</span>
                                <div>
                                    <p class="text-[12px] font-poppins font-light">Hi, if you want a faster response,
                                        please
                                        click on
                                        the Whatsapp logo or telephone number at the bottom of the website and try
                                        to
                                        communicate your needs!</p>

                                </div>
                            </div>
                            <p class="w-full lg:text-3xl text-xl font-medium text-center leading-snug font-poppins">
                                Leave your message
                            </p>
                            <input type="hidden" name="id_pengunjung" value="" />
                            <div class="w-full mt-6 mx-0 mb-0 relative space-y-8">
                                <div class="relative">
                                    <label for="nama_pengunjung" class="bg-white py-0 px-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Full Name</label>
                                    <input placeholder="John" id="nama_pengunjung" type="text" name="nama_pengunjung"
                                        class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full lg:p-4 mt-2 mx-0 mb-0 text-base block bg-white
                  border-gray-300 rounded-md" required />
                                </div>
                                <div class="relative">
                                    <label for="email_pengunjung"
                                        class="bg-white py-0 px-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</label>
                                    <input placeholder="name@mail" name="email_pengunjung" id="email_pengunjung"
                                        type="text" class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full lg:p-4 mt-2 mx-0 mb-0 text-base block bg-white
                  border-gray-300 rounded-md" required />
                                </div>
                                <div class="relative">
                                    <label for="pesan" class="bg-white py-0 px-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Message</label>
                                    <textarea placeholder="Your Message" id="pesan" name="pesan" class="border placeholder-gray-500 focus:outline-none
                  focus:border-black w-full pt-4 lg:px-4 pb-4 px-2 mt-2 mx-0 text-base block bg-white
                  border-gray-300 rounded-md" required></textarea>
                                </div>
                                <div class="relative">
                                    <button title="kirim-pesan" aria-label="kontak rental mobil kupang" type="submit"
                                        name="simpan_data" value="simpan_data"
                                        class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl cursor-pointer font-medium text-center text-white bg-green-400 rounded-lg transition duration-200 hover:bg-green-600 ease">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <svg data-aos="zoom-in" data-aos-offset="200" data-aos-delay="200" viewbox="0 0 91 91" class="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300
            fill-current">
                        <g stroke="none" strokewidth="1" fillrule="evenodd">
                            <g fillrule="nonzero">
                                <g>
                                    <g>
                                        <circle cx="3.261" cy="3.445" r="2.72" />
                                        <circle cx="15.296" cy="3.445" r="2.719" />
                                        <circle cx="27.333" cy="3.445" r="2.72" />
                                        <circle cx="39.369" cy="3.445" r="2.72" />
                                        <circle cx="51.405" cy="3.445" r="2.72" />
                                        <circle cx="63.441" cy="3.445" r="2.72" />
                                        <circle cx="75.479" cy="3.445" r="2.72" />
                                        <circle cx="87.514" cy="3.445" r="2.719" />
                                    </g>
                                    <g transform="translate(0 12)">
                                        <circle cx="3.261" cy="3.525" r="2.72" />
                                        <circle cx="15.296" cy="3.525" r="2.719" />
                                        <circle cx="27.333" cy="3.525" r="2.72" />
                                        <circle cx="39.369" cy="3.525" r="2.72" />
                                        <circle cx="51.405" cy="3.525" r="2.72" />
                                        <circle cx="63.441" cy="3.525" r="2.72" />
                                        <circle cx="75.479" cy="3.525" r="2.72" />
                                        <circle cx="87.514" cy="3.525" r="2.719" />
                                    </g>
                                    <g transform="translate(0 24)">
                                        <circle cx="3.261" cy="3.605" r="2.72" />
                                        <circle cx="15.296" cy="3.605" r="2.719" />
                                        <circle cx="27.333" cy="3.605" r="2.72" />
                                        <circle cx="39.369" cy="3.605" r="2.72" />
                                        <circle cx="51.405" cy="3.605" r="2.72" />
                                        <circle cx="63.441" cy="3.605" r="2.72" />
                                        <circle cx="75.479" cy="3.605" r="2.72" />
                                        <circle cx="87.514" cy="3.605" r="2.719" />
                                    </g>
                                    <g transform="translate(0 36)">
                                        <circle cx="3.261" cy="3.686" r="2.72" />
                                        <circle cx="15.296" cy="3.686" r="2.719" />
                                        <circle cx="27.333" cy="3.686" r="2.72" />
                                        <circle cx="39.369" cy="3.686" r="2.72" />
                                        <circle cx="51.405" cy="3.686" r="2.72" />
                                        <circle cx="63.441" cy="3.686" r="2.72" />
                                        <circle cx="75.479" cy="3.686" r="2.72" />
                                        <circle cx="87.514" cy="3.686" r="2.719" />
                                    </g>
                                    <g transform="translate(0 49)">
                                        <circle cx="3.261" cy="2.767" r="2.72" />
                                        <circle cx="15.296" cy="2.767" r="2.719" />
                                        <circle cx="27.333" cy="2.767" r="2.72" />
                                        <circle cx="39.369" cy="2.767" r="2.72" />
                                        <circle cx="51.405" cy="2.767" r="2.72" />
                                        <circle cx="63.441" cy="2.767" r="2.72" />
                                        <circle cx="75.479" cy="2.767" r="2.72" />
                                        <circle cx="87.514" cy="2.767" r="2.719" />
                                    </g>
                                    <g transform="translate(0 61)">
                                        <circle cx="3.261" cy="2.846" r="2.72" />
                                        <circle cx="15.296" cy="2.846" r="2.719" />
                                        <circle cx="27.333" cy="2.846" r="2.72" />
                                        <circle cx="39.369" cy="2.846" r="2.72" />
                                        <circle cx="51.405" cy="2.846" r="2.72" />
                                        <circle cx="63.441" cy="2.846" r="2.72" />
                                        <circle cx="75.479" cy="2.846" r="2.72" />
                                        <circle cx="87.514" cy="2.846" r="2.719" />
                                    </g>
                                    <g transform="translate(0 73)">
                                        <circle cx="3.261" cy="2.926" r="2.72" />
                                        <circle cx="15.296" cy="2.926" r="2.719" />
                                        <circle cx="27.333" cy="2.926" r="2.72" />
                                        <circle cx="39.369" cy="2.926" r="2.72" />
                                        <circle cx="51.405" cy="2.926" r="2.72" />
                                        <circle cx="63.441" cy="2.926" r="2.72" />
                                        <circle cx="75.479" cy="2.926" r="2.72" />
                                        <circle cx="87.514" cy="2.926" r="2.719" />
                                    </g>
                                    <g transform="translate(0 85)">
                                        <circle cx="3.261" cy="3.006" r="2.72" />
                                        <circle cx="15.296" cy="3.006" r="2.719" />
                                        <circle cx="27.333" cy="3.006" r="2.72" />
                                        <circle cx="39.369" cy="3.006" r="2.72" />
                                        <circle cx="51.405" cy="3.006" r="2.72" />
                                        <circle cx="63.441" cy="3.006" r="2.72" />
                                        <circle cx="75.479" cy="3.006" r="2.72" />
                                        <circle cx="87.514" cy="3.006" r="2.719" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <svg data-aos="zoom-in" data-aos-delay="200" data-aos-offset="800" viewbox="0 0 91 91" class="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-sky-800
            fill-current">
                        <g stroke="none" strokewidth="1" fillrule="evenodd">
                            <g fillrule="nonzero">
                                <g>
                                    <g>
                                        <circle cx="3.261" cy="3.445" r="2.72" />
                                        <circle cx="15.296" cy="3.445" r="2.719" />
                                        <circle cx="27.333" cy="3.445" r="2.72" />
                                        <circle cx="39.369" cy="3.445" r="2.72" />
                                        <circle cx="51.405" cy="3.445" r="2.72" />
                                        <circle cx="63.441" cy="3.445" r="2.72" />
                                        <circle cx="75.479" cy="3.445" r="2.72" />
                                        <circle cx="87.514" cy="3.445" r="2.719" />
                                    </g>
                                    <g transform="translate(0 12)">
                                        <circle cx="3.261" cy="3.525" r="2.72" />
                                        <circle cx="15.296" cy="3.525" r="2.719" />
                                        <circle cx="27.333" cy="3.525" r="2.72" />
                                        <circle cx="39.369" cy="3.525" r="2.72" />
                                        <circle cx="51.405" cy="3.525" r="2.72" />
                                        <circle cx="63.441" cy="3.525" r="2.72" />
                                        <circle cx="75.479" cy="3.525" r="2.72" />
                                        <circle cx="87.514" cy="3.525" r="2.719" />
                                    </g>
                                    <g transform="translate(0 24)">
                                        <circle cx="3.261" cy="3.605" r="2.72" />
                                        <circle cx="15.296" cy="3.605" r="2.719" />
                                        <circle cx="27.333" cy="3.605" r="2.72" />
                                        <circle cx="39.369" cy="3.605" r="2.72" />
                                        <circle cx="51.405" cy="3.605" r="2.72" />
                                        <circle cx="63.441" cy="3.605" r="2.72" />
                                        <circle cx="75.479" cy="3.605" r="2.72" />
                                        <circle cx="87.514" cy="3.605" r="2.719" />
                                    </g>
                                    <g transform="translate(0 36)">
                                        <circle cx="3.261" cy="3.686" r="2.72" />
                                        <circle cx="15.296" cy="3.686" r="2.719" />
                                        <circle cx="27.333" cy="3.686" r="2.72" />
                                        <circle cx="39.369" cy="3.686" r="2.72" />
                                        <circle cx="51.405" cy="3.686" r="2.72" />
                                        <circle cx="63.441" cy="3.686" r="2.72" />
                                        <circle cx="75.479" cy="3.686" r="2.72" />
                                        <circle cx="87.514" cy="3.686" r="2.719" />
                                    </g>
                                    <g transform="translate(0 49)">
                                        <circle cx="3.261" cy="2.767" r="2.72" />
                                        <circle cx="15.296" cy="2.767" r="2.719" />
                                        <circle cx="27.333" cy="2.767" r="2.72" />
                                        <circle cx="39.369" cy="2.767" r="2.72" />
                                        <circle cx="51.405" cy="2.767" r="2.72" />
                                        <circle cx="63.441" cy="2.767" r="2.72" />
                                        <circle cx="75.479" cy="2.767" r="2.72" />
                                        <circle cx="87.514" cy="2.767" r="2.719" />
                                    </g>
                                    <g transform="translate(0 61)">
                                        <circle cx="3.261" cy="2.846" r="2.72" />
                                        <circle cx="15.296" cy="2.846" r="2.719" />
                                        <circle cx="27.333" cy="2.846" r="2.72" />
                                        <circle cx="39.369" cy="2.846" r="2.72" />
                                        <circle cx="51.405" cy="2.846" r="2.72" />
                                        <circle cx="63.441" cy="2.846" r="2.72" />
                                        <circle cx="75.479" cy="2.846" r="2.72" />
                                        <circle cx="87.514" cy="2.846" r="2.719" />
                                    </g>
                                    <g transform="translate(0 73)">
                                        <circle cx="3.261" cy="2.926" r="2.72" />
                                        <circle cx="15.296" cy="2.926" r="2.719" />
                                        <circle cx="27.333" cy="2.926" r="2.72" />
                                        <circle cx="39.369" cy="2.926" r="2.72" />
                                        <circle cx="51.405" cy="2.926" r="2.72" />
                                        <circle cx="63.441" cy="2.926" r="2.72" />
                                        <circle cx="75.479" cy="2.926" r="2.72" />
                                        <circle cx="87.514" cy="2.926" r="2.719" />
                                    </g>
                                    <g transform="translate(0 85)">
                                        <circle cx="3.261" cy="3.006" r="2.72" />
                                        <circle cx="15.296" cy="3.006" r="2.719" />
                                        <circle cx="27.333" cy="3.006" r="2.72" />
                                        <circle cx="39.369" cy="3.006" r="2.72" />
                                        <circle cx="51.405" cy="3.006" r="2.72" />
                                        <circle cx="63.441" cy="3.006" r="2.72" />
                                        <circle cx="75.479" cy="3.006" r="2.72" />
                                        <circle cx="87.514" cy="3.006" r="2.719" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </section>

</template>
<script setup>
</script>
<style scoped>
    .floating {
        animation-name: floating;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    @keyframes floating {
        0% {
            transform: translate(0, 0px);
        }

        50% {
            transform: translate(0, 8px);
        }

        100% {
            transform: translate(0, -0px);
        }
    }

    .floating-4 {
        animation-name: floating;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    @keyframes floating-4 {
        0% {
            transform: translate(0, 0px);
        }

        50% {
            transform: translate(0, 8px);
        }

        100% {
            transform: translate(0, -0px);
        }
    }

</style>