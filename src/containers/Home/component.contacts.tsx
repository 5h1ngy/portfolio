import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
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
    const { contacts } = state;

    return (
        <>
            <Text textStyle="4xl" fontWeight="bold">
                Contacts
                {/* STATUS.LOADING  */}
                {contacts.status === STATUS.LOADING
                    && <ProgressCircleRoot value={null} size="xs" marginLeft={'0.8rem'}>
                        <ProgressCircleRing cap="round" />
                    </ProgressCircleRoot>
                }
            </Text>

            {/* STATUS.SUCCESS */}
            {contacts.status === STATUS.SUCCESS && !contacts.occurrence
                && <EmptyState
                    icon={<IoMdFlashOff />}
                    title="No Hard skills"
                    description="Work in progress"
                    marginX={{ base: "0", sm: "0", md: "0", lg: '0', xl: '2rem', "2xl": '2rem' }}
                />
            }

            {contacts.status === STATUS.SUCCESS && contacts.occurrence
                && <Box
                    width={"100%"}
                    borderWidth="1px"
                    borderRadius={"15px"}
                    border={"1px"}
                    marginX={{ base: "0", sm: "0", md: "0", lg: '0', xl: '2rem', "2xl": '2rem' }}
                >
                    <Text textStyle="md" fontWeight="normal">
                        <StyledMarkdown content={contacts.occurrence!} />
                    </Text>
                </Box>
            }
        </>
    )
};

export default bind(withRouter(Component));
