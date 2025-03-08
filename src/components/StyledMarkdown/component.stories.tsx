import type { Meta, StoryObj } from '@storybook/react';
import Component from './index'; // Path al file del componente

const meta: Meta<typeof Component> = {
  title: 'Components/MarkdownRenderer', // Nome della sezione in Storybook
  component: Component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // Disposizione centrata delle storie
  },
  args: {
    // Valori di default per le storie
    content: `# Welcome to Markdown Renderer\n\nThis is an example of **Markdown** rendering in React. \n\n\`\`\`javascript\nconsole.log('Hello World!');\n\`\`\`\n\n- Supports lists\n- Code blocks\n- **Styling**`,
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Storia base con valori di default
 */
export const Default: Story = {};

/**
 * Storia con codice evidenziato
 */
export const HighlightedCode: Story = {
  args: {
    content: `# Highlighted Code Example\n\nHere is a Python snippet:\n\n\`\`\`python\ndef greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("World"))\n\`\`\``,
  },
};

/**
 * Storia con tabelle Markdown
 */
export const MarkdownTable: Story = {
  args: {
    content: `# Markdown Table Example\n\n| Name   | Age | Profession      |\n|--------|-----|-----------------|\n| Alice  | 30  | Engineer        |\n| Bob    | 25  | Designer        |\n| Charlie| 35  | Developer       |`,
  },
};

/**
 * Storia con elenchi complessi
 */
export const ComplexLists: Story = {
  args: {
    content: `# Complex Lists Example\n\n## Unordered List\n- Item 1\n  - Subitem 1.1\n    - Subitem 1.1.1\n- Item 2\n\n## Ordered List\n1. Step 1\n2. Step 2\n   1. Substep 2.1\n   2. Substep 2.2\n3. Step 3`,
  },
};

/**
 * Storia con blocchi citazione
 */
export const BlockQuotes: Story = {
  args: {
    content: `# Block Quotes Example\n\n> This is a block quote.\n> \n> - It can include lists\n> - Or any other Markdown content\n\nAnd it works well!`,
  },
};

/**
 * Storia con Markdown semplice
 */
export const SimpleMarkdown: Story = {
  args: {
    content: `# Simple Markdown Example\n\nThis is a simple example of Markdown content.\n\nNo tables, no lists, just **plain text** and a few styles.`,
  },
};
