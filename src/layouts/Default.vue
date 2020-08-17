<template>
  <div class="layout">
    <!-- <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header> -->
    <header class="header">
      <vs-navbar v-model="activeItem" type="gradient" class="nabarx" style="box-shadow: 0 0 0 0">
        <div slot="title">
          <vs-navbar-title>
            {{ $static.metadata.siteName }}
          </vs-navbar-title>
        </div>

        <vs-navbar-item index="0">
          <g-link to="/">Home</g-link>
        </vs-navbar-item>
        <vs-navbar-item index="1">
          <g-link to="/about">About</g-link>
        </vs-navbar-item>
      </vs-navbar>
    </header>
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
export default {
  data(){
    return {
      activeItem: 1
    }
  }
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>