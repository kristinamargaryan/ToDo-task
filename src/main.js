import { createApp } from "vue";
import App from "./App.vue";
import { loadFonts } from "./plugins/webfontloader";
import "vuetify/styles";
import { createVuetify } from "vuetify";

const vuetify = createVuetify();

loadFonts();

createApp(App).use(vuetify).mount("#app").use(vuetify);
