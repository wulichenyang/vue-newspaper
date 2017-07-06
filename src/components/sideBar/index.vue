<template lang="html">
  <section class="side-bar">
    <mu-raised-button label="toggle drawer" @click="toggleSideBar()"/>
    <mu-drawer right :open="openSideBar" @close="toggleSideBar()">
      <mu-appbar title="Muse UI"/>
      <mu-list>
        <mu-list-item title="Menu Item 1"/>
        <mu-list-item title="Menu Item 2"/>
        <mu-list-item title="Menu Item 3"/>
        <mu-list-item @click.native="openSideBar = false" title="Close"/>
      </mu-list>
    </mu-drawer>
  </section>
</template>

<script>

export default {
  name: 'side-bar',
  data() {
    return {
      openSideBar: false
    }
  },
  methods: {
    toggleSideBar () {
      this.openSideBar = !this.openSideBar
    }
  }
}
</script>


<style lang="scss">

</style>