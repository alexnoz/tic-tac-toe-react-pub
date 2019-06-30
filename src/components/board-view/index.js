import React from 'react';

import { initialState } from '../../state';
import Board from '../board';

import s from './style.module.scss';

const BoardView = ({
  cells, size, winLine, tie, nextIsX, inARow, isFirstMove, onCellClick, onRestart, onGameFinish,
}) => (
  <>
    {
      size !== initialState.size
      && <p className={s.title}>Collect at least {<strong>{inARow}</strong>} in a row to win</p>
    }
    <div className={s['board-meta']}>
      {
        winLine
          ? <p>{nextIsX ? 'O' : 'X'} wins!</p>
          : tie
            ? <p>It&apos;s a tie!</p>
            : <p>{nextIsX ? 'X' : 'O'} moves now...</p>
      }
      <div>
        <button onClick={onGameFinish}>Finish game</button>
        <button
          className={s.reset}
          onClick={onRestart}
          disabled={isFirstMove}
        >
          Reset board
        </button>
      </div>
    </div>
    <Board
      cells={cells}
      size={size}
      onCellClick={onCellClick}
      victoryLine={winLine}
    />
  </>
);

export default BoardView;
