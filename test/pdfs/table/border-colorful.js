module.exports = function (doc, { lorem }) {
  {
    const table = doc.table({
      widths: [256, 256],
      borderHorizontalWidth: 10,
      borderHorizontalColor: 0xE74C3C,
      borderVerticalWidth: 10,
      borderVerticalColor: 0x2980B9,
    });

    for (let i = 0; i < 3; ++i) {
      const row = table.row();

      row.cell(`Left ${i}`, { fontSize: 20, padding: 10 });
      row.cell(`Right ${i}`, { fontSize: 20, padding: 10 });
    }
  }

  doc.text("–––––");

  {
    const colors = [0xE74C3C, 0x2980B9, 0x27AE60, 0xF1C40F];
    const table = doc.table({
      widths: [256, 256],
      borderHorizontalWidth: 10,
      borderHorizontalColors: i => colors[i],
      borderVerticalWidth: 10,
      borderVerticalColors: [0xE74C3C, 0x2980B9, 0x27AE60],
    });

    for (let i = 0; i < 3; ++i) {
      const row = table.row();

      row.cell(`Left ${i}`, { fontSize: 20, padding: 10 });
      row.cell(`Right ${i}`, { fontSize: 20, padding: 10 });
    }
  }
};
