module.exports = function (doc, { lorem }) {
  const cell = doc.cell({
    backgroundColor: 0xEEEEEE,
    width: 200,
    padding: 10,
  });

  cell.text(lorem.long, { textAlign: "justify", fontSize: 15 });
};
