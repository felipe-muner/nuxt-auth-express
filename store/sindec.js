export const state = () => ({
  SindecID: 4,
  LinkID: 0,
  sindecs: [
    {
      estado: { id: 2, siga: "AL", nome: "Alagoas" },
      uf: { id: 2, nome: "SP" },
      link: [{ LinkID: 1, Link: "qwe" }],
      SindecID: 3
    },
    {
      estado: { id: 19, siga: "RJ", nome: "Rio de Janeiro" },
      uf: { id: 1, nome: "RJ" },
      link: [{ LinkID: 2, Link: "rio" }],
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
        Link: payload.link
      }
    ];
    // const newSindec = { text: payload.link[0].Link, value: payload };
    state.sindecs.push(payload);
  }
};

export const actions = {
  save({ commit }, payload) {
    console.log("save action" + payload);
    commit("SAVE", payload);
  }
};
