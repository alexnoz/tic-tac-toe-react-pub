import React from 'react';

import s from './style.module.scss';

export default function VictoryLine({ line, boxSize: size }) {
  const normalizedLine = Object.keys(line).reduce(
    (o, c) => (o[c] = line[c] + 0.5) && o,
    {},
  );

  return (
    <svg className={s['victory-line']} viewBox={`0 0 ${size} ${size}`}>
      <line {...normalizedLine}></line>
    </svg>
  );
}
