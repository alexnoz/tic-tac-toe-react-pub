import React from 'react';

import SequencePicker from '../sequence-picker';

import s from './style.module.scss';

const StartView = ({
  minBoardSize, maxBoardSize, size, onStart, onSizeChange, inARow, onInARowChange,
}) => (
  <>
    <div className={s.options}>
      <SequencePicker
        id="board-size"
        label="Pick board's size:"
        value={size}
        min={minBoardSize}
        max={maxBoardSize}
        onChange={onSizeChange}
      />
      <SequencePicker
        id="in-a-row"
        label="In a row to win:"
        value={inARow}
        min={minBoardSize}
        max={size}
        onChange={onInARowChange}
        disabled={size === minBoardSize}
      />
    </div>
    <button className={s.start} onClick={onStart}>Start!</button>
  </>
);

export default StartView;
