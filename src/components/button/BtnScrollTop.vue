<template>
    <transition name="back-to-top-fade">
        <vs-button v-show="fab" @click="backToTop" size="large" class="btn-right-bottom" radius color="#FF4E50" gradient-color-secondary="#F9D423" type="gradient" icon="arrow_upward"></vs-button>
    </transition>
</template>
<script>
import { scrollToTop } from "@/mixins/scrollToTop.js"
export default {
    mixins: [scrollToTop],
    data(){
      return{
        fab: false,
        visibleOffset: 200
      }
    }
}
</script>