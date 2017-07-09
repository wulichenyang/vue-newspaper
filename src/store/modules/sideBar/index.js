import Vue from 'vue';
import window from 'window';

import { sideBar } from 'store/mutation-type.js';
import getters from 'store/modules/sideBar/getters.js';
import { fetchSideBar } from 'api/sideBar.js';

const state = {
  openSideBar: false,
  docked: true,
  currentTitle: '晨阳日报',
  sideBarList: [],
};

const actions = {
  [sideBar.fetchSideBarList]: ({commit}) => new Promise(f => {
    commit(sideBar.fetchSideBarList);
    f();
  }) 
};
const mutations = {
  [sideBar.toggleSideBar]: (state, flag) => {
    state.openSideBar = !state.openSideBar;
    state.docked = !flag;
  },
  [sideBar.fetchSideBarList]: (state) => {
    state.sideBarList = fetchSideBar().then(res => {
      state.sideBarList = res.others;
      state.currentTitle = res.others[0].name;
    })
  },
  [sideBar.getTitle]: (state, title) => {
    state.currentTitle = title;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
