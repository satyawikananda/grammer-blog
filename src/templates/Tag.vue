<template>
    <Layout>
        <vs-row vs-w="12">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12" >
                <vs-divider color="#e64a19">
                    <h1 class="padding-xs">Tag #{{ $page.tag.title }}</h1>
                </vs-divider>
            </vs-col>
        </vs-row>
        <vs-row vs-w="12">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="12" vs-xs="12" v-for="(data,i) in $page.tag.belongsTo.edges" :key="i">
                <g-link :to="data.node.path" class="margin" style="height:100%;color: #37474f;">
                    <CardPost :title="data.node.title" :desc="limitString(data.node.description)" :cover="data.node.cover_image" :author="data.node.author" :timeToRead="data.node.timeToRead" avatarurl="https://avatars1.githubusercontent.com/u/33148052?v=4" :date="data.node.date" :tags="data.node" />
                </g-link>
            </vs-col>
        </vs-row>
        <vs-row vs-justify="center">
            <!-- <svgdots style="transform: translateY(-80px)"/> -->
        </vs-row>
    </Layout>
</template>

<page-query>
    query Tag($id: ID!) {
      tag: tag(id: $id) {
        title
        belongsTo {
          edges {
            node {
              ... on BlogContent {
                id
                title
                cover_image(width: 600, height: 300)
                description
                username_github
                author
                timeToRead
                date(format: "DD-MM-YYYY")
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
      }
    }
</page-query>

<script>
import svgdots from '@/components/svg/dots.vue'
import CardPost from '@/components/card/CardPost.vue'
import { limitString } from "@/mixins/limitString.js"
export default {
    mixins: [limitString],
    components: {
      CardPost,
      svgdots
    },
    metaInfo(){
        return {
          title: `#${this.$page.tag.title}`,
          meta: [
            {
              key: 'description',
              name: 'description',
              content: `Grammer blog | Tag ${this.$page.tag.title}`
            }
          ]
        }
    },
}
</script>