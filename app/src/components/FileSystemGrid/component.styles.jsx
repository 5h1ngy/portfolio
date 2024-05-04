/**
 * @typedef {object} Return
 * @property {import('@chakra-ui/react').StyleProps} styleContent
*/

/**
 * @param {object} props
 * @returns {Return}
*/
export function useTheme() {

    /**
     * @type {import('@chakra-ui/react').StyleProps}
     */
    const styleContent = {
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: "center",
        alignContent: "center",
        justifyItems: "center",
        justifyContent: "center",
        gap: '10px',
    }


    return { styleContent }
}