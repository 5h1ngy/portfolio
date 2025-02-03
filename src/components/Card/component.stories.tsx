import type { Meta, StoryObj } from '@storybook/react';
import Component from './index'; // Path al file del componente

const meta: Meta<typeof Component> = {
  title: 'Components/HorizontalCard', // Nome della sezione in Storybook
  component: Component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // Disposizione centrata delle storie
  },
  args: {
    // Valori di default per le storie
    _id: 1, // ID del componente
    title: 'Project Example', // Titolo della card
    description: 'This is an example project with a description and multiple links.', // Descrizione
    topics: ['React', 'TypeScript', 'Storybook'], // Argomenti associati
    thumbnail: 'https://via.placeholder.com/150', // Thumbnail di esempio
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
 * Storia senza immagine di anteprima
 */
export const NoThumbnail: Story = {
  args: {
    thumbnail: undefined, // Rimuove la thumbnail
  },
};

/**
 * Storia con molti argomenti associati
 */
export const ManyTopics: Story = {
  args: {
    topics: ['React', 'TypeScript', 'Chakra-UI', 'Storybook', 'Node.js', 'MongoDB', 'GraphQL', 'Jest'],
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
    description: 'A short description for the card.',
  },
};

/**
 * Storia senza descrizione e senza argomenti
 */
export const Minimal: Story = {
  args: {
    description: undefined, // Nessuna descrizione
    topics: undefined, // Nessun argomento
  },
};
