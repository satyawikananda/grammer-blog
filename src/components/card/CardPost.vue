<template>
    <vs-card class="cardx padding-sm margin card-content">
        <div slot="header">
          <h3 style="color: #E64A19">{{ title }}</h3>
        </div>
        <div slot="media">
          <vs-chip class="margin-xs">Hacktoberfest</vs-chip>
          <g-image :src="cover" class="padding-xs"/>
        </div>
        <div>
            <p>{{ desc }}</p>
        </div>
        <div slot="footer">
            <vs-row vs-w="12" class="margin-v-sm">
                <vs-col type="flex" vs-lg="3" vs-sm="2" vs-xs="2">
                    <vs-avatar size="40px" :src="avatarurl" :text="author" />
                </vs-col>
                <vs-col type="flex" vs-lg="7" vs-sm="7" vs-xs="7" class="margin-h-sm">
                    <h5 style="color:#e64a19">{{ author }}</h5>
                    <p class="margin-v-sm" style="font-size: .8rem">{{ timeToRead }} min read </p>
                </vs-col>
            </vs-row>
        </div>
    </vs-card>
</template>
<script>
export default {
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
        }
    }
}
</script>