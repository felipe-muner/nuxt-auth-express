let selectedItem = { LinkID: 1 };

let sindecs = [
  {
    estado: { id: 2, siga: "AL", nome: "Alagoas" },
    uf: { id: 2, nome: "SP" },
    link: [
      { LinkID: 1, Link: "link1", Active: true },
      { LinkID: 2, Link: "link 2", Active: true }
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

// for (let i = 0; i < sindecs.length; i++) {
//   for (let j = 0; j < sindecs[i].link.length; j++) {
//     if (sindecs[i].link[j].LinkID === selectedItem.LinkID) {
//       sindecs[i].link[j].Active = !sindecs[i].link[j].Active;
//     }
//   }
// }

const toggleState = (sindecs, id) => {
  let link;
  sindecs.some(sinde => {
    link = sinde.link.find(s => s.LinkID === id);
    return Boolean(link);
  });
  if (link) link.Active = !link.Active;
};

toggleState(sindecs, selectedItem.LinkID);

console.log(JSON.stringify(sindecs, null, 2));

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
