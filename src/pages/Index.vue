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
            <h1><span class="typing"></span>readers</h1>
            </vue-typed-js>
            <h4 class="text-left margin-v-lg" style="color: #e64a19;" v-html="description"></h4>
            <vs-button color="#FF4E50" gradient-color-secondary="#F9D423" type="gradient" icon="share">Clone repo aku</vs-button>
          </vs-col>
        </vs-row>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="12" vs-xs="12" >
        <!-- <g-image src="~/assets/images/banner.svg" width="450" class="margin-h-sm"/> -->
        <lottie :options="defaultOptions" :height="400" :width="400" />
         <svgdots style="transform: translate(20px,100px)"/>
      </vs-col>
    </vs-row>
    <svgdots />
    <vs-row vs-w="12" class="margin-v-xxl">
      <vs-col vs-type="flex" style="flex-direction:column" vs-justify="flex-start" vs-align="flex-start" vs-lg="12" vs-sm="12" vs-xs="12">
        <h2 class="title-latest padding-h-sm">Postingan terakhir</h2>
      </vs-col>
      <vs-col vs-type="flex" class="margin-v-xl" vs-justify="flex-start" vs-align="flex-start" vs-lg="9" vs-sm="12" vs-xs="12">
        <CardLatest />
      </vs-col>
    </vs-row>
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12" >
        <vs-divider color="#e64a19">
          <h2 class="padding-xs">Semua postingan</h2>
        </vs-divider>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="12" vs-xs="12" v-for="(post,i) in $page.posts.edges" :key="i">
        <g-link :to="post.node.path" class="margin" style="height:100%;color: #37474f;">
          <CardPost :title="post.node.title" :desc="post.node.description" :cover="post.node.cover_image" :author="post.node.author" :timeToRead="post.node.timeToRead" avatarurl="https://avatars1.githubusercontent.com/u/33148052?v=4" />
        </g-link>
      </vs-col>
    </vs-row>
    <vs-row vs-w="12" class="margin-v-xl">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="6" >
        <vs-button radius color="#e64a19" type="border" icon="chevron_left"></vs-button>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="6" >
        <vs-button radius color="#e64a19" type="border" icon="chevron_right"></vs-button>
      </vs-col>
    </vs-row>

    <vs-row vs-justify="center">
      <svgdots style="transform: translateY(-80px)"/>
    </vs-row>
  </Layout>
</template>

<page-query>
  query BlogContent {
    posts: allBlogContent(perPage: 6){
      edges{
        node{
          title
          cover_image
          description
          username_github
          author
          timeToRead
          date
          path
        }
      }
    }
  }
</page-query>

<script>
import svgdots from '@/components/svg/dots.vue'
import CardLatest from '@/components/card/CardLatest.vue'
import CardPost from '@/components/card/CardPost.vue'
import Lottie from 'vue-lottie'
import animationData from '@/assets/lottie-json/banner.json'
export default {
  components: {
    svgdots,
    CardLatest,
    CardPost,
    Lottie
  },
  metaInfo: {
    title: 'Home'
  },
  data(){
    return {
      description: 'Blog yang berisikan tentang dunia pemrograman dan hal random lainnya, dikembangkan oleh <a href="https://github.com/satyawikananda" class="link-hero" target="_blank">Satya Wikananda</a> 😀',
      defaultOptions: { 
        animationData: animationData, 
        loop: true 
      },
      data:[],
      avatar: []
    }
  },
  methods: {
    fetchData(){
      const data = this.$page.posts.edges
      data.forEach((res) => {
        this.data.push(res.node.username_github)
        this.data.forEach(async (result) => {
          await fetch(`https://api.github.com/users/${result}`)
           .then((response) => {
              return response.json()
           })
           .then((data) => {
             this.avatar.push(data.avatar_url)
           })
        })
      })
    }
  },
  mounted(){
    this.fetchData()
  }
}
</script>