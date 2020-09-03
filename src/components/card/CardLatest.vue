<template>
    <vs-card class="card-content">
        <vs-row vs-w="12">
            <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="12" vs-xs="12">
                <vs-images hover="blur">
                    <g-image :src="cover" class="margin-v-sm" style="width:100%; object-fit:cover;" />
                </vs-images>
            </vs-col>
            <vs-col style="flex-direction:column" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="12" vs-xs="12">
                <vs-divider color="#e64a19">
                    <h2 class="padding-xs">{{ title }}</h2>
                </vs-divider>
                <PostTag :post="tags" />
                <p class="margin-v">{{ desc }}</p>
                <vs-row vs-w="12" class="margin-v-sm">
                    <vs-col type="flex" vs-lg="2" vs-sm="2" vs-xs="2">
                        <vs-avatar size="40px" :src="avatarurl" :text="author" />
                    </vs-col>
                    <vs-col type="flex" vs-lg="7" vs-sm="7" vs-xs="7">
                        <h4 style="color:#e64a19">{{ author }}</h4>
                        <p class="margin-v-sm">{{ timeToRead }} min read | {{ date }}</p>
                    </vs-col>
                </vs-row>
            </vs-col>
        </vs-row>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button :to="path" color="#e64a19" icon="visibility" class="margin-sm">Lihat</vs-button>
          </vs-row>
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
        path: {
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