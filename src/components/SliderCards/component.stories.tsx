import type { Meta, StoryObj } from '@storybook/react';
import Component from './index'; // Assicurati che il path punti correttamente al file del componente

const meta: Meta<typeof Component> = {
  title: 'Components/CardsSlider', // Nome della sezione e titolo del componente nello Storybook
  component: Component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    // Valori di default per tutte le storie
    title: 'Sample Projects',
    centerCount: 3,
    cards: [
      {
        _id: 1,
        created: '2023-01-01',
        updated: '2023-02-01',
        url: 'https://example.com/project1',
        title: 'Project 1',
        description: 'Description of Project 1',
      },
      {
        _id: 2,
        created: '2023-01-02',
        updated: '2023-02-02',
        url: 'https://example.com/project2',
        title: 'Project 2',
        description: 'Description of Project 2',
      },
      {
        _id: 3,
        created: '2023-01-03',
        updated: '2023-02-03',
        url: 'https://example.com/project3',
        title: 'Project 3',
        description: 'Description of Project 3',
      },
    ],
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Storia base con valori di default
 */
export const Default: Story = {};

/**
 * Storia con un solo elemento visibile al centro
 */
export const SingleCenterCard: Story = {
  args: {
    centerCount: 1,
  },
};

/**
 * Storia con nessuna card disponibile
 */
export const EmptyState: Story = {
  args: {
    cards: [],
  },
};

/**
 * Storia con molteplici card e più elementi centrali
 */
export const MultipleCards: Story = {
  args: {
    centerCount: 5,
    cards: Array.from({ length: 10 }, (_, i) => ({
      _id: i + 1,
      created: `2023-01-${i + 1}`,
      updated: `2023-02-${i + 1}`,
      url: `https://example.com/project${i + 1}`,
      title: `Project ${i + 1}`,
      description: `Description of Project ${i + 1}`,
    })),
  },
};

/**
 * Storia in modalità mobile
 */
export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone6', // Simula la viewport di un dispositivo mobile
    },
  },
};
