import React from 'react';

import Cell from '../cell';
import VictoryLine from '../victory-line';
import { useBoardSizeEffect } from '../../effects';

import s from './style.module.scss';

export default function Board({ size, cells, onCellClick, victoryLine }) {
  useBoardSizeEffect(size);

  return (
    <div className={s['board-container']}>
      <div className={s.board}>
        {cells.map((cell, i) => <Cell key={i} value={cell} onClick={() => onCellClick(i)} />)}
      </div>
      {victoryLine && <VictoryLine line={victoryLine} boxSize={size} />}
    </div>
  );
}
