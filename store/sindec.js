export const state = () => ({
  SindecID: 3,
  LinkID: 0,
  sindecs: [
    // {
    //   id: 1,
    //   estado: "Rio de Janeiro",
    //   uf: "RJ",
    //   link: ["12331212", "1233112"]
    // },
    // {
    //   id: 2,
    //   estado: "Bahia",
    //   uf: "BA",
    //   link: [1]
    // },
    // {
    //   id: 3,
    //   estado: "Minas Gerais",
    //   uf: "RJ",
    //   link: [4, 5]
    // }
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
    state.SindecID++;
    state.LinkID++;

    payload.SindecID = state.SindecID;
    payload.link = [
      {
        LinkID: state.LinkID,
        Link: payload.link
      }
    ];
    state.sindecs.push(payload);
  }
};

export const actions = {
  save({ commit }, payload) {
    console.log("save action" + payload);
    commit("SAVE", payload);
  }
};
