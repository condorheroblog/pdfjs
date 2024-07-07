module.exports = function (doc, { lorem, image }) {
  // header
  const header = doc.header();
  header.text("text");

  let cell = header.cell({ padding: 20, backgroundColor: 0xDDDDDD });
  cell.text("TESTING");
  cell.image(image.pdf);

  // footer
  const footer = doc.footer();
  footer.text("text");

  cell = footer.cell({ padding: 20, backgroundColor: 0xDDDDDD });
  cell.image(image.complexPdf);
  cell.text("TESTING");

  // body

  doc.text("Hello");

  doc.pageBreak();

  doc.text(lorem.long, { fontSize: 20 });
};
