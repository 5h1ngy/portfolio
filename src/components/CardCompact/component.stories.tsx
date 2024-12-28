import type { Meta, StoryObj } from '@storybook/react';
import Component from './index'; // Path al file del componente

const meta: Meta<typeof Component> = {
  title: 'Components/CompactCard', // Nome della sezione in Storybook
  component: Component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // Disposizione centrata delle storie
  },
  args: {
    // Valori di default per le storie
    title: 'Compact Card Example', // Titolo della card
    callback: (ref: number) => console.log(`Card clicked: ${ref}`), // Callback per gestire il clic
    callbackRef: 0, // Riferimento iniziale
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Storia base con valori di default
 */
export const Default: Story = {};

/**
 * Storia con un titolo lungo
 */
export const LongTitle: Story = {
  args: {
    title: 'This is a very long title that might require truncation or wrapping for proper display',
  },
};

/**
 * Storia con un callback personalizzato
 */
export const CustomCallback: Story = {
  args: {
    callback: (ref: number) => alert(`Card with reference ${ref} clicked!`),
    callbackRef: 5,
  },
};

/**
 * Storia con un riferimento specifico
 */
export const SpecificReference: Story = {
  args: {
    callbackRef: 42,
  },
};

/**
 * Storia senza callback
 */
export const NoCallback: Story = {
  args: {
    callback: undefined, // Nessuna funzione di callback
  },
};
