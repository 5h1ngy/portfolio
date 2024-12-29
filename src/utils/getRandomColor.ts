import _ from "lodash";

// Define the type for the allowed color names
type ColorName = 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink' | 'accent';

/**
 * Generates a random color from a predefined list of color names.
 * 
 * @returns {ColorName} A random color name from the predefined list.
 */
export default function getRandomColor(): ColorName {
    // Predefined list of color names
    const colors: ColorName[] = [
        'gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink', 'accent'
    ];

    // Use Lodash's `sample` function to randomly pick a color
    return _.sample(colors) as ColorName;
}
