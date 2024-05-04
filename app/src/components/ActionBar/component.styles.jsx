/**
 * @typedef {object} Return
 * @property {import('@chakra-ui/react').StyleProps} styleContainer 
 * @property {import('@chakra-ui/react').StyleProps} styleButton 
 * @property {import('@chakra-ui/react').StyleProps} styleNavigation 
 * @property {import('@chakra-ui/react').StyleProps} styleAction 
 * @property {import('@chakra-ui/react').StyleProps} styleNavigationSeparator 
 * @property {import('@chakra-ui/react').StyleProps} styleBreadcrumbLink 
*/

/**
 * @param {object} props 
 * @param {string} props.primaryColor 
 * @param {string} props.secondaryColor
 * @returns {Return}
*/
export function useTheme({ primaryColor, secondaryColor }) {

    /**
     * @returns {import('@chakra-ui/react').StyleProps}
     */
    const styleContainer = (position) => {

        /**
         * @type {import('@chakra-ui/react').StyleProps}
         */
        const toReturn = {
            position: 'sticky',

            height: '80px',
            top: position.top,

            flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', alignItems: 'center',
            paddingX: '20px',
            background: primaryColor
        }

        if (position.top === "inherit") {
            Object.assign(toReturn, {
                borderRadius: '25px'
            })
        } else {
            Object.assign(toReturn, {
                // borderBottomRadius: '25px',
                marginX: '-20px',
                paddingX: '40px',
                boxShadow: "0px 0px 5px 3px rgba(0,0,0,0.1)",
            })
        }

        return toReturn;
    }

    /**
     * @type {import('@chakra-ui/react').ButtonProps}
     */
    const styleButton = {
        variant: 'ghost', size: 'lg', borderRadius: '25px',
        color: secondaryColor,
        _hover: {
            color: primaryColor,
            bg: secondaryColor,
        },
    }

    /**
     * @type {import('@chakra-ui/react').StyleProps}
     */
    const styleNavigation = {
        spacing: '8px',
    }

    /**
     * @type {import('@chakra-ui/react').StyleProps}
     */
    const styleAction = {
        gap: '8px',
    }

    /**
    * @type {import('@chakra-ui/react').StyleProps}
    */
    const styleNavigationSeparator = {
        color: secondaryColor,
    }

    /**
    * @type {import('@chakra-ui/react').StyleProps}
    */
    const styleBreadcrumbLink = {
        fontWeight: '600',
        fontSize: '25px',
    }

    return { styleContainer, styleButton, styleNavigation, styleAction, styleNavigationSeparator, styleBreadcrumbLink }
}