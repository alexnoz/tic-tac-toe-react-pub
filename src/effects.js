import { useEffect } from 'react';

export const useBoardSizeEffect = size => useEffect(() => {
  document.documentElement.style.setProperty('--board-size', size);
}, [size]);
