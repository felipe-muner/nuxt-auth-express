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
    return state.sindecs;
  }
};

export const mutations = {
  save(state, payload) {
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
  toggleActivity(state, payload) {
    console.log("123");
    // for (let i = 0; i < state.sindecs.length; i++) {
    //   for (let j = 0; j < state.sindecs[i].link.length; j++) {
    //     if (state.sindecs[i].link[j].LinkID === payload.link.LinkID) {
    //       state.sindecs[i].link[j].Active = !state.sindecs[i].link[j].Active;
    //     }
    //   }
    // }
  },
  deleteSindec(state, payload) {
    state.sindecs = state.sindecs.filter(s => s.SindecID !== payload.SindecID);
  }
};

export const actions = {
  save({ commit }, payload) {
    console.log("save action" + payload);
    commit("save", payload);
  },
  toggleActivity({ commit }, payload) {
    commit("toggleActivity", payload);
  },
  deleteSindec({ commit }, payload) {
    commit("deleteSindec", payload);
  }
};
