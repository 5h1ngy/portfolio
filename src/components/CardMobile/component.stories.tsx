import type { Meta, StoryObj } from '@storybook/react';
import Component from './index'; // Path al file del componente

const meta: Meta<typeof Component> = {
  title: 'Components/Card', // Nome della sezione in Storybook
  component: Component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // Disposizione centrata delle storie
  },
  args: {
    // Valori di default per le storie
    title: 'Example Project', // Titolo della card
    description: 'This is an example project description. It showcases the flexibility of the card component.',
    topics: ['React', 'TypeScript', 'Chakra-UI'], // Argomenti associati
    thumbnail: 'https://via.placeholder.com/150', // Immagine della card
    links: {
      docs: 'https://example.com/docs',
      swagger: 'https://example.com/swagger',
      storybook: 'https://example.com/storybook',
      host: 'https://example.com',
    },
    urlCallback: (url: string) => window.open(url, '_blank'), // Funzione di callback per i link
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Storia base con valori di default
 */
export const Default: Story = {};

/**
 * Storia con un progetto senza immagine
 */
export const NoThumbnail: Story = {
  args: {
    thumbnail: undefined, // Nessuna immagine
  },
};

/**
 * Storia con molti argomenti associati
 */
export const ManyTopics: Story = {
  args: {
    topics: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'React', 'Redux', 'TypeScript', 'Docker'], // Argomenti aggiuntivi
  },
};

/**
 * Storia con solo un link disponibile
 */
export const SingleLink: Story = {
  args: {
    links: {
      docs: 'https://example.com/docs',
    },
  },
};

/**
 * Storia con descrizione breve
 */
export const ShortDescription: Story = {
  args: {
    description: 'A brief description.',
  },
};

/**
 * Storia senza argomenti e senza descrizione
 */
export const Minimal: Story = {
  args: {
    description: undefined, // Nessuna descrizione
    topics: undefined, // Nessun argomento
  },
};
