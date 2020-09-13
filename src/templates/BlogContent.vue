<template>
    <Layout>
        <ClientOnly>
            <read-progress color="#e64a19" opacity="0.8" :shadow="true"></read-progress>
        </ClientOnly>
        <vs-card class="cardx padding-lg">
            <vs-row>
                <vs-button color="#FF4E50" type="border" icon-pack="fa" icon="fa-arrow-left" class="margin-xs" @click="$router.go(-1)">Kembali</vs-button>
                <vs-col vs-lg="12" vs-sm="12" vs-xs="12">
                    <!-- <vs-divider color="#E64A19" class="text-center" style="font-size: 1.5rem;font-weight:bold">{{ $page.post.title }}</vs-divider> -->
                    <h1 class="text-center margin-v" style="font-size: 1.5rem;font-weight:bold;color:#E64A19;">{{ $page.post.title }}</h1>
                </vs-col>
                <vs-col vs-type="flex" vs-lg="12" vs-sm="12" vs-xs="12">
                    <PostTag :post="$page.post" />
                </vs-col>
                <vs-col vs-type="flex" vs-lg="12" vs-sm="12" vs-xs="12" class="margin-v-sm">
                    <vs-row vs-w="12">
                        <vs-col vs-type="flex" vs-lg="1" vs-sm="6" vs-xs="12">
                            <vs-avatar size="large" src="https://avatars1.githubusercontent.com/u/33148052?v=4" text="Satya Wikananda" />
                        </vs-col>
                        <vs-col vs-type="flex" vs-lg="11" vs-sm="6" vs-xs="12" class="margin-v-sm padding-h-xs">
                            <vs-row vs-w="12">
                                <vs-col vs-type="flex" vs-lg="12" vs-sm="12" vs-xs="12">
                                    <span style="color: #e64a19;">{{ $page.post.author }}</span>
                                </vs-col>
                                <vs-col vs-type="flex" vs-lg="12" vs-sm="12" vs-xs="12">
                                    <span style="color: #e64a19;">{{ $page.post.timeToRead }} min read | {{ $page.post.date }}</span>
                                </vs-col>
                            </vs-row>
                        </vs-col>
                    </vs-row>
                </vs-col>
            </vs-row>
            <!-- <p>{{ $page.post.author }}</p> -->
            <g-image :src="$page.post.cover_image" style="width: 100%;" class="margin-v-xl"/>
            <div v-html="$page.post.content" class="markdown-body"></div>
            <vs-row vs-w="12" class="margin-v">
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12" vs-sm="12">
                    <vs-divider color="#E64A19"><h3>Bagikan konten ini ke sosial media</h3></vs-divider>
                </vs-col>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12" vs-sm="12">
                    <ShareNetwork
                        network="twitter"
                        :url="url"
                        :title="$page.post.title"
                    >
                        <vs-button color="#FF4E50" type="border" icon-pack="fab" icon="fa-twitter" class="margin-xs" />
                    </ShareNetwork>
                    <ShareNetwork
                        network="facebook"
                        :url="url"
                        :title="$page.post.title"
                    >
                        <vs-button color="#FF4E50" type="border" icon-pack="fab" icon="fa-facebook" class="margin-xs" />
                    </ShareNetwork>
                    <ShareNetwork
                        network="telegram"
                        :url="url"
                        :title="$page.post.title"
                    >
                        <vs-button color="#FF4E50" type="border" icon-pack="fab" icon="fa-telegram" class="margin-xs" />
                    </ShareNetwork>
                    <ShareNetwork
                        network="line"
                        :url="url"
                        :title="$page.post.title"
                    >
                        <vs-button color="#FF4E50" type="border" icon-pack="fab" icon="fa-line" class="margin-xs" />
                    </ShareNetwork>
                    <ShareNetwork
                        network="whatsapp"
                        :url="url"
                        :title="$page.post.title"
                    >
                        <vs-button color="#FF4E50" type="border" icon-pack="fab" icon="fa-whatsapp" class="margin-xs" />
                    </ShareNetwork>
                </vs-col>
            </vs-row>
        </vs-card>
        <Disqus />
    </Layout>
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
            description
            timeToRead
            date(format: "DD-MM-YYYY")
            author
        }
    }
</page-query>
<script>
import PostTag from "@/components/tags/PostTag.vue"
export default {
    metaInfo(){
        return {
            title: this.$page.post.title,
            meta: [
                {
                    key: 'description',
                    name: 'description',
                    content: this.$page.post.description
                }
            ]
        }
    },
    data(){
        let result
        if(process.isClient) {
            const fullUrl = window.location.href
            const splitUrl = fullUrl.split('/')
            const indexOfUrl = splitUrl.indexOf('posts')
            result = splitUrl[indexOfUrl+1]
        }
        return {
            url: `https://grammer-blog.vercel.app/posts/${result}`
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
