export const scrollToTop = {
    mounted(){
        window.smoothScroll = () => {
          const currentScroll = document.documentElement.scrollTop || document.body.scrollTop
          if(currentScroll > 0) {
            window.requestAnimationFrame(window.smoothScroll)
            window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
          }
        }
        window.addEventListener('scroll', this.catchScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.catchScroll)
    },  
    methods: {
        catchScroll(){
            this.fab = (window.pageYOffset > this.visibleOffset)
        },
        backToTop(){
            window.smoothScroll()
            this.$emit('scrolled')
        }
    }
}