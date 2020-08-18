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