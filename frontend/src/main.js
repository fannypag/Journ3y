import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseCard from './components/UI/BaseCard';
import BaseButton from './components/UI/BaseButton';

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsCallout from '@/components/DocsCallout'
import DocsExample from '@/components/DocsExample'


const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsCallout', DocsCallout)
app.component('DocsExample', DocsExample)
// register base card component
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app')
