import { useState, useEffect } from 'react';

export const LocalStorage = key => {
  const [state, setState] = useState(() =>
    JSON.parse(window.localStorage.getItem(key) ?? [])
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};
