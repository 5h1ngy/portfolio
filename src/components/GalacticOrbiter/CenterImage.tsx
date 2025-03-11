import React from "react";
import { chakra, Image } from "@chakra-ui/react";

import { CenterImageProps } from "./CenterImage.types";

const CenterImage: React.FC<CenterImageProps> = ({ centerImage, scaleFactor }) => {

    const baseSizeRem = 10.75 * scaleFactor;
    const minSizeRem = 3.75;
    const maxSizeRem = 11.25;

    return (
        <chakra.div
            position="absolute"
            zIndex={20}
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
        >
            <Image
                src={centerImage}
                alt="Center"
                width={`${baseSizeRem.toFixed(3)}rem`}
                minWidth={`${minSizeRem.toFixed(3)}rem`}
                maxWidth={`${maxSizeRem.toFixed(3)}rem`}
            />
        </chakra.div>
    );
};

export default CenterImage;
