import { arrayOfSize } from './utils';
import { GAME_STARTED, GAME_FINISHED, SIZE_CHAGED, CELL_SELECTED, IN_A_ROW_CHANGED } from './actions';
import { EMPTY, X, O } from './const';
import { initialState } from './state';
import calculateWinLine from './calculate-win-line';

export default function reducer(state, action) {
  switch (action.type) {
    case SIZE_CHAGED: {
      const { inARow } = state;
      return {
        ...state,
        size: action.size,
        inARow: inARow > action.size ? initialState.inARow : inARow,
      };
    }

    case IN_A_ROW_CHANGED:
      return {
        ...state,
        inARow: action.inARow,
      };

    case GAME_STARTED: {
      const { size, inARow } = state;
      return {
        ...initialState,
        size,
        inARow,
        cells: arrayOfSize(size * size).fill(EMPTY),
      };
    }

    case CELL_SELECTED: {
      const { cells, nextIsX } = state;
      const i = action.cell;

      if (cells[i] !== EMPTY || state.winLine) return state;

      const newCells = cells.slice();
      newCells[i] = nextIsX ? X : O;

      const winLine = calculateWinLine(newCells, state.inARow);

      if (!winLine && newCells.every(cell => cell !== EMPTY)) {
        return {
          ...state,
          cells: newCells,
          tie: true,
        };
      }

      return {
        ...state,
        winLine,
        cells: newCells,
        nextIsX: !nextIsX,
        isFirstMove: state.isFirstMove && false,
      };
    }

    case GAME_FINISHED:
      return initialState;

    default:
      return state;
  }
}
