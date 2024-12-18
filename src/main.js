import './assets/main.css';

import { createApp } from 'vue';
import global from './assets/js/global';
import App from './App.vue';
import router from './router';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp(App)

app.config.globalProperties.$global = global;

app.use(BootstrapVue3)
app.use(router)

app.mount('#app')
