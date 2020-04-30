export const state = () => ({
  sindecs: [
    {
      id: 1,
      estado: "Rio de Janeiro",
      uf: "RJ",
      link: ["12331212", "1233112"]
    },
    {
      id: 2,
      estado: "Bahia",
      uf: "BA",
      link: [1]
    },
    {
      id: 3,
      estado: "Minas Gerais",
      uf: "RJ",
      link: [4, 5]
    }
  ]
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
