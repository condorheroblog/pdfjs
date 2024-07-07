module.exports = function (doc, fixtures) {
  doc.text(fixtures.lorem.shorter);
  const outer = doc.cell({
    width: 400,
    padding: 20,
    backgroundColor: 0xEEEEEE,
  });
  const inner = outer.cell({ padding: 20, backgroundColor: 0xDDDDDD });
  inner.text(fixtures.lorem.short);
  inner.text(fixtures.lorem.short);
  outer.text("Hello World");
  doc.text("Hello World");
};
