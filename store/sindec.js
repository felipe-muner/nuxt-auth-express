export const state = () => ({
  SindecID: 4,
  LinkID: 0,
  sindecs: [
    {
      estado: { id: 2, siga: "AL", nome: "Alagoas" },
      uf: { id: 2, nome: "SP" },
      link: [
        { LinkID: 1, Link: "link1", Active: true },
        { LinkID: 2, Link: "link 2", Active: false }
      ],
      SindecID: 3
    },
    {
      estado: { id: 19, siga: "RJ", nome: "Rio de Janeiro" },
      uf: { id: 1, nome: "RJ" },
      link: [{ LinkID: 3, Link: "rio", Active: true }],
      SindecID: 4
    }
  ]
});

export const getters = {
  sindecsFormatted(state) {
    console.log("getters sindecsFormatted");
    return state.sindecs;
  }
};

export const mutations = {
  SAVE(state, payload) {
    payload.SindecID = ++state.SindecID;
    payload.link = [
      {
        LinkID: ++state.LinkID,
        Link: payload.link,
        Active: true
      }
    ];
    state.sindecs.push(payload);
  },
  TOGGLE_ACTIVITY(state, payload) {
    state;
  }
};

export const actions = {
  save({ commit }, payload) {
    console.log("save action" + payload);
    commit("SAVE", payload);
  },
  toggleActivity({ commit }, payload) {
    console.log("toggleActivity" + payload);
    commit("TOGGLE_ACTIVITY", payload);
  }
};
