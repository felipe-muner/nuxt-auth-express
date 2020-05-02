export const state = () => ({
  SindecID: 4,
  LinkID: 0,
  sindecs: [
    {
      SindecID: 3,
      estado: { id: 2, sigla: "AL", nome: "Alagoas" },
      uf: { id: 2, nome: "SP" },
      link: [
        { LinkID: 1, Link: "link1", Active: true },
        { LinkID: 2, Link: "link 2", Active: false }
      ]
    },
    {
      SindecID: 4,
      estado: { id: 19, sigla: "RJ", nome: "Rio de Janeiro" },
      uf: { id: 1, nome: "RJ" },
      link: [{ LinkID: 3, Link: "rio", Active: true }]
    }
  ],
  estados: [
    { id: 1, sigla: "AC", nome: "Acre" },
    { id: 2, sigla: "AL", nome: "Alagoas" },
    { id: 3, sigla: "AP", nome: "Amapá" },
    { id: 4, sigla: "AM", nome: "Amazonas" },
    { id: 5, sigla: "BA", nome: "Bahia" },
    { id: 6, sigla: "CE", nome: "Ceará" },
    { id: 7, sigla: "DF", nome: "Distrito Federal" },
    { id: 8, sigla: "ES", nome: "Espírito Santo" },
    { id: 9, sigla: "GO", nome: "Goáis" },
    { id: 10, sigla: "MA", nome: "Maranhão" },
    { id: 11, sigla: "MT", nome: "Mato Grosso" },
    { id: 12, sigla: "MS", nome: "Mato Grosso do Sul" },
    { id: 13, sigla: "MG", nome: "Minas Gerais" },
    { id: 14, sigla: "PA", nome: "Pará" },
    { id: 15, sigla: "PB", nome: "Paraíba" },
    { id: 16, sigla: "PR", nome: "Paraná" },
    { id: 17, sigla: "PE", nome: "Pernambuco" },
    { id: 18, sigla: "PI", nome: "Piauí" },
    { id: 19, sigla: "RJ", nome: "Rio de Janeiro" },
    { id: 20, sigla: "RN", nome: "Rio Grande do Norte" },
    { id: 21, sigla: "RS", nome: "Rio Grande do Sul" },
    { id: 22, sigla: "RO", nome: "Rondônia" },
    { id: 23, sigla: "RR", nome: "Roraima" },
    { id: 24, sigla: "SC", nome: "Santa Catarina" },
    { id: 25, sigla: "SP", nome: "São Paulo" },
    { id: 26, sigla: "SE", nome: "Sergipe" },
    { id: 27, sigla: "TO", nome: "Tocantins" }
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
  },
  // getByIndex: state => index => state.sindecs[index]
  getById: state => id => {
    console.log(state);
    console.log("peguei getter");
    return state.sindecs.find(sindec => sindec.SindecID === parseInt(id));
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
    state.sindecs.forEach(sinde => {
      let link = sinde.link.find(s => s.LinkID === payload.link.LinkID);
      if (link) link.Active = !link.Active;
    });
  },
  deleteSindec(state, payload) {
    state.sindecs = state.sindecs.filter(s => s.SindecID !== payload.SindecID);
  },
  updateSindec(state, payload) {
    const foundIndex = state.sindecs.findIndex(
      x => x.SindecID === payload.SindecID
    );
    console.log(payload);
    state.sindecs.splice(foundIndex, 1, payload);
  },
  deleteLink(state, payload) {
    state.sindecs = state.sindecs.map(row => {
      row.link = row.link.filter(item => item.LinkID !== payload);
      return row;
    });
  }
};

export const actions = {
  save({ commit }, payload) {
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
  },
  deleteLink({ commit }, payload) {
    commit("deleteLink", payload);
  }
};
