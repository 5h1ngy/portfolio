import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flex, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { IoMdFlashOff } from "react-icons/io";

import { STATUS } from 'react-goblin-system/store/shared';
import withRouter, { WithRouterProps } from "react-goblin-system/hocs/withRouter"
import StyledMarkdown from "react-goblin-system/components/StyledMarkdown";

import { withContainer, Bind } from "@/hocs/withSlicePortfolio";
import { ProgressCircleRing, ProgressCircleRoot } from "@/components/Chakra/progress-circle";
import { EmptyState } from "@/components/Chakra/empty-state";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC<Bind & WithRouterProps> = ({ state: { about: { occurrence, status } } }) =>
    <Flex
        id="about"
        width="100%"
        direction={"column"}
        justifyContent={"center"}
        gap={"2rem"}
    >
        <Text textStyle="4xl" fontWeight="bold">
            About
            {status === STATUS.LOADING
                && <ProgressCircleRoot value={null} size="xs" marginLeft={'0.8rem'}>
                    <ProgressCircleRing cap="round" />
                </ProgressCircleRoot>
            }
        </Text>

        {status === STATUS.SUCCESS && !occurrence
            && <EmptyState
                icon={<IoMdFlashOff />}
                title="No Hard skills"
                description="Work in progress"
                marginX={{ base: "0", sm: "0", md: "0", lg: '0', xl: '2rem', "2xl": '2rem' }}
            />
        }

        {status === STATUS.SUCCESS && occurrence
            && <Box
                width={"100%"}
                borderWidth="1px"
                borderRadius={"15px"}
                border={"1px"}
                marginX={{ base: "0", sm: "0", md: "0", lg: '0', xl: '2rem', "2xl": '2rem' }}
            >
                <Text textStyle="md" fontWeight="normal">
                    <StyledMarkdown content={occurrence!} />
                </Text>
            </Box>
        }
    </Flex>


export default withContainer(withRouter(About));
