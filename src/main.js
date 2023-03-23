import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/styles.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { createMetaPlugin } from 'vue-3-meta';

const app = createApp(App)
app.use(router)
// app.use(createMetaPlugin())

app.mount('#app')