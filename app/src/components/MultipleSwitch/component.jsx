import React from 'react';
import PropTypes from 'prop-types';

import { IconButton } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'

import { useTheme } from "./component.styles";

/**
 * @param {object} props 
 * @param {{ theme: { primaryColor: string, secondaryColor: string }}} props.config 
 * @param {Array<{ key: string, icon: import('react').ReactElement, enable: boolean }>} props.options 
 * @param {Array<{ key: string, icon: import('react').ReactElement, enable: boolean }>} props.switchOptions 
 * @param {(key: string) => void} props.onClickOption 
 * @param {(key: string) => void} props.onClickSwitchOption 
 * @returns {import('react').ReactElement}
 */
function MultipleSwitch({ config, options, switchOptions, onClickOption, onClickSwitchOption }) {
    const style = useTheme({
        primaryColor: config.theme.primaryColor,
        secondaryColor: config.theme.secondaryColor
    })

    return <Stack {...style.styleContainer}>

        {/* Show Option */}
        {options.map(option =>
            <IconButton key={crypto.randomUUID()} {...style.styleButtons(option.enable)}
                icon={option.icon}
                onClick={() => onClickOption(option.key, !option.enable)} />
        )}

        {/* Slider */}
        <Stack  {...style.styleSliderContainer}>

            {switchOptions.map(option =>
                <IconButton key={crypto.randomUUID()} {...style.styleSliderButtons(option.enable)}
                    icon={option.icon}
                    onClick={() => onClickSwitchOption(option.key, !option.enable)} />
            )}
        </Stack>
    </Stack>
}

MultipleSwitch.propTypes = {
    config: PropTypes.shape({
        theme: PropTypes.shape({
            primaryColor: PropTypes.string.isRequired,
            secondaryColor: PropTypes.string.isRequired,
        }).isRequired
    }).isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
        enable: PropTypes.bool.isRequired,
    })).isRequired,
    switchOptions: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
        enable: PropTypes.bool.isRequired,
    })).isRequired,
    onClickOption: PropTypes.func.isRequired,
    onClickSwitchOption: PropTypes.func.isRequired
}

export default MultipleSwitch;