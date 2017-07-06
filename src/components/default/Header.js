import template from 'template/default/header.html';
import $ from 'jQuery';
import Vue from 'vue';
import bus from 'components/vendor/bus.js';

export default {
  name: 'header',
  template,
  data() {
  	return {
      openSideBar: false,
      docked: true,
  	}
  },
  methods: {
    toggleSideBar(flag) {
      this.openSideBar = !this.openSideBar;
      this.docked = !flag;
      bus.$emit('toggleSideBar', this.openSideBar, this.docked);  
    }
  },
  components: {  }
};
