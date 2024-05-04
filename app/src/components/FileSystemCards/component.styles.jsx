/**
 * @typedef {object} Return
 * @property {import('@chakra-ui/react').StyleProps} styleContent
 * @property {import('@chakra-ui/react').StyleProps} styleCard
 * @property {import('@chakra-ui/react').StyleProps} iconStyle
*/

/**
 * @param {object} props 
 * @param {string} props.hoverColor 
 * @param {string} props.clickColor
 * @param {string} props.backgroundColor
 * @returns {Return}
*/
export function useTheme({ hoverColor, clickColor, backgroundColor }) {

    /** @type {import('@chakra-ui/react').StyleProps} */
    const styleContent = {
        width: '100%',
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: "center",
        alignContent: "center",
        justifyItems: "center",
        justifyContent: "center",
        gap: '16px',
    }

    /** 
     * @param {string} type
     * @returns {import('@chakra-ui/react').StyleProps} */
    const styleCard = (type) => {

        /** @type {import('@chakra-ui/react').StyleProps} */
        const toReturn = {
            direction: { base: 'column', sm: 'row' },
            overflow: 'hidden',
            variant: 'outline',
            width: "100%",
            position: "inherit",
            backgroundColor: backgroundColor,
            borderRadius: '25px',
        }

        if (type !== "FILE") {
            Object.assign(toReturn, {
                _hover: {
                    backgroundColor: hoverColor,
                    borderRadius: '25px',
                    _active: {
                        backgroundColor: clickColor,
                    }
                }
            })
        }

        return toReturn
    }

    /** @type {import('@chakra-ui/react').StyleProps} */
    const iconStyle = {
        boxSize: "128px",
    }


    return { styleContent, styleCard, iconStyle }
}