<template>
  <div>
    <div class="container">
      <btn-scroll />
      <Navbar :title="$static.metadata.siteName"/>
      <slot/>
    </div>
    <footer class="footer">
      <div class="container">
        <vs-row vs-w="12" class="margin-v-xl">
          <vs-col class="margin" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12" >
            <p class="text-center" style="color: #E64A19; transform: translateY(30px)">&copy; {{ new Date().getFullYear() }} Grammer blog | Powered by Gridsome</p>
          </vs-col>
        </vs-row>
      </div>
    </footer>
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
import BtnScrollTop from "@/components/button/BtnScrollTop.vue"
export default {
  components: {
    Navbar,
    "btn-scroll": BtnScrollTop
  },
}
</script>