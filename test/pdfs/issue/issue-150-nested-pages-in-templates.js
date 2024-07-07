module.exports = function (doc, { font }) {
  const pdf = require("../../../");
  const path = require("node:path");
  const fs = require("node:fs");

  const external = new pdf.ExternalDocument(
    fs.readFileSync(path.join(__dirname, "/fixtures/issue-117.pdf")),
  );
  doc.setTemplate(external);
  doc.text("Works");
};
