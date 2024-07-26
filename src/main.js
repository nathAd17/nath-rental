import './assets/main.css'

import App from './App.vue'
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Lara from "@/presets/lara"; //import preset

const app = createApp(App);
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara, //apply preset
});

app.mount("#app"); 
