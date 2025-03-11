import React from "react";
import { chakra, Image } from "@chakra-ui/react";

import { CenterImageProps } from "./CenterImage.types";

const CenterImage: React.FC<CenterImageProps> = ({ centerImage, scaleFactor }) => {

    const computedSizeRem = 10.75 * scaleFactor;
    const clampedSizeRem = Math.max(3.75, Math.min(computedSizeRem, 11.25));


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
                width={`${clampedSizeRem.toFixed(3)}rem`}
            />
        </chakra.div>
    );
};

export default CenterImage;
