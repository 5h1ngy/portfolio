import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Separator, Text } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import { Badge } from "@chakra-ui/react"
import { CiFolderOff } from "react-icons/ci";

import getRandomColor from "@/utils/getRandomColor"
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
        <Text textStyle="4xl" fontWeight="bold">
            Projects
            {/* STATUS.LOADING  */}
            {projects.status === STATUS.LOADING
                && <ProgressCircleRoot value={null} size="xs" marginLeft={'0.8rem'}>
                    <ProgressCircleRing cap="round" />
                </ProgressCircleRoot>
            }
        </Text>

        <Flex direction={"column"} alignItems={"start"}
            marginX={{ base: "0", sm: "0", md: "0", lg: '0', xl: '2rem', "2xl": '2rem' }}
        >

            {/* STATUS.SUCCESS  */}
            {projects.status === STATUS.SUCCESS && projects.occurrences?.length !== 0
                && <>
                    <Text textStyle="2xl" fontWeight="normal">
                        <Badge colorPalette={getRandomColor()}>Infrastructure</Badge>
                    </Text>
                    <SliderCards
                        centerCount={1}
                        cards={projects.occurrences.filter(occurrence => occurrence.title.startsWith("infra-"))}
                    />
                </>
            }

            {/* STATUS.SUCCESS  */}
            {projects.status === STATUS.SUCCESS && projects.occurrences?.length !== 0
                && <>
                    <Text textStyle="2xl" fontWeight="normal" alignSelf={"end"}>
                        Command Line Interface
                    </Text>
                    <Separator />
                    <SliderCards
                        centerCount={1}
                        cards={projects.occurrences.filter(occurrence => occurrence.title.startsWith("cli-"))}
                    />
                </>
            }

            {/* STATUS.SUCCESS  */}
            {projects.status === STATUS.SUCCESS && projects.occurrences?.length !== 0
                && <>
                    <Text textStyle="2xl" fontWeight="normal" alignSelf={"end"}>
                        Frontend
                    </Text>
                    <Separator />
                    <SliderCards
                        centerCount={1}
                        cards={projects.occurrences.filter(occurrence => occurrence.title.startsWith("fe-"))}
                    />
                </>
            }

            {/* STATUS.SUCCESS  */}
            {projects.status === STATUS.SUCCESS && projects.occurrences?.length !== 0
                && <>
                    <Text textStyle="2xl" fontWeight="normal" alignSelf={"end"}>
                        Backend
                    </Text>
                    <Separator />
                    <SliderCards
                        centerCount={1}
                        cards={projects.occurrences.filter(occurrence => occurrence.title.startsWith("be-"))}
                    />
                </>
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
