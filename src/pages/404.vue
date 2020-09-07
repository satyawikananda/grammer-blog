<template>
    <Layout>
        <vs-row vs-w="12">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="7" vs-xs="12" vs-sm="12">
                <lottie :options="defaultOptions" :height="420" :width="420" />
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="5" vs-xs="12" vs-sm="12">
                <h1 style="color: #e64a19;">404 Halaman tidak ditemukan!!</h1>
            </vs-col>
        </vs-row>
    </Layout>
</template>
<script>
import Lottie from 'vue-lottie'
import animationData from '@/assets/lottie-json/404.json'
export default {
  components: {
    Lottie
  },
  metaInfo: {
    title: "404 Not found"
  },
  data(){
    return {
        defaultOptions: { 
            animationData: animationData, 
            loop: true 
        },
    }
  }
}
</script>