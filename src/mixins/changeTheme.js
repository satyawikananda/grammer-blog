export const changeTheme = {
    data(){
        return {
          theme: ''
        }
    },
    methods: {
        updateTheme(theme){
            this.theme = theme
        }
    }
}