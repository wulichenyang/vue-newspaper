<template lang="html">
  <aside class="side-bar">
    <mu-drawer :open="openSideBar" :docked="docked" @close="toggleSideBar()">
      <mu-appbar title="Muse UI"/>
      <mu-list @itemClick="docked ? '' : toggleSideBar()">
        <mu-list-item :title="sideItem.name" v-for="sideItem in sideBarList" :key="sideItem.name" @click="openSideBar = false; linkToNews(sideItem.id)" />
        <mu-list-item :v-if="docked" @click.native="openSideBar = false" title="Close"/>
      </mu-list>
    </mu-drawer>
  </aside>
</template>

<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
import { sideBar } from 'store/mutation-type.js';
import bus from 'components/vendor/bus.js';
import { fetchSideBar } from 'api/sideBar.js';

export default {
  name: 'side-bar',
  data() {
    return {
      sideBarList: [],
    }
  },
  methods: {
    // fetch sidebar info
    initSideBar() {
      fetchSideBar().then(res => {
        this.sideBarList = res.others;
      })
    },
    linkToNews(themeId) {
      this.$router.push(`/theme/${themeId}`);
    },
    ...mapMutations({
      toggleSideBar: sideBar.toggleSideBar,
    }),
  },
  computed: {
    ...mapState({
      openSideBar: state => state.sideBar.openSideBar,
      docked: state => state.sideBar.docked,
    })
  },
  created() {
    bus.$on("toggleSideBar", (isOpen, docked) => {
      this.openSideBar = isOpen;
      this.docked = docked;
    }); 
  },
  mounted() {
    this.initSideBar();
  },
} 
</script>


<style lang="scss">

</style>