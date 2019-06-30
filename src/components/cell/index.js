import React from 'react';

import { EMPTY, X } from '../../const';

import s from './style.module.scss';

export default function Cell({ value, onClick }) {
  const cellClass = value === EMPTY
    ? ''
    : value === X
      ? 'x'
      : 'o';

  return (
    <div
      className={`${s['board-cell']}${cellClass && ` ${s[cellClass]}`}`}
      onClick={onClick}
    ></div>
  );
}
