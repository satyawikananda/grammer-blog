// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BlogLayout from '~/layouts/BlogLayout.vue'
import Vuesax from 'vuesax'
import VueTypedJs from 'vue-typed-js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism.css'
import 'vuesax/dist/vuesax.css'
import '~/assets/scss/index.scss'
import 'github-markdown-css/github-markdown.css'

export default function (Vue, { router, head, isClient }) {
  Vue.use(Vuesax)
  Vue.use(VueTypedJs)
  Vue.component('Layout', DefaultLayout)
  Vue.component('BlogLayout', BlogLayout)
}
