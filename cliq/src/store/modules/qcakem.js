// initial state
import axios from 'axios';
import clone from 'clone';

const state = {
  cakes: [],
  editedItem: {}
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
  },
  saveEditedItem: async ({ state, dispatch, commit}) => {
    try {
      if (state.editedItem.id) {
        console.log(1);
        const response = await axios.patch('http://localhost:3000/cake/' + state.editedItem.id, state.editedItem);
        console.log(response);
       } else {
        console.log(2);
        const response = await axios.post('http://localhost:3000/cake/', state.editedItem);
        console.log(response);
      }
      dispatch('getAll');
    }catch (e) {
      console.log(e);
    }
  }

};

// mutations
const mutations = {
  setCakes: (state, cakes) => {
    state.cakes = cakes;
  },
  setEditedItem(state,id) {
    if(id){
      state.editedItem = clone(state.cakes.find(item => item.id === id));
      }else{
      state.editedItem = {};
    }
  },
  cleanEditedItem(state){
    state.editedItem = {};
  },
  modifyEditedItem(state,param){
    state.editedItem[param.name] = param.value;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
