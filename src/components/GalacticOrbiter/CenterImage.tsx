import React from "react";
import { chakra, Image } from "@chakra-ui/react";
import { CenterImageProps } from "./CenterImage.types";

const CenterImage: React.FC<CenterImageProps> = ({ centerImage, scaleFactor }) => {
    // Calcola la dimensione base in rem in base al fattore di scala
    const computedSizeRem = 10.75 * scaleFactor;
    // Limita la dimensione tra un minimo e un massimo
    const clampedSizeRem = Math.max(3.75, Math.min(computedSizeRem, 11.25));

    return (
        <chakra.div
            position="absolute"
            zIndex={20}
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)" // Centra il div sia verticalmente che orizzontalmente
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
