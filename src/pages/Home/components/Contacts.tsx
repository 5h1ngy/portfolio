import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flex, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { IoMdFlashOff } from "react-icons/io";

import { STATUS } from 'react-goblin-system/store/shared';
import withRouter, { WithRouterProps } from "react-goblin-system/hocs/withRouter"

import { withContainer, Bind } from "@/hocs/withSlicePortfolio";
import StyledMarkdown from "@/components/StyledMarkdown";
import { ProgressCircleRing, ProgressCircleRoot } from "@/components/Chakra/progress-circle";
import { EmptyState } from "@/components/Chakra/empty-state";

gsap.registerPlugin(ScrollTrigger);

const Contacts: React.FC<Bind & WithRouterProps> = ({ state }) =>
    <Flex
        id="contacts"
        width={"100%"}
        direction={"column"}
        justifyContent={"center"}
        gap={"2rem"}
    >
        <Text textStyle="4xl" fontWeight="bold">
            Contacts
            {state.contacts.status === STATUS.LOADING
                && <ProgressCircleRoot value={null} size="xs" marginLeft={'0.8rem'}>
                    <ProgressCircleRing cap="round" />
                </ProgressCircleRoot>
            }
        </Text>

        {state.contacts.status === STATUS.SUCCESS && !state.contacts.occurrence
            && <EmptyState
                icon={<IoMdFlashOff />}
                title="No Contacts"
                description="Work in progress"
                marginX={{ base: "0", sm: "0", md: "0", lg: '0', xl: '2rem', "2xl": '2rem' }}
            />
        }

        {state.contacts.status === STATUS.SUCCESS && state.contacts.occurrence
            && <Box
                width={"100%"}
                borderWidth="1px"
                borderRadius={"15px"}
                border={"1px"}
                marginX={{ base: "0", sm: "0", md: "0", lg: '0', xl: '2rem', "2xl": '2rem' }}
            >
                <Text textStyle="md" fontWeight="normal">
                    <StyledMarkdown content={state.contacts.occurrence!} />
                </Text>
            </Box>
        }
    </Flex>

export default withContainer(withRouter(Contacts));
