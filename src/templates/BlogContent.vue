<template>
    <BlogLayout>
        <ClientOnly>
            <read-progress color="#e64a19" opacity="0.8" :shadow="true"></read-progress>
        </ClientOnly>
        <vs-card class="cardx padding-lg margin-v-lg">
            <vs-divider color="#e64a19">
                <h1>{{ $page.post.title }}</h1>
            </vs-divider>
            <vs-row vs-w="12">
                <vs-col vs-type="flex" vs-lg="12" vs-sm="12" vs-xs="12">
                    <!-- <vs-chip v-for="(data, i) in $page.post.tags" :key="i" class="margin-h-xs" color="#E64A19"># {{ data }}</vs-chip> -->
                    <PostTag :post="$page.post.tags" />
                </vs-col>
                <vs-col vs-type="flex" vs-lg="12" vs-sm="12" vs-xs="12" class="margin-v-sm">
                    <vs-row vs-w="12">
                        <vs-col vs-type="flex" vs-lg="1" vs-sm="6" vs-xs="2">
                            <vs-avatar size="large" src="https://avatars1.githubusercontent.com/u/33148052?v=4" text="Satya Wikananda" />
                        </vs-col>
                        <vs-col vs-type="flex" vs-lg="11" vs-sm="6" vs-xs="10" class="margin-v-sm padding-h-xs">
                            <vs-row vs-w="12">
                                <vs-col vs-type="flex" vs-lg="12" vs-sm="12" vs-xs="12">
                                    <span style="color: #e64a19;">{{ $page.post.author }}</span>
                                </vs-col>
                                <vs-col vs-type="flex" vs-lg="12" vs-sm="12" vs-xs="12">
                                    <span style="color: #e64a19;">{{ $page.post.timeToRead }} min read | {{ changeDate($page.post.date) }}</span>
                                </vs-col>
                            </vs-row>
                        </vs-col>
                    </vs-row>
                </vs-col>
            </vs-row>
            <!-- <p>{{ $page.post.author }}</p> -->
            <g-image :src="$page.post.cover_image" style="width: 100%;" class="margin-v-xl"/>
            <div v-html="$page.post.content" class="markdown-body"></div>
        </vs-card>
        <Disqus />
    </BlogLayout>
</template>
<page-query>
    query BlogContent ($path: String!) {
        post: blogContent(path: $path) {
            title
            content
            cover_image(fit: cover)
            tags {
                id
                title
                path
            }
            timeToRead
            date
            author
        }
    }
</page-query>
<script>
import { changeDate } from "@/mixins/changeDate.js"
import PostTag from "@/components/tags/PostTag.vue"
export default {
    mixins: [changeDate],
    metaInfo(){
        return {
            title: this.$page.post.title
        }
    },
    components: {
        PostTag,
        ReadProgress: () => import('vue-read-progress')
         .then((m) => m.default)
         .catch()
    }
}
</script>
