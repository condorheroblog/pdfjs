const path = require("node:path");
const fs = require("node:fs");
const pdf = require("../../../");

module.exports = function (doc) {
  const img = new pdf.Image(
    fs.readFileSync(path.join(__dirname, "/fixtures/google.pdf")),
  );

  doc.image(img, {
    wrap: false,
    x: 0,
    y: 841.89,
    width: 595.28,
  });
};
