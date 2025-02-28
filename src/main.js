import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import {VCalendar} from "vuetify/labs/components";
import * as directives from 'vuetify/directives'

//Material Design Icons
import '@mdi/font/css/materialdesignicons.css'
import {
    VBtn,
    VCard, VCardActions, VCardText,
    VCarousel, VCarouselItem,
    VCheckbox,
    VCol,
    VContainer,
    VForm, VIcon,
    VImg, VList, VListItem, VListItemTitle, VMenu,
    VRow, VSheet, VSpacer, VTab, VTabs, VTabsWindow, VTabsWindowItem,
    VTextarea,
    VTextField, VToolbar, VToolbarTitle
} from "vuetify/components";

const vuetify = createVuetify({
    components : {
        VCalendar,
        VBtn,
        VCheckbox,
        VRow,
        VCol,
        VForm,
        VContainer,
        VCard,
        VTextarea,
        VTextField,
        VImg,
        VCarousel,
        VCarouselItem,
        VCardText,
        VIcon,
        VTab,
        VTabs,
        VTabsWindow,
        VTabsWindowItem,
        VSheet,
        VToolbarTitle,
        VSpacer,
        VListItem,
        VListItemTitle,
        VList,
        VMenu,
        VToolbar,
        VCardActions
    },
    directives,
    icons: {
        defaultSet: 'mdi',
    },
})

app.use(router).use(vuetify)
app.mount('#app')