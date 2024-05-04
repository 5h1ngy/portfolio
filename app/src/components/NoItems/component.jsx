import { Heading, Stack } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FcDeleteDatabase } from "react-icons/fc";


const NoItems = ({ condition, children }) => (
    condition
        ? children
        : <Stack alignItems={'center'}>
            <Icon as={FcDeleteDatabase} boxSize={"120px"} />
            <Heading as='h4' size='md'>
                Non sono presenti elementi
            </Heading>
        </Stack>
)

export default NoItems