<template>
  <Layout>
    <vs-row vs-w="12" class="margin-v-xl">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="6" vs-sm="12" vs-xs="12" >
        <vs-row vs-w="12">
          <vs-col vs-lg="12" vs-sm="12" vs-xs="12">
            <vue-typed-js
              :strings="[
                'Selamat datang',
                'Welcome',
                'Yōkoso',
                'Benvenuta'
              ]"
              :loop="true"
              style="color: #e64a19;"
            >
            <h2><span class="typing"></span>readers</h2>
            </vue-typed-js>
            <p class="text-left margin-v-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum impedit amet sapiente quam eligendi itaque explicabo expedita, commodi dolores possimus minima? Dolore assumenda fuga a reprehenderit deleniti nam non temporibus.</p>
          </vs-col>
        </vs-row>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="12" vs-xs="12" >
        <g-image src="~/assets/images/banner.svg" width="450" class="margin-h-sm"/>
      </vs-col>
    </vs-row>
    <svgdots />
  </Layout>
</template>

<script>
import svgdots from '@/components/svg/dots.vue'
export default {
  components: {
    svgdots
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
