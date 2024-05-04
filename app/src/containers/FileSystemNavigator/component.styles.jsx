/**
 * @typedef {object} Return
 * @property {import('@chakra-ui/react').StyleProps} mainContainer
*/

/**
 * @param {object} props 
 * @param {string} props.primaryColor 
 * @param {string} props.secondaryColor
 * @returns {Return}
*/
export function useTheme({ primaryColor, secondaryColor }) {

    /**
     * @return {import('@chakra-ui/react').StyleProps}
     */
    const mainContainer = (loading) => ({
        alignItems: loading ? "center" : "start",
        alignContent: "center",
        justifyItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        paddingTop: "2%",
        paddingX: "50px",
    })

    return { mainContainer }
}