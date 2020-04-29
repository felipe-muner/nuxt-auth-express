export const state = () => ({
  snack: ""
});

export const mutations = {
  setSnack(state, snack) {
    state.snack = snack;
  }
};

export const actions = {
  setSnack({ commit }, payload) {
    commit("setSnack", payload);
  }
};
