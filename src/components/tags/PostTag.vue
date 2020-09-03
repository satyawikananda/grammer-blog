<template>
    <div>
        <g-link v-for="tag in post.tags" :key="tag.id" :to="tag.path">
            <vs-chip class="margin-h-xs" color="#E64A19"># {{ tag.title }}</vs-chip>
        </g-link>
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