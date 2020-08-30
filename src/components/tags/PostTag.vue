<template>
    <div>
        <vs-chip v-for="(data, i) in post" :key="i" class="margin-h-xs" color="#E64A19"># {{ data }}</vs-chip>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Array
        }
    }
}
</script>