import gsap from "gsap"; // Libreria per animazioni.
import ScrollTrigger from "gsap/ScrollTrigger"; // Plugin per gestire animazioni basate sullo scrolling.
import { Text } from "@chakra-ui/react"; // Componente per il testo di Chakra UI.
import { Box } from "@chakra-ui/react"; // Componente contenitore di Chakra UI.
import { IoMdFlashOff } from "react-icons/io"; // Icona utilizzata per lo stato vuoto.

import { WithRouterProps } from "@/hocs/withRouter"; // Proprietà aggiuntive per il routing.
import withRouter from '@/hocs/withRouter'; // HOC per aggiungere il supporto al routing.
import StyledMarkdown from "@/components/StyledMarkdown"; // Componente per rendere contenuti Markdown.

import { STATUS } from "@/store/containerPortfolio"; // Stato applicativo per il caricamento dei dati.
import { ProgressCircleRing, ProgressCircleRoot } from "@/components/Chakra/progress-circle";
// Componenti Chakra UI per visualizzare un indicatore di progresso circolare.
import { EmptyState } from "@/components/Chakra/empty-state";
// Componente Chakra UI per visualizzare uno stato vuoto (es. dati mancanti).

import { Bind } from "./container"; // Tipizzazione specifica per il binding dello stato.
import bind from "./container"; // Funzione per il collegamento dello stato con il componente.

// Registra il plugin `ScrollTrigger` con GSAP.
gsap.registerPlugin(ScrollTrigger);

/**
 * Componente `Component`.
 * 
 * Mostra una sezione "About" che può contenere uno stato di caricamento, successo con contenuto o stato vuoto.
 * 
 * @param {Bind & WithRouterProps} props - Proprietà combinate: stato bindato e proprietà di routing.
 * @returns {JSX.Element} - Il contenuto del componente.
 */
const Component: React.FC<Bind & WithRouterProps> = ({ state }) => {
    const { about } = state; // Estrae lo stato relativo alla sezione "About".

    return (
        <>
            {/* Titolo della sezione */}
            <Text textStyle="4xl" fontWeight="bold">
                About
                {/* Stato: Loading */}
                {about.status === STATUS.LOADING
                    && <ProgressCircleRoot value={null} size="xs" marginLeft={'0.8rem'}>
                        <ProgressCircleRing cap="round" />
                    </ProgressCircleRoot>
                }
            </Text>

            {/* Stato: Successo senza contenuti */}
            {about.status === STATUS.SUCCESS && !about.occurrence
                && <EmptyState
                    icon={<IoMdFlashOff />} // Icona che rappresenta lo stato vuoto.
                    title="No Hard skills" // Titolo dello stato vuoto.
                    description="Work in progress" // Descrizione aggiuntiva dello stato vuoto.
                    marginX={{ base: "0", sm: "0", md: "0", lg: '0', xl: '2rem', "2xl": '2rem' }}
                />
            }

            {/* Stato: Successo con contenuti */}
            {about.status === STATUS.SUCCESS && about.occurrence
                && <Box
                    width={"100%"} // Larghezza piena.
                    borderWidth="1px" // Larghezza del bordo.
                    borderRadius={"15px"} // Arrotondamento degli angoli.
                    border={"1px"} // Stile del bordo.
                    marginX={{ base: "0", sm: "0", md: "0", lg: '0', xl: '2rem', "2xl": '2rem' }}
                >
                    {/* Contenuto Markdown */}
                    <Text textStyle="md" fontWeight="normal">
                        <StyledMarkdown content={about.occurrence!} />
                    </Text>
                </Box>
            }
        </>
    );
};

// Esporta il componente con lo stato bindato e le proprietà di routing.
export default bind(withRouter(Component));
