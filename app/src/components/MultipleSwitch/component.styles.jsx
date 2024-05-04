/**
 * @typedef {object} Return
 * @property {import('@chakra-ui/react').StyleProps} styleContainer 
 * @property {import('@chakra-ui/react').StyleProps} styleSliderContainer 
 * @property {import('@chakra-ui/react').StyleProps} styleSliderButtons 
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
        // Dimensions
        minWidth: '100px', width: '100%',
        // Aligment
        flexDirection: 'row', flexWrap: 'nowrap',
        // Internal Content position
        alignContent: 'center', justifyContent: 'end', alignItems: 'center',
    }

    /**
     * @type {import('@chakra-ui/react').StyleProps}
     */
    const styleSliderContainer = {
        // Aligment
        flexDirection: 'row', flexWrap: 'nowrap',
        // Internal Content position
        alignContent: 'center', justifyContent: 'center', alignItems: 'center',
        // Aspect
        borderRadius: '20px', backgroundColor: secondaryColor, spacing: '6px', padding: '4px',
        boxShadow: "0px 0px 5px 3px rgba(0,0,0,0.1)"
    }

    /**
     * @param {boolean} active
     * @returns {import('@chakra-ui/react').StyleProps}
     */
    function styleButtons(active) {
        return {
            bg: secondaryColor,
            borderColor: '#ccd0d5',
            color: primaryColor,
            colorScheme: 'teal', borderRadius: '20px',
            size: 'md',
            isActive: active,
            _hover: false,
            _active: {
                bg: primaryColor,
                color: secondaryColor,
            }
        }
    }

    /**
     * @param {boolean} active
     * @returns {import('@chakra-ui/react').StyleProps}
     */
    function styleSliderButtons(active) {
        return {
            bg: secondaryColor,
            borderColor: '#ccd0d5',
            color: primaryColor,
            colorScheme: 'teal', borderRadius: '20px',
            size: 'md',
            isActive: active,
            _hover: false,
            _active: {
                bg: primaryColor,
                color: secondaryColor,
                boxShadow: "0px 0px 5px 3px rgba(0,0,0,0.1)"
            },
        }
    }

    return { styleContainer, styleButtons, styleSliderContainer, styleSliderButtons }
}