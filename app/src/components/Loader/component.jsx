import PropTypes from 'prop-types'
import { CircularProgress } from '@chakra-ui/react'

/**
 * @param {object} props
 * @param {{ theme: { primaryColor: string, secondaryColor: string }}} props.config 
 * @param {boolean} props.condition 
 * @param {import('react').ReactElement} props.children
 * @returns {import('react').ReactElement}
 */
function Loader({ config, condition, children }) {

    return condition
        ? <CircularProgress isIndeterminate
            thickness='8px'
            speed='0.85s'
            trackColor={config.theme.secondaryColor}
            color={config.theme.primaryColor}
            size='xs'
        />
        : children

}

Loader.propTypes = {
    config: PropTypes.shape({
        theme: PropTypes.shape({
            primaryColor: PropTypes.string.isRequired,
            secondaryColor: PropTypes.string.isRequired,
        })
    }).isRequired,
    condition: PropTypes.bool,
    children: PropTypes.element.isRequired,
}

Loader.defaultProps = {
    condition: true,
}

export default Loader