const path = require("node:path");
const fs = require("node:fs");
const pdf = require("../../../");

module.exports = function (doc) {
  const external = new pdf.ExternalDocument(
    fs.readFileSync(path.join(__dirname, "/fixtures/objstream.pdf")),
  );
  doc.addPagesOf(external);
};
