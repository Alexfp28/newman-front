import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as componentsLabs from 'vuetify/labs/components'
import * as directives from 'vuetify/directives'

//Material Design Icons
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    componentsLabs,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
})

app.use(router).use(vuetify)
app.mount('#app')