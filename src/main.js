// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuesax from 'vuesax'
import VueTypedJs from 'vue-typed-js'
import 'vuesax/dist/vuesax.css'
import '~/assets/scss/index.scss'

export default function (Vue, { router, head, isClient }) {
  Vue.use(Vuesax)
  Vue.use(VueTypedJs)
  Vue.component('Layout', DefaultLayout)
}
