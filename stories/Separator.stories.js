import Separator from '@app/components/Separator';

const properties = {
  color: "blue.700",
  rotation: '180',
  type: "wave",
}

/** More info: https://storybook.js.org/docs/writing-stories#default-export */
export default {
  title: 'Components/Separator',
  component: Separator,
  /** More info: https://storybook.js.org/docs/writing-stories/parameters#global-parameters */
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#333' },
      ],
    },
  },
  /** More info: https://storybook.js.org/docs/writing-docs/autodocs */
  tags: ['autodocs'],
  /** More on argTypes: https://storybook.js.org/docs/api/argtypes
   *  {
   *    [key: string]: {
   *      control?: ControlType | { type: ControlType; } | false;
   *      description?: string;
   *      if?: Conditional;
   *      mapping?: { [key: string]: { [option: string]: any } };
   *      name?: string;
   *      options?: string[];
   *      table?: {
   *        category?: string;
   *        defaultValue?: { summary: string; detail?: string };
   *        disable?: boolean;
   *        subcategory?: string;
   *        type?: { summary?: string; detail?: string };
   *      },
   *      type?: SBType | SBScalarType['name'];
   *    }
   * }
  */
  argTypes: {
    color: "string",
    rotation: "string",
    type: "string",
  },
};


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: properties,
};
