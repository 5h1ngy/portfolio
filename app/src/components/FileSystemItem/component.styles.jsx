/**
 * @typedef {object} Return
 * @property {import('@chakra-ui/react').StyleProps} containerBox 
 * @property {import('@chakra-ui/react').StyleProps} iconStyle 
 * @property {import('@chakra-ui/react').StyleProps} containerHeading
*/

/**
 * @param {object} props 
 * @param {string} props.hoverColor 
 * @param {string} props.clickColor
 * @returns {Return}
*/
export function useTheme({ hoverColor, clickColor }) {

    /**
     * @type {import('@chakra-ui/react').StyleProps}
     */
    const containerBox = (type) => {
        const toReturn = {
            direction: "column",
            alignItems: "center",
            alignContent: "center",
            justifyItems: "center",
            justifyContent: "center",

            padding: '5px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        }

        if (type !== "FILE") {
            Object.assign(toReturn, {
                _hover: {
                    backgroundColor: hoverColor,
                    borderRadius: '20px',
                    _active: {
                        backgroundColor: clickColor,
                    }
                }
            })
        }

        return toReturn
    }

    /**
     * @type {import('@chakra-ui/react').StyleProps}
     */
    const iconStyle = {
        boxSize: "120px",
    }

    /**
     * @type {import('@chakra-ui/react').StyleProps}
     */
    const containerHeading = {
        fontSize: 'md',
        textAlign: 'center'
    }


    return { containerBox, iconStyle, containerHeading }
}