import gsap from "gsap"; // Importa GSAP per animazioni avanzate.
import ScrollTrigger from "gsap/ScrollTrigger"; // Plugin GSAP per animazioni legate allo scrolling.
import { Text } from "@chakra-ui/react"; // Componente Chakra UI per il testo.
import { Flex } from "@chakra-ui/react"; // Componente Chakra UI per layout flessibili.
import { CiFolderOff } from "react-icons/ci"; // Icona per rappresentare uno stato vuoto.

import { STATUS } from "@/store/containerPortfolio"; // Enum che rappresenta gli stati di caricamento.
import { WithRouterProps } from "@/hocs/withRouter"; // Proprietà aggiuntive per il routing.
import withRouter from '@/hocs/withRouter'; // HOC per aggiungere supporto al routing.
import SliderCards from "@/components/SliderCards"; // Componente per visualizzare un carosello di card.
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
 * Mostra una sezione "Projects" con un elenco filtrato di progetti, supportando stati di caricamento e vuoti.
 * 
 * @param {Bind & WithRouterProps} props - Proprietà combinate: stato bindato e routing.
 * @returns {JSX.Element} - Il contenuto del componente.
 */
const Component: React.FC<Bind & WithRouterProps> = ({ state }) => {
    const { projects } = state; // Estrae lo stato relativo ai progetti.

    return (
        <>
            {/* Titolo della sezione con indicatore di caricamento */}
            <Text textStyle="4xl" fontWeight="bold" marginBottom={"1.5rem"}>
                Projects
                {projects.status === STATUS.LOADING && (
                    <ProgressCircleRoot value={null} size="xs" marginLeft={'0.8rem'}>
                        <ProgressCircleRing cap="round" />
                    </ProgressCircleRoot>
                )}
            </Text>

            {/* Contenitore dei progetti con layout flessibile */}
            <Flex
                direction={"row"} // Disposizione orizzontale.
                wrap={"wrap"} // Consente il wrapping degli elementi.
                alignItems={"start"} // Allinea gli elementi all'inizio verticale.
                justifyContent={{
                    base: "start", sm: "start", md: "start", lg: 'start', xl: 'start', "2xl": 'center'
                }} // Posiziona gli elementi in base alla dimensione dello schermo.
                marginX={{
                    base: "0", sm: "0", md: "0", lg: '0', xl: '2rem', "2xl": '2rem'
                }} // Margini orizzontali dinamici.
                gap={"3rem"} // Spaziatura tra gli elementi.
            >
                {/* Filtra e mostra i progetti per categoria */}

                {/* Categoria: Infrastructure */}
                {projects.status === STATUS.SUCCESS && projects.occurrences?.length !== 0 && (
                    <SliderCards
                        title="Infrastructure"
                        centerCount={1}
                        cards={projects.occurrences
                            .filter(occurrence => occurrence.title.startsWith("infra-"))
                            .filter(occurrence => occurrence?.description !== "Work in progress...")
                            .sort((a, b) => {
                                return new Date(b.updated).getTime() - new Date(a.updated).getTime();
                            })
                        }
                    />
                )}

                {/* Categoria: Command Line Interface */}
                {projects.status === STATUS.SUCCESS && projects.occurrences?.length !== 0 && (
                    <SliderCards
                        title="Command Line Interface"
                        centerCount={1}
                        cards={projects.occurrences
                            .filter(occurrence => occurrence.title.startsWith("cli-"))
                            .filter(occurrence => occurrence?.description !== "Work in progress...")
                            .sort((a, b) => {
                                return new Date(b.updated).getTime() - new Date(a.updated).getTime();
                            })
                        }
                    />
                )}

                {/* Categoria: Frontend */}
                {projects.status === STATUS.SUCCESS && projects.occurrences?.length !== 0 && (
                    <SliderCards
                        title="Frontend"
                        centerCount={1}
                        cards={projects.occurrences
                            .filter(occurrence =>
                                occurrence.title.startsWith("fe-") &&
                                !occurrence.title.startsWith("fe-pixijs") &&
                                !occurrence.title.startsWith("fe-phaser")
                            )
                            .filter(occurrence => occurrence?.description !== "Work in progress...")
                            .sort((a, b) => {
                                return new Date(b.updated).getTime() - new Date(a.updated).getTime();
                            })
                        }
                    />
                )}

                {/* Categoria: Backend */}
                {projects.status === STATUS.SUCCESS && projects.occurrences?.length !== 0 && (
                    <SliderCards
                        title="Backend"
                        centerCount={1}
                        cards={projects.occurrences
                            .filter(occurrence => occurrence.title.startsWith("be-"))
                            .filter(occurrence => occurrence?.description !== "Work in progress...")
                            .sort((a, b) => {
                                return new Date(b.updated).getTime() - new Date(a.updated).getTime();
                            })
                        }
                    />
                )}

                {/* Categoria: Videogames */}
                {projects.status === STATUS.SUCCESS && projects.occurrences?.length !== 0 && (
                    <SliderCards
                        title="Videogames"
                        centerCount={1}
                        cards={projects.occurrences
                            .filter(occurrence => occurrence.title.startsWith("fe-phaser"))
                            .filter(occurrence => occurrence?.description !== "Work in progress...")
                            .sort((a, b) => {
                                return new Date(b.updated).getTime() - new Date(a.updated).getTime();
                            })
                        }
                    />
                )}

                {/* Stato: Vuoto (nessun progetto trovato) */}
                {(projects.status === STATUS.SUCCESS || projects.status === STATUS.FAILED) && projects.occurrences?.length === 0 && (
                    <EmptyState
                        icon={<CiFolderOff />} // Icona per stato vuoto.
                        title="No Projects Found" // Titolo dello stato vuoto.
                        description="Please go to Github/5h1ngy to see more projects" // Descrizione aggiuntiva.
                    />
                )}
            </Flex>
        </>
    );
};

// Esporta il componente con stato bindato e supporto al routing.
export default bind(withRouter(Component));
