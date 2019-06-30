import { X, O } from './const';

const getWinMatch = (line, n) => line.join('').match(new RegExp(`(${X}{${n},}|${O}{${n},})`));

export default function calculateWinLine(cells, n) {
  const len = cells.length;
  const size = Math.sqrt(len);
  let match;

  for (let i = 0; i < size; i++) {
    // rows
    const row = cells.slice(i * size, i * size + size);

    match = getWinMatch(row, n);

    if (match) {
      const { index, 0: { length: l } } = match;
      return {
        x1: index,
        y1: i,
        x2: index + l - 1,
        y2: i,
      };
    }

    // cols
    const col = [];

    for (let j = i, lim = i + size * (size - 1); j <= lim; j += size) {
      col.push(cells[j]);
    }

    match = getWinMatch(col, n);

    if (match) {
      const { index, 0: { length: l } } = match;
      return {
        x1: i,
        y1: index,
        x2: i,
        y2: index + l - 1,
      };
    }
  }

  // diags

  // top half /
  for (let j = n - 1; j < size; j++) {
    const diag = [];

    for (let i = j * size; i > 0; i = i - size + 1) {
      diag.push(cells[i]);
    }

    match = getWinMatch(diag, n);

    if (match) {
      const { index: i, 0: { length: l } } = match;
      return {
        x1: i,
        y1: j - i,
        x2: i + l - 1,
        y2: j - i - l + 1,
      };
    }
  }

  // bottom half /
  for (let j = 1; j <= size - n; j++) {
    const diag = [];

    for (let i = len - size + j, lim = size * (j + 1) - 1; i >= lim; i = i - size + 1) {
      diag.push(cells[i]);
    }

    match = getWinMatch(diag, n);

    if (match) {
      const { index: i, 0: { length: l } } = match;
      return {
        x1: j + i,
        y1: size - i - 1,
        x2: j + i + l - 1,
        y2: size - i - l,
      };
    }
  }

  // top half \
  for (let j = 0; j <= size - n; j++) {
    const diag = [];

    for (let i = j, lim = len - j * size - 1; i <= lim; i = i + size + 1) {
      diag.push(cells[i]);
    }

    match = getWinMatch(diag, n);

    if (match) {
      const { index: i, 0: { length: l } } = match;
      return {
        x1: j + i,
        y1: i,
        x2: j + i + l - 1,
        y2: i + l - 1,
      };
    }
  }

  // bottom half \
  for (let j = 1; j <= size - n; j++) {
    const diag = [];

    for (let i = size * j, lim = len - j - 1; i <= lim; i = i + size + 1) {
      diag.push(cells[i]);
    }

    match = getWinMatch(diag, n);

    if (match) {
      const { index: i, 0: { length: l } } = match;
      return {
        x1: i,
        y1: j + i,
        x2: i + l - 1,
        y2: j + i + l - 1,
      };
    }
  }

  // nope
  return null;
}
