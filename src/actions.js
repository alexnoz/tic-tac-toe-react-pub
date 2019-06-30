export const GAME_STARTED = 'GAME_STARTED';
export const GAME_FINISHED = 'GAME_FINISHED';
export const SIZE_CHAGED = 'SIZE_CHAGED';
export const CELL_SELECTED = 'CELL_SELECTED';
export const IN_A_ROW_CHANGED = 'IN_A_ROW_CHANGED';

export const gameStarted = () => ({ type: GAME_STARTED });
export const gameFinished = () => ({ type: GAME_FINISHED });
export const sizeChanged = size => ({ type: SIZE_CHAGED, size });
export const cellSelected = cell => ({ type: CELL_SELECTED, cell });
export const inARowChanged = inARow => ({ type: IN_A_ROW_CHANGED, inARow });
