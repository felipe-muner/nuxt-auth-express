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
  ],
  estados: [
    { id: 1, siga: "AC", nome: "Acre" },
    { id: 2, siga: "AL", nome: "Alagoas" },
    { id: 3, siga: "AP", nome: "Amapá" },
    { id: 4, siga: "AM", nome: "Amazonas" },
    { id: 5, siga: "BA", nome: "Bahia" },
    { id: 6, siga: "CE", nome: "Ceará" },
    { id: 7, siga: "DF", nome: "Distrito Federal" },
    { id: 8, siga: "ES", nome: "Espírito Santo" },
    { id: 9, siga: "GO", nome: "Goáis" },
    { id: 10, siga: "MA", nome: "Maranhão" },
    { id: 11, siga: "MT", nome: "Mato Grosso" },
    { id: 12, siga: "MS", nome: "Mato Grosso do Sul" },
    { id: 13, siga: "MG", nome: "Minas Gerais" },
    { id: 14, siga: "PA", nome: "Pará" },
    { id: 15, siga: "PB", nome: "Paraíba" },
    { id: 16, siga: "PR", nome: "Paraná" },
    { id: 17, siga: "PE", nome: "Pernambuco" },
    { id: 18, siga: "PI", nome: "Piauí" },
    { id: 19, siga: "RJ", nome: "Rio de Janeiro" },
    { id: 20, siga: "RN", nome: "Rio Grande do Norte" },
    { id: 21, siga: "RS", nome: "Rio Grande do Sul" },
    { id: 22, siga: "RO", nome: "Rondônia" },
    { id: 23, siga: "RR", nome: "Roraima" },
    { id: 24, siga: "SC", nome: "Santa Catarina" },
    { id: 25, siga: "SP", nome: "São Paulo" },
    { id: 26, siga: "SE", nome: "Sergipe" },
    { id: 27, siga: "TO", nome: "Tocantins" }
  ],
  ufs: [
    { id: 1, nome: "RJ" },
    { id: 2, nome: "SP" },
    { id: 3, nome: "MG" },
    { id: 4, nome: "ES" }
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
  },
  updateSindec(state, payload) {
    // var foundIndex = items.findIndex(x => x.id == item.id);
    // items[foundIndex] = item;
    console.log(payload);
    console.log("editSindec");
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
  },
  updateSindec({ commit }, payload) {
    commit("updateSindec", payload);
  }
};
