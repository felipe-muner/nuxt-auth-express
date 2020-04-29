export const state = () => ({
  states: []
});

export const mutations = {
  saveState(state, payload) {
    state.snack = payload;
  }
};

export const actions = {
  save({ commit }, payload) {
    commit("saveState", payload);
  }
};
