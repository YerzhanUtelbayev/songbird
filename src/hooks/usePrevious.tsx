import { useRef, useEffect } from 'react';

function usePrevious<T>(value: T): T {
  const ref = useRef<T>();

  useEffect(() => {
    if (ref) {
      ref.current = value;
    }
  }, [value]);

  return ref.current as T;
}

export default usePrevious;
