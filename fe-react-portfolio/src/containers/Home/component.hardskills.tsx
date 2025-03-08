import React, { useEffect, useRef } from "react"; // Importa React, il ciclo di vita e i riferimenti al DOM.
import gsap from "gsap"; // Importa GSAP per le animazioni.
import ScrollTrigger from "gsap/ScrollTrigger"; // Plugin GSAP per animazioni legate allo scroll.
import { Text, Box, Flex } from "@chakra-ui/react"; // Componenti UI di Chakra UI.
import { IoMdFlashOff } from "react-icons/io"; // Icona per lo stato vuoto.

import { WithRouterProps } from "@/hocs/withRouter"; // Proprietà aggiuntive per il routing.
import withRouter from "@/hocs/withRouter"; // HOC per il supporto al routing.

import StyledMarkdown from "@/components/StyledMarkdown"; // Componente per visualizzare contenuti Markdown formattati.
import { STATUS } from "@/store/containerPortfolio"; // Enum che rappresenta gli stati dell'applicazione.
import { ProgressCircleRing, ProgressCircleRoot } from "@/components/Chakra/progress-circle";
// Componenti per visualizzare un indicatore di caricamento circolare.
import { EmptyState } from "@/components/Chakra/empty-state";
// Componente per rappresentare uno stato vuoto (es. dati mancanti).

import { Bind } from "./container"; // Tipizzazione per il binding dello stato.
import bind from "./container"; // Funzione per collegare lo stato al componente.

// Registra il plugin ScrollTrigger per le animazioni GSAP.
gsap.registerPlugin(ScrollTrigger);

/**
 * Componente `Component`.
 * 
 * Visualizza una sezione "Hard Skills" con animazioni e gestisce stati di caricamento, successo e assenza di contenuti.
 * 
 * @param {Bind & WithRouterProps} props - Proprietà combinate: stato bindato e proprietà di routing.
 * @returns {JSX.Element} - Il contenuto del componente.
 */
const Component: React.FC<Bind & WithRouterProps> = ({ state }) => {
    const { hardskill } = state; // Estrae lo stato relativo alla sezione "Hard Skills".
    const cardRef = useRef<HTMLDivElement | null>(null); // Riferimento al contenitore della card.

    useEffect(() => {
        // Crea un contesto GSAP per le animazioni.
        let ctx = gsap.context(() => {
            // Definisce una timeline legata allo scrolling.
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRef.current, // Elemento che attiva la timeline.
                    start: "top 80%", // Inizio animazione quando l'elemento entra nel 80% della viewport.
                    // markers: true, // Debug: attiva i marker.
                },
            });

            // (1) Anima la card: fade-in con spostamento verso l'alto.
            tl.from(cardRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out", // Transizione fluida.
            });

            // (2) Anima i contenuti interni con un effetto "stagger".
            tl.from(
                ".card-text",
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.05, // Ritardo progressivo tra gli elementi.
                },
                "-=0.5" // Inizia l'animazione sovrapponendosi di 0.5s alla precedente.
            );
        }, cardRef);

        // Cleanup: Rimuove le animazioni quando il componente viene smontato.
        return () => ctx.revert();
    }, []);

    return (
        <Flex
            ref={cardRef} // Assegna il riferimento al contenitore principale.
            direction="column" // Disposizione verticale.
            gap="2rem" // Spaziatura tra gli elementi.
            width="35rem" // Larghezza fissa della card.
        >
            {/* Titolo della sezione con indicatore di caricamento */}
            <Text textStyle="4xl" fontWeight="bold" className="card-text">
                Hard Skills
                {hardskill.status === STATUS.LOADING && (
                    <ProgressCircleRoot value={null} size="xs" marginLeft="0.8rem">
                        <ProgressCircleRing cap="round" />
                    </ProgressCircleRoot>
                )}
            </Text>

            {/* Caso: Stato vuoto (nessuna competenza presente) */}
            {hardskill.status === STATUS.SUCCESS && !hardskill.occurrence && (
                <EmptyState
                    icon={<IoMdFlashOff />} // Icona per lo stato vuoto.
                    title="No Hard skills" // Titolo dello stato vuoto.
                    description="Work in progress" // Descrizione aggiuntiva.
                    marginX={{ base: "0", sm: "0", md: "0", lg: "0", xl: "2rem", "2xl": "2rem" }}
                    className="card-text"
                />
            )}

            {/* Caso: Stato di successo con contenuti presenti */}
            {hardskill.status === STATUS.SUCCESS && hardskill.occurrence && (
                <Box
                    backgroundColor="gray.100" // Colore di sfondo in modalità chiara.
                    _dark={{ backgroundColor: "gray.900" }} // Colore di sfondo in modalità scura.
                    padding="2rem" // Spaziatura interna.
                    borderRadius="15px" // Bordo arrotondato.
                    marginX={{ base: "0", sm: "0", md: "0", lg: "0", xl: "2rem", "2xl": "2rem" }}
                    className="card-text"
                >
                    {/* Contenuto formattato in Markdown */}
                    <Text textStyle="md" fontWeight="normal">
                        <StyledMarkdown content={hardskill.occurrence} />
                    </Text>
                </Box>
            )}
        </Flex>
    );
};

// Esporta il componente con stato bindato e supporto al routing.
export default bind(withRouter(Component));
