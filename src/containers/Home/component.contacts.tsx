import gsap from "gsap"; // Importa GSAP per animazioni avanzate.
import ScrollTrigger from "gsap/ScrollTrigger"; // Plugin GSAP per gestire animazioni legate allo scrolling.
import { Text } from "@chakra-ui/react"; // Componente Chakra UI per il testo.
import { Box } from "@chakra-ui/react"; // Componente contenitore di Chakra UI.
import { IoMdFlashOff } from "react-icons/io"; // Icona di fallback per stati vuoti.

import { WithRouterProps } from "@/hocs/withRouter"; // Proprietà aggiuntive per il routing.
import withRouter from '@/hocs/withRouter'; // HOC per aggiungere il supporto al routing.
import StyledMarkdown from "@/components/StyledMarkdown"; // Componente per visualizzare contenuti Markdown formattati.

import { STATUS } from "@/store/containerPortfolio"; // Stato applicativo per il caricamento dei dati.
import { ProgressCircleRing, ProgressCircleRoot } from "@/components/Chakra/progress-circle";
// Componenti Chakra UI per visualizzare un indicatore di progresso circolare.
import { EmptyState } from "@/components/Chakra/empty-state";
// Componente Chakra UI per visualizzare uno stato vuoto (es. dati mancanti).

import { Bind } from "./container"; // Tipizzazione per il binding dello stato.
import bind from "./container"; // Funzione per il collegamento dello stato con il componente.

// Registra il plugin `ScrollTrigger` con GSAP.
gsap.registerPlugin(ScrollTrigger);

/**
 * Componente `Component`.
 * 
 * Mostra una sezione "Contacts" che gestisce gli stati di caricamento, successo con contenuti o stato vuoto.
 * 
 * @param {Bind & WithRouterProps} props - Proprietà combinate: stato bindato e proprietà di routing.
 * @returns {JSX.Element} - Il contenuto del componente.
 */
const Component: React.FC<Bind & WithRouterProps> = ({ state }) => {
    const { contacts } = state; // Estrae lo stato relativo alla sezione "Contacts".

    return (
        <>
            {/* Titolo della sezione */}
            <Text textStyle="4xl" fontWeight="bold">
                Contacts
                {/* Stato: Loading */}
                {contacts.status === STATUS.LOADING
                    && <ProgressCircleRoot value={null} size="xs" marginLeft={'0.8rem'}>
                        <ProgressCircleRing cap="round" />
                    </ProgressCircleRoot>
                }
            </Text>

            {/* Stato: Successo senza contenuti */}
            {contacts.status === STATUS.SUCCESS && !contacts.occurrence
                && <EmptyState
                    icon={<IoMdFlashOff />} // Icona di fallback per stato vuoto.
                    title="No Contacts" // Titolo dello stato vuoto.
                    description="Work in progress" // Descrizione dello stato vuoto.
                    marginX={{ base: "0", sm: "0", md: "0", lg: '0', xl: '2rem', "2xl": '2rem' }}
                />
            }

            {/* Stato: Successo con contenuti */}
            {contacts.status === STATUS.SUCCESS && contacts.occurrence
                && <Box
                    width={"100%"} // Larghezza piena.
                    borderWidth="1px" // Larghezza del bordo.
                    borderRadius={"15px"} // Arrotondamento degli angoli.
                    border={"1px"} // Stile del bordo.
                    marginX={{ base: "0", sm: "0", md: "0", lg: '0', xl: '2rem', "2xl": '2rem' }}
                >
                    {/* Contenuto Markdown */}
                    <Text textStyle="md" fontWeight="normal">
                        <StyledMarkdown content={contacts.occurrence!} />
                    </Text>
                </Box>
            }
        </>
    );
};

// Esporta il componente con lo stato bindato e il supporto al routing.
export default bind(withRouter(Component));
