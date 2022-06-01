// initial state
import axios from 'axios';

const state = {
  cakes: []
};

// getters
const getters = {
};

// actions
const actions = {
  getAll: async ({ commit }) => {
    try {
      const response = await axios.get('http://localhost:3000/cake/');
      commit('setCakes', response.data);
    } catch (e) {
      console.log(e);
    }
  }

};

// mutations
const mutations = {
  setCakes: (state, cakes) => {
    state.cakes = cakes;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
