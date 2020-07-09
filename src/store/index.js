import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import api from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    base: {
      token: '1',
      PHPSESSID: 'if9qbp0rcnp0gdep84pr7e6878',
      appid: '22222222222222222222222'
    }
  },
  modules: {},
  mutations: {

  },
  actions: {
    async postData ({
      commit,
      rootState
    }, {
      data
    }) {
      try {
        data = { ...data, ...this.state.base };
        let formData = new FormData();
        for (let key in data) {
          if (data[key]) {
            formData.append(key, data[key]);
          }
        }
        let res = await api.post('/api', formData);
        if (res.code === 0) {
          if (Array.isArray(res.data)) {
            return res.data; //  没有分页的数据
          } else if (res.data.total) {
            return {
              List: res.data.list,
              Paging: {
                Pages: res.data.last_page,
                TotalCount: res.data.total
              }
            };
          } else return res.data; // 获取全局没有分页的接口 往这里放
        } else {
          throw new Error(res.msg);
        }
      } catch (error) {
        throw error;
      }
    }
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
});
