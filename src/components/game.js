import React, { useReducer } from 'react';

import BoardView from './board-view';
import StartView from './start-view';
import reducer from '../reducer';
import { initialState } from '../state';
import { gameStarted, sizeChanged, cellSelected, gameFinished, inARowChanged } from '../actions';

export default function Game({ minBoardSize, maxBoardSize }) {
  const [{
    cells, size, winLine, tie, nextIsX, inARow, isFirstMove,
  }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      {
        cells.length
          ? <BoardView
              {...{ cells, size, winLine, tie, nextIsX, inARow, isFirstMove }}
              onRestart={() => dispatch(gameStarted())}
              onGameFinish={() => dispatch(gameFinished())}
              onCellClick={i => dispatch(cellSelected(i))}
            />
          : <StartView
              minBoardSize={minBoardSize}
              maxBoardSize={maxBoardSize}
              onStart={() => dispatch(gameStarted())}
              size={size}
              onSizeChange={newSize => dispatch(sizeChanged(newSize))}
              inARow={inARow}
              onInARowChange={newInARow => dispatch(inARowChanged(newInARow))}
            />
      }
    </div>
  );
}
