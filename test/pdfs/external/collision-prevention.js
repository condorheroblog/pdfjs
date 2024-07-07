module.exports = function (doc, { font, document, lorem }) {
  doc.text("TEST", { fontSize: 200, color: 0xDDDDDD, textAlign: "center" });

  doc.setTemplate(document.pdfjsCreated);

  doc.text("TEST", { fontSize: 200, color: 0xDDDDDD, textAlign: "center" });
};
