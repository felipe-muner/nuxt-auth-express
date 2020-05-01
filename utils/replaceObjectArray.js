let payload = {
  SindecID: 3,
  estado: { id: 2, siga: "ES", nome: "Espirito santo" },
  uf: { id: 2, nome: "SP" },
  link: [
    { LinkID: 1, Link: "link1", Active: true },
    { LinkID: 2, Link: "link 2", Active: false }
  ]
};

let sindecs = [
  {
    SindecID: 3,
    estado: { id: 2, siga: "AL", nome: "Alagoas" },
    uf: { id: 2, nome: "SP" },
    link: [
      { LinkID: 1, Link: "link1", Active: true },
      { LinkID: 2, Link: "link 2", Active: false }
    ]
  },
  {
    SindecID: 4,
    estado: { id: 19, siga: "RJ", nome: "Rio de Janeiro" },
    uf: { id: 1, nome: "RJ" },
    link: [{ LinkID: 3, Link: "rio", Active: true }]
  }
];

const foundIndex = sindecs.findIndex(x => x.SindecID === payload.SindecID);

sindecs[foundIndex] = payload;

console.log(sindecs);
