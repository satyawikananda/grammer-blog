<template>
    <vs-avatar size="40px" :src="avatarurl" :text="author" />
</template>

<script>
export default {
    props: {
        avatarurl: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            avatarurl: ''
        }
    },
    methods: {
        async fetchData(){
            await fetch(`https://api.github.com/users/${this.avatarurl}`)
              .then((response) => {
                return response.json()
              })
              .then((data) => {
                console.log(data)
              })
        },
    },
    mounted(){
        this.fetchData()
    }
}
</script>