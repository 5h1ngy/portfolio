import OrbiterSystem from '@app/components/OrbiterSystem';

import avatarUser from '@app/assets/icons/avatar-user.svg'
import logoJavascript from '@app/assets/icons/logo-javascript.svg'
import logoReact from '@app/assets/icons/logo-react.svg'
import logoRedux from '@app/assets/icons/logo-redux.svg'
import logoNodeJs from '@app/assets/icons/logo-node-js.svg'
import logoTypescript from '@app/assets/icons/logo-typescript.svg'
import logoNestJs from '@app/assets/icons/logo-nest-js.svg'
import logoMongoDb from '@app/assets/icons/logo-mongo-db.svg'

const properties = {
  stator: {
    logo: avatarUser
  },
  rotors: [
    {
      icons: [
        { icon: logoJavascript, align: { top: `18.5rem`, left: `18.5rem` } },
        { icon: logoReact, align: { top: `18.5rem`, right: `18.5rem` } },
        { icon: logoRedux, align: { bottom: `18.5rem`, left: `18.5rem` } },
      ]
    },
    {
      icons: [
        { icon: logoNodeJs, align: { top: `28.5rem`, left: `28.5rem` } },
        { icon: logoTypescript, align: { top: `28.5rem`, right: `28.5rem` } },
        { icon: logoNestJs, align: { bottom: `28.5rem`, left: `28.5rem` } },
        { icon: logoMongoDb, align: { bottom: `28.5rem`, right: `28.5rem` } },
      ]
    }
  ]
}

/** More info: https://storybook.js.org/docs/writing-stories#default-export */
export default {
  title: 'Components/OrbiterSystem',
  component: OrbiterSystem,
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
  argTypes: properties,
};


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: properties,
};
