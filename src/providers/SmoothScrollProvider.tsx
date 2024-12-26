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
    scrollTo: () => { },
});

// Hook per consumare il contesto
export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface SmoothScrollProviderProps {
    children: React.ReactNode;
}

/**
 * Provider che:
 * - Disabilita lo scroll nativo
 * - Intercetta la rotellina (wheel)
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

    /**
     * Funzione che ricalcola l’altezza del contenuto e aggiorna maxScroll.
     * Esempio base: contentHeight - window.innerHeight.
     */
    const updateMaxScroll = useCallback(() => {
        if (!containerRef.current) return;

        // Altezza totale del contenuto (scrollHeight)
        const contentHeight = containerRef.current.scrollHeight;
        // Altezza della finestra
        const windowHeight = window.innerHeight;
        // Determiniamo lo scroll massimo (clamp a zero per evitare valori negativi)
        const possibleMaxScroll = contentHeight - windowHeight;
        maxScroll.current = possibleMaxScroll > 0 ? possibleMaxScroll : 0;

        console.log("contentHeight", contentHeight)
        console.log("windowHeight", windowHeight)
        console.log("possibleMaxScroll", possibleMaxScroll)
    }, []);

    /**
     * Animazione con GSAP: sposta containerRef.y (translateY) al valore di targetScroll.current
     */
    const animateScroll = useCallback(() => {
        if (!containerRef.current) return;

        gsap.to(containerRef.current, {
            // Ricorda: dobbiamo muoverlo in negativo
            y: -targetScroll.current,
            duration: 0.6,
            ease: 'power2.out',
            onUpdate: () => {
                // Calcoliamo la nuova posizione corrente leggendo il transform
                if (!containerRef.current) return;
                const matrix = window.getComputedStyle(containerRef.current).transform;
                // Esempio transform matrix: "matrix(1, 0, 0, 1, 0, -300)"
                const translateY = matrix.split(',')[5]?.replace(')', '').trim();
                currentScroll.current = -parseFloat(translateY || '0');
            },
        });
    }, []);

    /**
     * Intercetta l'evento wheel e aggiorna targetScroll.current (poi chiama animateScroll).
     * Notare che qui non c'è alcuna setState => nessun re-render.
     */
    const onWheel = useCallback(
        (e: WheelEvent) => {
            e.preventDefault();
            const delta = e.deltaY;
            // Calcoliamo la nuova posizione target
            let nextScroll = targetScroll.current + delta;

            // Clamping: 0 <= nextScroll <= maxScroll
            if (nextScroll < 0) {
                nextScroll = 0;
            }

            // else if (nextScroll > maxScroll.current) {
            //     nextScroll = maxScroll.current;
            // }

            targetScroll.current = nextScroll;
            animateScroll();
        },
        [animateScroll]
    );

    /**
     * useEffect che gestisce:
     * - Il calcolo iniziale di maxScroll
     * - L’aggiornamento di maxScroll su resize
     */
    useEffect(() => {
        // Calcola una prima volta
        updateMaxScroll();

        // Ricalcola su ogni resize
        window.addEventListener('resize', updateMaxScroll);

        return () => {
            window.removeEventListener('resize', updateMaxScroll);
        };
    }, [updateMaxScroll]);

    /**
     * useEffect che monta/smonta l’evento wheel.
     * Disabilita l’overflow nativo del <body>.
     */
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => onWheel(e);

        // Disabilitiamo lo scroll nativo del body
        document.body.style.overflow = 'hidden';
        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            document.body.style.overflow = 'auto';
        };
    }, [onWheel]);

    /**
     * Funzione pubblica per scrollare a una certa posizione
     * (ad esempio, potresti chiamarla in un bottone "Torna all’inizio")
     */
    const scrollTo = useCallback(
        (value: number) => {
            // clamp
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
     * NB: Mettiamo solo le funzioni / props che realmente servono ai figli.
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
          Importantissimo: dai uno stile che NON limiti l’altezza
          e che permetta di calcolare correttamente scrollHeight.
          Ad esempio (inline) un minHeight: '100%' o '100vh'.
        */}
            <div ref={containerRef} style={{ position: 'relative', minHeight: '100vh' }}>
                {children}
            </div>
        </SmoothScrollContext.Provider>
    );
};

export default SmoothScrollProvider;
