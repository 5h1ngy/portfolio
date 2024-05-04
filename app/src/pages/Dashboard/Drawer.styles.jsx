/**
 * @typedef {object} Return
 * @property {import('@chakra-ui/react').StyleProps} styleContainer 
 * @property {import('@chakra-ui/react').StyleProps} styleContent 
 * @property {import('@chakra-ui/react').StyleProps} styleBody 
*/

/**
 * @param {object} props 
 * @param {string} props._primaryColor 
 * @param {string} props.secondaryColor 
 * @returns {Return}
*/
export function useTheme({ _primaryColor, secondaryColor }) {

    /**
     * @type {import('@chakra-ui/react').StyleProps}
     */
    const styleContainer = {
        // Aligment
        size: 'xs',
        placement: "left",
    }

    /**
     * @type {import('@chakra-ui/react').StyleProps}
     */
    const styleContent = {
        // Aspect
        backgroundColor: secondaryColor,
        borderRightRadius: '20px',
        boxShadow: "0px 0px 5px 3px rgba(0,0,0,0.1)",
    }

    /**
     * @type {import('@chakra-ui/react').StyleProps}
     */
    const styleBody = {
        // Internal Content position
        minHeight: '160px',
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
    }

    return { styleContainer, styleContent, styleBody }
}