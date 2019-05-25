import { useEffect, useState, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default function() {
  const isClient = typeof window === 'object';
  const ref = useRef();
  const [width, changeWidth] = useState(1);
  const [height, changeHeight] = useState(1);

  useEffect(() => {
    const element = ref.current;
    if (!element || !isClient) {
      return;
    }

    const resizeObserver = new ResizeObserver(entries => {
      if (!Array.isArray(entries)) {
        return;
      }
      if (!entries.length) {
        return;
      }
      const entry = entries[0];
      changeWidth(entry.contentRect.width);
      changeHeight(entry.contentRect.height);
    });
    resizeObserver.observe(element);
    return () => resizeObserver.disconnect();
  }, [width, isClient]);

  return [ref, width, height];
}
