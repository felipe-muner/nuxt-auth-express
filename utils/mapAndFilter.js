let selectedItem = { LinkID: 1 };

let sindecs = [
  {
    estado: { id: 2, siga: "AL", nome: "Alagoas" },
    uf: { id: 2, nome: "SP" },
    link: [
      { LinkID: 1, Link: "link1", Active: false },
      { LinkID: 2, Link: "link 2", Active: false }
    ],
    SindecID: 3
  },
  {
    estado: { id: 19, siga: "RJ", nome: "Rio de Janeiro" },
    uf: { id: 1, nome: "RJ" },
    link: [{ LinkID: 3, Link: "rio", Active: false }],
    SindecID: 4
  }
];

for (let i = 0; i < sindecs.length; i++) {
  for (let j = 0; j < sindecs[i].link.length; j++) {
    if (sindecs[i].link[j].LinkID === selectedItem.LinkID) {
      sindecs[i].link[j].Active = !sindecs[i].link[j].Active;
    }
  }
}

sindecs.forEach(s => {
  console.log(s);
});

// let a = sindecs.forEach(sindec =>
//   sindec.link.filter(link => {
//     return link.LinkID === selectedItem;
//   })
// );

// console.log(a);

// console.log(
//   sindecs.map(s => {
//     return s.link.map(link => {
//       link.filter(l => l.LinkID === meuLink.LinkID);
//       return link;
//     });
//   })
// );
