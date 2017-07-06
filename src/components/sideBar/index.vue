<template lang="html">
  <aside class="side-bar">
    <mu-drawer right :open="openSideBar" :docked="docked" @close="toggleSideBar()">
      <mu-appbar title="Muse UI"/>
      <mu-list @itemClick="docked ? '' : toggleSideBar()">
        <mu-list-item title="Menu Item 1"/>
        <mu-list-item title="Menu Item 2"/>
        <mu-list-item title="Menu Item 3"/>
        <mu-list-item v-if="docked" @click.native="openSideBar = false" title="Close"/>
      </mu-list>
    </mu-drawer>
  </aside>
</template>

<script>
import bus from 'components/vendor/bus.js';

export default {
  name: 'side-bar',
  data() {
    return {
      openSideBar: false,
      docked: true,
    }
  },
  methods: {
    toggleSideBar (flag) {
        this.openSideBar = !this.openSideBar;
        this.docked = !flag;
    }
  },
  created() {
    bus.$on("toggleSideBar", (isOpen, docked) => {
      this.openSideBar = isOpen;
      this.docked = docked;
    }); 
  }
} 
</script>


<style lang="scss">

</style>