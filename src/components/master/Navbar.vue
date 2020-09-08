<template>
    <header class="margin-v">
      <vs-navbar class="nabarx" style="box-shadow: 0 0 0 0">
        <div slot="title">
          <vs-navbar-title :style="{color: '#e64a19'}">{{ title }}</vs-navbar-title>
        </div>
        <vs-navbar-item>
          <g-link to="/" class="header__nav-link" :style="{color: '#e64a19', fontSize: '1rem'}">Beranda</g-link>
        </vs-navbar-item>
        <vs-navbar-item>
          <g-link to="/about" class="header__nav-link" :style="{color: '#e64a19', fontSize: '1rem'}">Tentang</g-link>
        </vs-navbar-item>
        <slot />
      </vs-navbar>
    </header>
</template>

<script>
export default {
  props: ['title']
}
</script>