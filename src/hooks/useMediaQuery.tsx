import { useEffect, useState } from 'react';

export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    // Imposta il valore iniziale
    setMatches(mediaQueryList.matches);

    // Listener che aggiorna lo stato quando cambia la media query
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // In alcuni browser serve ancora addListener/removeListener,
    // ma nelle versioni moderne vanno bene addEventListener/removeEventListener
    mediaQueryList.addEventListener('change', listener);

    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}
