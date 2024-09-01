import Card from '@app/components/Card';

const properties = {
  thumbnail: "https://github.com/5h1ngy/fe-react-poc-nfs/blob/main/docs/preview.png?raw=true",
  date: "04-2024",
  name: "Proof of concept, Network File System",
  action: "modal",
  actions: [
    { type: "link", "icon": "github", "link": "https://github.com/5h1ngy/fe-react-poc-nfs" },
    { type: "link", "icon": "host", "link": "https://fe-react-poc-nfs.vercel.app/home" }
  ],
  descFile: "projects/poc_nfs",
  tags: ["Proof of Concept", "Frontend", "ReactJS", "ChakraUI", "ReduxJS", "Redux Sagas"]
}

/** More info: https://storybook.js.org/docs/writing-stories#default-export */
export default {
  title: 'Components/Card',
  component: Card,
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
