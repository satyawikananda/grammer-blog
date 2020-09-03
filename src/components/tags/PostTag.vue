<template>
    <div>
        <vs-chip v-for="tag in post.tags" :key="tag.id" class="margin-h-xs" color="#E64A19"># {{ tag.title }}</vs-chip>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            default: () => {}
        }
    }
}
</script>