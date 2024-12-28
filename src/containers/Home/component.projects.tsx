import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Text } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import { CiFolderOff } from "react-icons/ci";

import { STATUS } from "@/store/containerPortfolio";
import { WithRouterProps } from "@/hocs/withRouter";
import withRouter from '@/hocs/withRouter';
import SliderCards from "@/components/SliderCards"
import { ProgressCircleRing, ProgressCircleRoot } from "@/components/Chakra/progress-circle"
import { EmptyState } from "@/components/Chakra/empty-state"

import { Bind } from "./container";
import bind from "./container";

gsap.registerPlugin(ScrollTrigger);

const Component: React.FC<Bind & WithRouterProps> = ({ state }) => {
    const { projects } = state;

    return <>
        <Text textStyle="4xl" fontWeight="bold" marginBottom={"1.5rem"}>
            Projects
            {/* STATUS.LOADING  */}
            {projects.status === STATUS.LOADING
                && <ProgressCircleRoot value={null} size="xs" marginLeft={'0.8rem'}>
                    <ProgressCircleRing cap="round" />
                </ProgressCircleRoot>
            }
        </Text>

        <Flex direction={"row"} wrap={"wrap"} alignItems={"start"}
            justifyContent={{ base: "start", sm: "start", md: "start", lg: 'start', xl: 'start', "2xl": 'center' }}
            marginX={{ base: "0", sm: "0", md: "0", lg: '0', xl: '2rem', "2xl": '2rem' }}
            gap={"3rem"}
        >

            {/* STATUS.SUCCESS  */}
            {projects.status === STATUS.SUCCESS && projects.occurrences?.length !== 0
                && <SliderCards
                    title="Infrastructure"
                    centerCount={1}
                    cards={projects.occurrences.filter(occurrence => occurrence.title.startsWith("infra-"))}
                />
            }

            {/* STATUS.SUCCESS  */}
            {projects.status === STATUS.SUCCESS && projects.occurrences?.length !== 0
                && <SliderCards
                    title="Command Line Interface"
                    centerCount={1}
                    cards={projects.occurrences.filter(occurrence => occurrence.title.startsWith("cli-"))}
                />
            }

            {/* STATUS.SUCCESS  */}
            {projects.status === STATUS.SUCCESS && projects.occurrences?.length !== 0
                && <SliderCards
                    title="Frontend"
                    centerCount={1}
                    cards={projects.occurrences.filter(occurrence =>
                        occurrence.title.startsWith("fe-") &&
                        !occurrence.title.startsWith("fe-pixijs")
                    )}
                />
            }

            {/* STATUS.SUCCESS  */}
            {projects.status === STATUS.SUCCESS && projects.occurrences?.length !== 0
                && <SliderCards
                    title="Backend"
                    centerCount={1}
                    cards={projects.occurrences.filter(occurrence => occurrence.title.startsWith("be-"))}
                />
            }

            {/* STATUS.SUCCESS  */}
            {projects.status === STATUS.SUCCESS && projects.occurrences?.length !== 0
                && <SliderCards
                    title="Videogames"
                    centerCount={1}
                    cards={projects.occurrences.filter(occurrence =>
                        occurrence.title.startsWith("fe-pixijs")
                    )}
                />
            }

            {/* STATUS.SUCCESS */}
            {projects.status === STATUS.SUCCESS && projects.occurrences?.length === 0
                && <EmptyState
                    icon={<CiFolderOff />}
                    title="No Projects Found"
                    description="Please go to Github/5h1ngy to see more projects"
                />
            }
        </Flex>
    </>
};

export default bind(withRouter(Component));
