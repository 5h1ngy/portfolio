import React, {
    createContext,
    useContext,
    useRef,
    useCallback,
    useEffect,
    useMemo,
  } from 'react';
  import { gsap } from 'gsap';
  
  // Definiamo quali metodi/valori vogliamo realmente esporre dal contesto
  interface SmoothScrollContextValue {
    // Funzione per scrollare a una certa posizione
    scrollTo: (value: number) => void;
  }
  
  // Creiamo il contesto (con un valore di default “vuoto”)
  const SmoothScrollContext = createContext<SmoothScrollContextValue>({
    scrollTo: () => {},
  });
  
  // Hook per consumare il contesto
  export const useSmoothScroll = () => useContext(SmoothScrollContext);
  
  interface SmoothScrollProviderProps {
    children: React.ReactNode;
  }
  
  /**
   * Provider che:
   * - Disabilita lo scroll nativo
   * - Intercetta la rotellina (wheel) E il touch (smartphone)
   * - Anima lo spostamento verticale di un wrapper <div ref={containerRef}>
   * - Espone una funzione scrollTo() senza causare re-render nei figli
   */
  export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({
    children,
  }) => {
    // Riferimento al <div> che muoveremo con GSAP (cioè l'intero contenuto)
    const containerRef = useRef<HTMLDivElement | null>(null);
  
    // Usiamo le ref per evitare re-render:
    const currentScroll = useRef<number>(0); // posizione “reale” corrente
    const targetScroll = useRef<number>(0);  // posizione target verso cui vogliamo muoverci
    const maxScroll = useRef<number>(0);     // valore massimo di scroll (contentHeight - windowHeight)
  
    // Questi servono per gestire gli eventi touch
    const touchStartY = useRef<number | null>(null);
  
    /**
     * Funzione che ricalcola l’altezza del contenuto e aggiorna maxScroll.
     */
    const updateMaxScroll = useCallback(() => {
      if (!containerRef.current) return;
      // Altezza totale del contenuto (scrollHeight)
      const contentHeight = containerRef.current.scrollHeight;
      // Altezza della finestra
      const windowHeight = window.innerHeight;
      // Determiniamo lo scroll massimo
      const possibleMaxScroll = contentHeight - windowHeight;
      maxScroll.current = possibleMaxScroll > 0 ? possibleMaxScroll : 0;
    }, []);
  
    /**
     * Animazione con GSAP: sposta containerRef.y (translateY) al valore di targetScroll.current
     */
    const animateScroll = useCallback(() => {
      if (!containerRef.current) return;
  
      gsap.to(containerRef.current, {
        y: -targetScroll.current,
        duration: 0.6,
        ease: 'power2.out',
        onUpdate: () => {
          // Calcoliamo la nuova posizione corrente leggendo il transform
          if (!containerRef.current) return;
          const matrix = window.getComputedStyle(containerRef.current).transform;
          const translateY = matrix.split(',')[5]?.replace(')', '').trim();
          currentScroll.current = -parseFloat(translateY || '0');
        },
      });
    }, []);
  
    /**
     * Intercetta l'evento wheel e aggiorna targetScroll.current (poi chiama animateScroll).
     */
    const onWheel = useCallback(
      (e: WheelEvent) => {
        e.preventDefault();
        const delta = e.deltaY; // scroll up/down
        let nextScroll = targetScroll.current + delta;
        // Clamping
        if (nextScroll < 0) nextScroll = 0;
        if (nextScroll > maxScroll.current) nextScroll = maxScroll.current;
  
        targetScroll.current = nextScroll;
        animateScroll();
      },
      [animateScroll]
    );
  
    /**
     * Gestione TOUCH (per smartphone/tablet)
     */
    const onTouchStart = useCallback((e: TouchEvent) => {
      // Salviamo la posizione iniziale del tocco
      touchStartY.current = e.touches[0].clientY;
    }, []);
  
    const onTouchMove = useCallback(
      (e: TouchEvent) => {
        // Se non abbiamo memorizzato la posizione iniziale, usciamo
        if (touchStartY.current === null) return;
        // Impediamo lo scroll nativo
        e.preventDefault();
  
        const currentY = e.touches[0].clientY;
        // delta > 0 = user sta scorrendo verso l'alto => scroll down
        // delta < 0 = user sta scorrendo verso il basso => scroll up
        const delta = touchStartY.current - currentY;
  
        let nextScroll = targetScroll.current + delta;
        // Clamping
        if (nextScroll < 0) nextScroll = 0;
        // if (nextScroll > maxScroll.current) nextScroll = maxScroll.current;
  
        // Aggiorniamo
        targetScroll.current = nextScroll;
        animateScroll();
  
        // Aggiorniamo la startY se vuoi "continuare" lo swipe
        touchStartY.current = currentY;
      },
      [animateScroll]
    );
  
    const onTouchEnd = useCallback(() => {
      // Reset
      touchStartY.current = null;
    }, []);
  
    /**
     * useEffect che gestisce:
     * - Il calcolo iniziale di maxScroll
     * - L’aggiornamento di maxScroll su resize
     */
    useEffect(() => {
      updateMaxScroll();
      window.addEventListener('resize', updateMaxScroll);
      return () => {
        window.removeEventListener('resize', updateMaxScroll);
      };
    }, [updateMaxScroll]);
  
    /**
     * useEffect che monta/smonta l’evento wheel + touch.
     * Disabilita l’overflow nativo del <body>.
     */
    useEffect(() => {
      const handleWheel = (e: WheelEvent) => onWheel(e);
  
      document.body.style.overflow = 'hidden';
      // wheel per desktop
      window.addEventListener('wheel', handleWheel, { passive: false });
  
      // touch per mobile
      const handleTouchStart = (e: TouchEvent) => onTouchStart(e);
      const handleTouchMove = (e: TouchEvent) => onTouchMove(e);
      const handleTouchEnd = () => onTouchEnd();
  
      // Aggiungiamo gli eventi touch direttamente su window
      // (oppure su containerRef.current, a seconda delle preferenze)
      window.addEventListener('touchstart', handleTouchStart, { passive: false });
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd, { passive: false });
  
      return () => {
        // Rimuoviamo tutto
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
        document.body.style.overflow = 'auto';
      };
    }, [onWheel, onTouchStart, onTouchMove, onTouchEnd]);
  
    /**
     * Funzione pubblica per scrollare a una certa posizione
     */
    const scrollTo = useCallback(
      (value: number) => {
        let clamped = value;
        if (clamped < 0) clamped = 0;
        if (clamped > maxScroll.current) clamped = maxScroll.current;
  
        targetScroll.current = clamped;
        animateScroll();
      },
      [animateScroll]
    );
  
    /**
     * Il valore che offriamo ai consumatori del contesto.
     */
    const contextValue = useMemo<SmoothScrollContextValue>(
      () => ({
        scrollTo,
      }),
      [scrollTo]
    );
  
    return (
      <SmoothScrollContext.Provider value={contextValue}>
        {/* 
          Stile del container: minHeight, position, etc. 
          Importante avere minHeight >= 100vh perché scrollHeight venga calcolato bene.
        */}
        <div
          ref={containerRef}
          style={{
            position: 'relative',
            minHeight: '100vh',
            // Potresti anche aggiungere 'touch-action: none' se serve su mobile
            // touchAction: 'none',
          }}
        >
          {children}
        </div>
      </SmoothScrollContext.Provider>
    );
  };
  
  export default SmoothScrollProvider;
  