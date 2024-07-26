<script setup>
import Navbar from '@/components/Navbar.vue'
import Home from '@/views/section/Home.vue'
import About from '@/views/section/About.vue'
import Services from '@/views/section/Services.vue'
import Contact from '@/views/section/Contact.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class=" bg-gray-50">
    <Home />
    <About />
    <Services />
    <Contact />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
</style>
