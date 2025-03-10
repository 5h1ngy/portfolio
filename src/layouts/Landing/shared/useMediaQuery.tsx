import { useEffect, useState } from 'react'; // Importa i hook `useEffect` e `useState` da React.

/**
 * Hook personalizzato `useMediaQuery`.
 * 
 * Permette di rilevare se una media query specificata corrisponde allo stato corrente della finestra.
 * 
 * @param {string} query - La stringa della media query da monitorare (es. '(max-width: 768px)').
 * @returns {boolean} - Restituisce `true` se la media query corrisponde, altrimenti `false`.
 */
export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false); // Stato che indica se la media query è soddisfatta.

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query); // Crea un oggetto `MediaQueryList` per monitorare la media query.

    // Imposta il valore iniziale dello stato in base alla media query corrente.
    setMatches(mediaQueryList.matches);

    /**
     * Listener per aggiornare lo stato quando la media query cambia.
     * 
     * @param {MediaQueryListEvent} event - Evento scatenato dal cambiamento della media query.
     */
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches); // Aggiorna lo stato con il nuovo valore della media query.
    };

    // Aggiunge il listener per monitorare i cambiamenti della media query.
    mediaQueryList.addEventListener('change', listener);

    // Cleanup: Rimuove il listener quando il componente viene smontato o il `query` cambia.
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [query]); // Effettua il side effect solo quando `query` cambia.

  return matches; // Restituisce lo stato attuale della media query.
}
