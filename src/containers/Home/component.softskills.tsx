import React, { useEffect, useRef } from "react"; // Importa React e hook per gestire ciclo di vita e riferimenti DOM.
import gsap from "gsap"; // Importa GSAP per animazioni avanzate.
import ScrollTrigger from "gsap/ScrollTrigger"; // Plugin GSAP per gestire animazioni legate allo scrolling.
import { Text, Box, Flex } from "@chakra-ui/react"; // Componenti Chakra UI per layout e contenuto.
import { IoMdFlashOff } from "react-icons/io"; // Icona per rappresentare stati vuoti.

import { WithRouterProps } from "@/hocs/withRouter"; // Proprietà aggiuntive per il routing.
import withRouter from "@/hocs/withRouter"; // HOC per aggiungere supporto al routing.

import StyledMarkdown from "@/components/StyledMarkdown"; // Componente per visualizzare contenuti Markdown formattati.
import { STATUS } from "@/store/containerPortfolio"; // Enum che rappresenta gli stati di caricamento.
import { ProgressCircleRing, ProgressCircleRoot } from "@/components/Chakra/progress-circle";
// Componenti Chakra UI per un indicatore di caricamento circolare.
import { EmptyState } from "@/components/Chakra/empty-state";
// Componente Chakra UI per rappresentare uno stato vuoto.

import { Bind } from "./container"; // Tipizzazione per il binding dello stato.
import bind from "./container"; // Funzione per collegare lo stato al componente.

// Registra il plugin ScrollTrigger con GSAP.
gsap.registerPlugin(ScrollTrigger);

/**
 * Componente `Component`.
 * 
 * Visualizza una sezione "Soft Skills" con animazioni e gestisce stati di caricamento, successo e assenza di contenuti.
 * 
 * @param {Bind & WithRouterProps} props - Proprietà combinate: stato bindato e proprietà di routing.
 * @returns {JSX.Element} - Il contenuto del componente.
 */
const Component: React.FC<Bind & WithRouterProps> = ({ state }) => {
    const { softskill } = state; // Estrae lo stato relativo alla sezione "Soft Skills".
    const cardRef = useRef<HTMLDivElement | null>(null); // Riferimento al contenitore della card.

    useEffect(() => {
        // Crea un contesto GSAP per le animazioni.
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRef.current, // Elemento che attiva la timeline.
                    start: "top 80%", // Inizio animazione quando l'elemento entra nel 80% della viewport.
                    // markers: true, // Debug: attiva i marker per visualizzare i trigger.
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
                Soft Skills
                {softskill.status === STATUS.LOADING && (
                    <ProgressCircleRoot value={null} size="xs" marginLeft="0.8rem">
                        <ProgressCircleRing cap="round" />
                    </ProgressCircleRoot>
                )}
            </Text>

            {/* Caso: Stato vuoto (nessuna competenza presente) */}
            {softskill.status === STATUS.SUCCESS && !softskill.occurrence && (
                <EmptyState
                    icon={<IoMdFlashOff />} // Icona per lo stato vuoto.
                    title="No Soft skills" // Titolo dello stato vuoto.
                    description="Work in progress" // Descrizione aggiuntiva.
                    marginX={{ base: "0", sm: "0", md: "0", lg: "0", xl: "2rem", "2xl": "2rem" }}
                    className="card-text"
                />
            )}

            {/* Caso: Stato di successo con contenuti presenti */}
            {softskill.status === STATUS.SUCCESS && softskill.occurrence && (
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
                        <StyledMarkdown content={softskill.occurrence} />
                    </Text>
                </Box>
            )}
        </Flex>
    );
};

// Esporta il componente con stato bindato e supporto al routing.
export default bind(withRouter(Component));
