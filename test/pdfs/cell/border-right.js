module.exports = function (doc) {
  doc.text("before");

  doc.cell("Cell 1", {
    fontSize: 15,
    width: 256,
    padding: 10,
    borderRightWidth: 5,
  });

  doc.text("in between");

  doc.cell("Cell 2", {
    fontSize: 15,
    width: 256,
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: 0x2980B9,
  });

  doc.text("after");
};
