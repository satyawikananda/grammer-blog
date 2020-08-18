<template>
  <div class="layout">
    <Navbar :title="$static.metadata.siteName"/>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from "@/components/master/Navbar.vue"
export default {
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
body {
  font-family: 'Montserrat', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 920px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>