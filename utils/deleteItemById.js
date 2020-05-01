let selectedItem = { LinkID: 3 };

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

function removeLinkObj(sindecs, selectedItem) {
  return sindecs.map(row => {
    row.link = row.link.filter(item => item.LinkID !== selectedItem.LinkID);

    return row;
  });
}

console.log(removeLinkObj(sindecs, selectedItem));

// let newSindec = sindecs.reduce((accumulator, currentValue) => {
//   currentValue.link.
//   // new updatedSindec = currentValue.filter
//   accumulator.push(currentValue);
//   return accumulator;
// }, []);

// console.log(newSindec);
