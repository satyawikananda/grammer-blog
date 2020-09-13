// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuesax from 'vuesax'
import VueTypedJs from 'vue-typed-js'
import VueDisqus from 'vue-disqus'
import InfiniteLoading from 'vue-infinite-loading'
import VueSocialSharing from 'vue-social-sharing'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism.css'
import 'vuesax/dist/vuesax.css'
import '~/assets/scss/index.scss'
import 'github-markdown-css/github-markdown.css'

export default function (Vue, { router, head, isClient }) {
  Vue.use(Vuesax)
  Vue.use(VueTypedJs)
  Vue.use(VueDisqus, {
    shortname: 'grammer-blog'
  })
  Vue.use(InfiniteLoading, {
    props: {
      distance: 120
    },
    system: {
      throttleLimit: 50
    },
  })
  Vue.use(VueSocialSharing)
  Vue.component('Layout', DefaultLayout)
}
