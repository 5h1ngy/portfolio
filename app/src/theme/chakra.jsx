import { extendTheme } from '@chakra-ui/react'
import { drawerAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const multiStyleConfig = createMultiStyleConfigHelpers(parts.keys)

export default extendTheme({
    components: {
        Drawer: multiStyleConfig.defineMultiStyleConfig({
            baseStyle: multiStyleConfig.definePartsStyle({
                dialog: {
                    borderLeftRadius: '25px',
                    bg: `blue.700`,
                    padding: '2%',
                    color: 'white',
                    boxShadow: "0px 0px 5px 3px rgba(0,0,0,0.4)",
                    marginTop: '1%',
                    marginBottom: '1%',
                    height: '96%',
                }
            }),
        })
    },
})