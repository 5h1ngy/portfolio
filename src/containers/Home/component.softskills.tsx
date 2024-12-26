import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Text } from "@chakra-ui/react"
import { Box, Flex } from "@chakra-ui/react"
import { IoMdFlashOff } from "react-icons/io";

import { WithRouterProps } from "@/hocs/withRouter";
import withRouter from '@/hocs/withRouter';
import StyledMarkdown from "@/components/StyledMarkdown";

import { STATUS } from "@/store/containerPortfolio";
import { ProgressCircleRing, ProgressCircleRoot } from "@/components/Chakra/progress-circle"
import { EmptyState } from "@/components/Chakra/empty-state"

import { Bind } from "./container";
import bind from "./container";

gsap.registerPlugin(ScrollTrigger);

const Component: React.FC<Bind & WithRouterProps> = ({ state }) => {
    const { softskill } = state;

    return <Flex direction={"column"} gap={"2rem"} width={"35rem"}>
        <Text textStyle="4xl" fontWeight="bold">
            Soft Skills
            {/* STATUS.LOADING  */}
            {softskill.status === STATUS.LOADING
                && <ProgressCircleRoot value={null} size="xs" marginLeft={'0.8rem'}>
                    <ProgressCircleRing cap="round" />
                </ProgressCircleRoot>
            }
        </Text>

        {/* STATUS.SUCCESS */}
        {softskill.status === STATUS.SUCCESS && !softskill.occurrence
            && <EmptyState
                icon={<IoMdFlashOff />}
                title="No Soft skills"
                description="Work in progress"
                marginX={{ base: "0", sm: "0", md: "0", lg: '0', xl: '2rem', "2xl": '2rem' }}
            />
        }

        {softskill.status === STATUS.SUCCESS && softskill.occurrence
            && <Box
                backgroundColor={"gray.100"}
                _dark={{ backgroundColor: "gray.900" }}
                padding={"2rem"}
                borderRadius={"15px"}
                marginX={{ base: "0", sm: "0", md: "0", lg: '0', xl: '2rem', "2xl": '2rem' }}
            >
                <Text textStyle="md" fontWeight="normal">
                    <StyledMarkdown content={softskill.occurrence} />
                </Text>
            </Box>
        }
    </Flex>
};

export default bind(withRouter(Component));
