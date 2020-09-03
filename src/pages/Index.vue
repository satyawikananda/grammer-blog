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
            <!-- <vs-button color="#FF4E50" gradient-color-secondary="#F9D423" type="gradient" icon="share">Clone repo aku</vs-button> -->
          </vs-col>
        </vs-row>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="12" vs-xs="12" >
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
        <div v-for="(data,i) in $page.last.edges" :key="i">
          <CardLatest :title="data.node.title" :desc="limitString(data.node.description)" :cover="data.node.cover_image" :author="data.node.author" :timeToRead="data.node.timeToRead" avatarurl="https://avatars1.githubusercontent.com/u/33148052?v=4" :path="data.node.path" :date="changeDate(data.node.date)" :tags="data.node.tags"/>
        </div>
      </vs-col>
    </vs-row>
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12" >
        <vs-divider color="#e64a19">
          <h2 class="padding-xs">Semua postingan</h2>
        </vs-divider>
      </vs-col>
      <transition-group name="fade">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="12" vs-xs="12" v-for="{ node } of loadedPosts" :key="node.id">
          <g-link :to="node.path" class="margin" style="height:100%;color: #37474f;">
            <CardPost :title="node.title" :desc="limitString(node.description)" :cover="node.cover_image" :author="node.author" :timeToRead="node.timeToRead" avatarurl="https://avatars1.githubusercontent.com/u/33148052?v=4" :date="changeDate(node.date)" :tags="node.tags" />
          </g-link>
        </vs-col>
      </transition-group>
      <ClientOnly>
        <infinite-loading @infinite="infiniteHandler" spinner="default">
          <div slot="no-more">
          </div>
          <div slot="no-results">
          </div>
        </infinite-loading>
      </ClientOnly>
      <br>
    </vs-row>
    <vs-row vs-justify="center">
      <svgdots style="transform: translateY(-80px)"/>
    </vs-row>
  </Layout>
</template>

<page-query>
  query BlogContent($page: Int) {
    posts: allBlogContent(perPage: 6, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges{
        node{
          id
          title
          cover_image(width: 600, height: 300)
          description
          username_github
          author
          timeToRead
          date
          path
          tags {
            id
            title
            path
          }
        }
      }
    }
    last: allBlogContent(limit: 1,order: ASC) {
      edges {
        node {
          title
          cover_image(width: 600, height: 300)
          description
          username_github
          author
          timeToRead
          date
          path
          tags {
            id
            title
            path
          }
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
// import { Pager } from "gridsome"
import { changeDate } from "@/mixins/changeDate.js"
import { limitString } from "@/mixins/limitString.js"
export default {
  mixins: [changeDate, limitString],
  components: {
    svgdots,
    CardLatest,
    CardPost,
    Lottie,
    // Pager
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
      loadedPosts: [],
      currentPage: 1
    }
  },
  created(){
    this.loadedPosts.push(...this.$page.posts.edges)
  },
  methods: {
    async infiniteHandler($state) {
			if (this.currentPage + 1 > this.$page.posts.pageInfo.totalPages) {
				$state.complete()
			} else {
				const { data } = await this.$fetch(`/${this.currentPage + 1}`)
				if (data.posts.edges.length) {
					this.currentPage = data.posts.pageInfo.currentPage
					this.loadedPosts.push(...data.posts.edges)
					$state.loaded()
				} else {
					$state.complete()
				}
			}
		}
  },
}
</script>