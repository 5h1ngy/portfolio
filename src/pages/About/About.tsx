import withRouter, { WithRouterProps } from "react-goblin-system/hocs/withRouter";
import { withContainer, Bind } from "@/hocs/withSliceAbout";

import SectionCard from "react-goblin-system/components/SectionCard";
import SectionCardRow from "react-goblin-system/components/SectionCardRow";
import StyledMarkdown from "react-goblin-system/components/StyledMarkdown";

const AboutPage: React.FC<Bind & WithRouterProps> = ({ state }) => {
    const { occurrence, status } = state;

    return <SectionCard
        header={{ title: "About" }}
        status={status}
        isEmpty={occurrence === undefined}
        body={{
            style: { width: "100%" },
            content: <SectionCardRow value={<StyledMarkdown content={occurrence!} />} />
        }}
    />
}

export default withContainer(withRouter(AboutPage));