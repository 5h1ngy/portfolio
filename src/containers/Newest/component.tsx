import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { WithRouterProps } from "@/hocs/withRouter";
import { chakra, Flex } from "@chakra-ui/react"
import { Bind } from "./container"
import GalacticOrbiter from "@/components/GalacticOrbiter"

gsap.registerPlugin(ScrollTrigger);

const Component: React.FC<Bind & WithRouterProps> = (props) => {

    console.log(props)



    return <>

        Logo

        <Flex width={'100%'} align={"center"} justify={"center"} marginY={'10rem'}>
            <GalacticOrbiter
                centerImage={`${import.meta.env.VITE_BASENAME}/avatar.png`}
                orbits={[
                    {
                        radius: 150,
                        orbitDuration: 8,
                        planets: [
                            { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-bash.svg` },
                            { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-linux.svg` },
                            { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-docker.svg` }
                        ],
                    },
                    {
                        radius: 250,
                        orbitDuration: 10,
                        planets: [
                            { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-javascript.svg` },
                            { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-python.svg` },
                            { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-typescript.svg` }
                        ],
                    },
                    {
                        radius: 350,
                        orbitDuration: 12,
                        planets: [
                            { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-node-js.svg` },
                            { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-nest-js.svg` },
                            { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-mysql.svg` },
                            { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-mongo-db.svg` }
                        ],
                    },
                    {
                        radius: 450,
                        orbitDuration: 14,
                        planets: [
                            { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-react.svg` },
                            { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-redux.svg` },
                            { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-rollup.svg` },
                            { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-vitejs.svg` }
                        ],
                    }
                ]}
            />
        </Flex>

        Descrizione

        // Splittato su destra
        Stack Tecnologico

        // Slides cards
        Progetti

        Carriera


        <chakra.div width='10rem' height='10rem'
            backgroundColor={"white"} _dark={{ backgroundColor: "black" }}
            borderWidth='1px'
        >

        </chakra.div>

    </>
}

export default Component;