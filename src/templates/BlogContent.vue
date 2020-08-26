<template>
    <BlogLayout>
        <vs-card class="cardx padding-lg margin-v-lg">
            <vs-divider color="#e64a19">
                <h1>{{ $page.post.title }}</h1>
            </vs-divider>
            <vs-chip v-for="(data, i) in $page.post.tags" :key="i" class="margin-h-xs">{{ data }}</vs-chip>
            <!-- <p>{{ $page.post.author }}</p> -->
            <g-image :src="$page.post.cover_image" style="width: 100%;" class="margin-v-xl"/>
            <div v-html="$page.post.content" class="margin-v-xs markdown-body"></div>
        </vs-card>
    </BlogLayout>
</template>
<page-query>
    query BlogContent ($path: String!) {
        post: blogContent(path: $path) {
            title
            content
            cover_image(fit: cover width: 800 height: 400)
            tags
            author
        }
    }
</page-query>
<script>
  export default {
      metaInfo(){
        return {
            title: this.$page.post.title
        }
      }
  }
</script>
