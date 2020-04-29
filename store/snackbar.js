export const state = () => ({
  snackbarText: "",
  showing: false
});

export const mutations = {
  SET_SNACK_BAR(state, payload) {
    state.showing = payload.showing;
    state.snackbarText = payload.text;
  }
};

export const actions = {
  setSnackbar({ commit }, payload) {
    commit("SET_SNACK_BAR", payload);
  }
};
