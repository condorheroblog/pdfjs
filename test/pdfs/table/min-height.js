module.exports = function (doc, { lorem }) {
  {
    const table = doc.table({ widths: [null, null, null], borderWidth: 1 });
    const row = table.row();

    row.cell("First", { backgroundColor: 0xEEEEEE });
    row.cell("Second", { backgroundColor: 0xDDDDDD, minHeight: 60 });
    row.cell("Third", { backgroundColor: 0xCCCCCC, minHeight: 100 });
  }

  // row minHeight
  {
    const table = doc.table({ widths: [null, null], borderWidth: 1 });
    const row = table.row({ minHeight: 60 });

    row.cell("First", { backgroundColor: 0xEEEEEE });
    row.cell("Second", { backgroundColor: 0xDDDDDD });
  }

  doc.text("Done");

  // page break
  {
    const table = doc.table({ widths: [null, null], borderWidth: 1 });
    const row = table.row();

    row.cell("First", { backgroundColor: 0xEEEEEE });
    row.cell("Second", {
      backgroundColor: 0xDDDDDD,
      minHeight: doc._cursor.startY - doc._cursor.bottom,
    });
  }
};
