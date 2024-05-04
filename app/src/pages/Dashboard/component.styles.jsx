/**
 * @typedef {object} Return
 * @property {import('@chakra-ui/react').StyleProps} mainContainer 
 * @property {import('@chakra-ui/react').StyleProps} headerContainer 
 * @property {import('@chakra-ui/react').StyleProps} headerButtonDrawer 
 * @property {import('@chakra-ui/react').StyleProps} navbarContainer 
 * @property {import('@chakra-ui/react').StyleProps} bodyContainer 
 * @property {import('@chakra-ui/react').StyleProps} footerContainer 
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
    const mainContainer = {
        width: '100%',
        height: '100%',
        backgroundColor: primaryColor,
    }

    /**
     * @type {import('@chakra-ui/react').StyleProps}
     */
    const headerContainer = {
        position: "fixed",
        width: '100%',
        minHeight: '120px',

        display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', alignContent: 'center',
        paddingX: '40px',

        backgroundColor: primaryColor,
    }

    /**
     * @type {import('@chakra-ui/react').StyleProps}
     */
    const headerButtonDrawer = {
        boxShadow: "0px 0px 5px 3px rgba(0,0,0,0.1)",
        borderRadius: '20px',
    }

    /**
     * @type {import('@chakra-ui/react').StyleProps}
     */
    const navbarContainer = {
        position: "fixed",
        minWidth: '150px',
        height: '100%',

        alignContent: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',

        backgroundColor: primaryColor,
    }

    /**
     * @return {import('@chakra-ui/react').StyleProps}
     */
    const bodyContainer = (isDesktop) => ({
        position: "sticky",

        minHeight: "91.2vh",
        minWidth: "500px",
        marginLeft: isDesktop ? "150px" : "1%",
        marginRight: isDesktop ? "1%" : "1%",
        marginTop: "120px",

        display: "flex",
        flexDirection: "column",

        borderTopRadius: '25px', padding: '20px',
        backgroundColor: secondaryColor, boxShadow: "0px 0px 5px 3px rgba(0,0,0,0.1)",
    })

    /**
     * @type {import('@chakra-ui/react').StyleProps}
     */
    const footerContainer = {
        background: secondaryColor
    }

    return { mainContainer, headerContainer, headerButtonDrawer, navbarContainer, bodyContainer, footerContainer }
}