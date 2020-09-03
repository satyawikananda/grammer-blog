<template>
        <vs-card class="cardx padding-xs margin-xs">
            <div slot="header">
            <h3 style="color: #E64A19">{{ title }}</h3>
            </div>
            <div slot="media">
                <vs-row vs-w="12" class="margin-v-sm padding-xs">
                    <vs-col vs-justify="flex-start" vs-align="flex-start" vs-lg="2" vs-sm="2" vs-xs="2">
                        <vs-avatar size="40px" :src="avatarurl" :text="author" />
                    </vs-col>
                    <vs-col vs-lg="7" vs-sm="7" vs-xs="7" class="margin-h-sm">
                        <h5 style="color:#e64a19">{{ author }}</h5>
                        <p class="margin-v-sm" style="font-size: .8rem">{{ timeToRead }} min read | {{ date }}</p>
                    </vs-col>
                </vs-row>
                <PostTag :post="tags" />
                <g-image :src="cover" class="padding-xs"/>
            </div>
            <div>
                <p>{{ desc }}</p>
            </div>
        </vs-card>
</template>
<script>
import PostTag from "@/components/tags/PostTag.vue"
export default {
    components: {
        PostTag
    },
    props: {
        title: {
            type: String,
            required: true
        },
        cover: {
            type: Object
        },
        desc: {
            type: String,
            required: true
        },
        timeToRead: {
            type: Number,
            required: true
        },
        avatarurl: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        tags: {
            type: Object,
            default: () => {}
        }
    }
}
</script>