<template>
    <header class="header">
      <vs-navbar class="nabarx" style="box-shadow: 0 0 0 0">
        <div slot="title">
          <vs-navbar-title>
            <g-link to="/" :style="{color: '#e64a19'}">{{ title }}</g-link>
          </vs-navbar-title>
        </div>
        <vs-navbar-item index="0">
          <g-link to="/" class="header__nav-link" :style="{color: '#e64a19'}">Beranda</g-link>
        </vs-navbar-item>
        <vs-navbar-item index="1">
          <g-link to="/about" class="header__nav-link" :style="{color: '#e64a19'}">Tentang</g-link>
        </vs-navbar-item>
      </vs-navbar>
    </header>
</template>

<script>
export default {
    props: ['title']
}
</script>