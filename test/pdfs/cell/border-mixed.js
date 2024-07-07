module.exports = function (doc) {
  doc.text("before");

  doc.cell("Cell 1", {
    fontSize: 15,
    width: 256,
    padding: 10,
    borderTopWidth: 2,
    borderTopColor: 0xE74C3C,
    borderRightWidth: 4,
    borderRightColor: 0x2980B9,
    borderBottomWidth: 6,
    borderBottomColor: 0x27AE60,
    borderLeftWidth: 8,
    borderLeftColor: 0xF1C40F,
  });

  doc.text("after");
};
