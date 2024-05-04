/**
 * @typedef {object} Return
 * @property {import('@chakra-ui/react').StyleProps} styleContainer 
 * @property {import('@chakra-ui/react').StyleProps} styleStackContainer 
 * @property {import('@chakra-ui/react').StyleProps} styleButton 
*/

/**
 * @param {object} props 
 * @param {string} props.primaryColor 
 * @param {string} props.secondaryColor
 * @returns {Return}
*/
export function useTheme({ primaryColor, secondaryColor }) {

    /**
     * @type {import('@chakra-ui/react').StyleProps}
     */
    const styleContainer = {
        // Aligment
        flexDirection: 'column',
        // Internal Content position
        alignContent: 'center', justifyContent: 'center', alignItems: 'center',
    }

    /**
     * @type {import('@chakra-ui/react').StackProps}
     */
    const styleStackContainer = {
        align: "center",
        marginBottom: '25px'
    }

    /**
     * @return {import('@chakra-ui/react').ButtonProps}
     */
    const styleButton = (invertTheme, enable) => !invertTheme
        ? {
            variant: 'ghost', size: 'lg', borderRadius: '20px',
            color: !enable ? secondaryColor : primaryColor,
            bg: !enable ? primaryColor : secondaryColor,
            _hover: {
                color: primaryColor,
                bg: secondaryColor,
            },
        }
        : {
            variant: 'ghost', size: 'lg', borderRadius: '20px',
            color: !enable ? primaryColor : secondaryColor,
            bg: !enable ? secondaryColor : primaryColor,
            _hover: {
                color: secondaryColor,
                bg: primaryColor,
            },
        }

    /**
     * @return {import('@chakra-ui/react').ButtonProps}
     */
    const styleText = (invertTheme) => !invertTheme
        ? {
            color: secondaryColor,
            marginTop: "-5px",
            fontWeight: "600",
        }
        : {
            color: primaryColor,
            marginTop: "-5px",
            fontWeight: "600",
        }


    return { styleContainer, styleStackContainer, styleButton, styleText }
}