import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebaseService from "@/service/firebaseService";

import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'
import '@/assets/styles/app.scss'

// import Vue plugin
import VueSvgInlinePlugin from "vue-svg-inline-plugin";
// import polyfills for IE if you want to support it
import "vue-svg-inline-plugin/src/polyfills";


const app = createApp(App)

app.config.globalProperties.$firebase = firebaseService;

// use Vue plugin without options
app.use(VueSvgInlinePlugin);

// use Vue plugin with options
app.use(VueSvgInlinePlugin, {
    attributes: {
        data: ["src"],
        remove: ["alt"]
    }
});

app.use(store)
    .use(router)
    .mount('#app')
