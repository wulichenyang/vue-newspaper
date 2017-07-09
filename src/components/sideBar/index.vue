<template lang="html">
  <aside class="side-bar">
    <mu-drawer :open="openSideBar" :docked="docked" @close="toggleSideBar()">
      <mu-appbar :title="title" />
      <mu-list @itemClick="docked ? '' : toggleSideBar()">
        <mu-list-item :title="sideItem.name" v-if="sideBarList && sideBarList.length" v-for="sideItem in sideBarList" :key="sideItem.name" @click="openSideBar = false; linkToNews(sideItem.id); getTitle(sideItem.name)"/>
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
import { sideBar as actions } from 'store/mutation-type.js';
// import { fetchSideBar } from 'api/sideBar.js';

export default {
  name: 'side-bar',
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      openSideBar: state => state.sideBar.openSideBar,
      docked: state => state.sideBar.docked,
      sideBarList: state => state.sideBar.sideBarList,
      title: state => state.sideBar.currentTitle,
    })
  },
  methods: {
    // fetch sidebar info
    initSideBar() {
      this.$store.dispatch(actions.fetchSideBarList);
    },
    linkToNews(themeId) {
      this.$router.push(`/theme/${themeId}`);
    },
    ...mapMutations({
      toggleSideBar: sideBar.toggleSideBar,
      getTitle: sideBar.getTitle,
    }),
  },
  mounted() {
    this.initSideBar();
  },
} 
</script>


<style lang="scss">

</style>