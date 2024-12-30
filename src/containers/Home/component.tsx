import { useEffect } from "react"; // Hook React per gestire il ciclo di vita del componente.
import gsap from "gsap"; // Libreria GSAP per animazioni avanzate.
import ScrollTrigger from "gsap/ScrollTrigger"; // Plugin GSAP per attivare animazioni legate allo scrolling.
import { Flex } from "@chakra-ui/react"; // Componente Chakra UI per layout flessibili.

import { WithRouterProps } from "@/hocs/withRouter"; // Proprietà aggiuntive per il routing.
import withRouter from '@/hocs/withRouter'; // HOC per aggiungere supporto al routing.
import GalacticOrbiter from "@/components/GalacticOrbiter"; // Componente che mostra orbite e pianeti in animazione.

import { Bind } from "./container"; // Tipizzazione per il binding dello stato.
import bind from "./container"; // Funzione per collegare lo stato al componente.
import About from "./component.about"; // Componente per la sezione "About".
import HardSkills from "./component.hardskills"; // Componente per la sezione "Hard Skills".
import SoftSkills from "./component.softskills"; // Componente per la sezione "Soft Skills".
import Projects from "./component.projects"; // Componente per la sezione "Projects".
import Contacts from "./component.contacts"; // Componente per la sezione "Contacts".

// Registra ScrollTrigger con GSAP per abilitare le animazioni legate allo scrolling.
gsap.registerPlugin(ScrollTrigger);

/**
 * Componente `Component`.
 * 
 * Gestisce l'interfaccia utente di un portfolio interattivo, caricando dati e visualizzando diverse sezioni animate.
 * 
 * @param {Bind & WithRouterProps} props - Proprietà combinate: stato bindato e proprietà di routing.
 * @returns {JSX.Element} - Il contenuto del componente.
 */
const Component: React.FC<Bind & WithRouterProps> = ({ actions }) => {
    // Estrae le azioni per ottenere i dati richiesti.
    const { doGetRepositories, doGetAbout, doGetHardskill, doGetSoftskill, doGetContacts } = actions;

    // Configurazione delle orbite da passare al componente `GalacticOrbiter`.
    const avatarTechs = [
        {
            radius: 150, // Raggio dell'orbita.
            orbitDuration: 6, // Durata per completare un'orbita (in secondi).
            planets: [
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/typescript.svg` },
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/python.svg` },
            ],
        },
        {
            radius: 250,
            orbitDuration: 9,
            planets: [
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/nodejs.svg` },
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/mysql.svg` },
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/docker.svg` },
            ],
        },
        {
            radius: 350,
            orbitDuration: 12,
            planets: [
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/vitejs.svg` },
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/react.svg` },
            ],
        }
    ];

    // Effetto per caricare i dati al montaggio del componente.
    useEffect(() => {
        doGetRepositories(); // Carica i dati dei repository.
        doGetAbout(); // Carica i dati della sezione "About".
        doGetHardskill(); // Carica i dati delle competenze tecniche.
        doGetSoftskill(); // Carica i dati delle competenze trasversali.
        doGetContacts(); // Carica i dati dei contatti.
    }, []); // [] indica che viene eseguito solo al primo montaggio.

    return (
        <>
            {/* Sezione iniziale con orbite animate */}
            <Flex
                direction="row" // Disposizione orizzontale.
                width="100vw" // Larghezza della sezione.
                height={{ base: "30vh", sm: "60vh", md: "60vh", lg: '60vh', xl: '80vh', "2xl": '80vh' }} // Altezza della sezione.
                align="center" // Allinea al centro verticalmente.
                justify="center" // Allinea al centro orizzontalmente.
                paddingX={"20vw"} // Padding orizzontale.
            >
                <GalacticOrbiter
                    centerImage={`${import.meta.env.VITE_BASENAME}/logos/avatar.png`} // Immagine centrale (avatar).
                    orbits={avatarTechs} // Configurazione delle orbite.
                />
            </Flex>

            {/* Card About */}
            <Flex
                id="about" // ID per ancorare la sezione.
                width={"100%"} // Larghezza massima.
                direction={"column"} // Disposizione verticale.
                justifyContent={"center"} // Allinea al centro verticalmente.
                gap={"2rem"} // Spaziatura tra gli elementi.
            >
                <About /> {/* Componente della sezione "About". */}
            </Flex>

            {/* Sezione Skills */}
            <Flex
                id="skills" // ID per ancorare la sezione.
                width={"100%"}
                direction={"row"} // Disposizione orizzontale.
                gap={"8rem"} // Spaziatura tra gli elementi.
                justifyContent={"center"} // Allinea al centro orizzontalmente.
                wrap={{ base: "wrap", sm: "wrap", md: "wrap", lg: 'wrap', xl: 'nowrap', "2xl": 'nowrap' }}
            // Imposta il wrapping dinamico in base alle dimensioni dello schermo.
            >
                <HardSkills /> {/* Card per "Hard Skills". */}
                <SoftSkills /> {/* Card per "Soft Skills". */}
            </Flex>

            {/* Sezione Projects */}
            <Flex
                id="projects" // ID per ancorare la sezione.
                direction={"column"} // Disposizione verticale.
                width={"100%"}
                gap={"1rem"} // Spaziatura tra gli elementi.
            >
                <Projects /> {/* Componente della sezione "Projects". */}
            </Flex>

            {/* Card Contacts */}
            <Flex
                id="contacts" // ID per ancorare la sezione.
                width={"100%"}
                direction={"column"} // Disposizione verticale.
                justifyContent={"center"} // Allinea al centro verticalmente.
                gap={"2rem"} // Spaziatura tra gli elementi.
            >
                <Contacts /> {/* Componente della sezione "Contacts". */}
            </Flex>
        </>
    );
};

// Esporta il componente con stato bindato e supporto al routing.
export default bind(withRouter(Component));
