import type { Meta, StoryObj } from '@storybook/react';
import Component from './index'; // Assicurati che il path punti correttamente al tuo file

const meta: Meta<typeof Component> = {
  title: 'Components/GalacticOrbiter',
  component: Component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    // Imposta valori di default per tutte le storie:
    centerImage: 'https://via.placeholder.com/100', // Immagine al centro
    orbits: [
      {
        radius: 80,              // Raggio dell'orbita
        orbitDuration: 20,       // Durata (s) per un giro completo
        planets: [
          { imgSrc: 'https://via.placeholder.com/40' },
          { imgSrc: 'https://via.placeholder.com/40' },
        ],
      },
    ],
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Storia base (valori di default)
 */
export const Default: Story = {};

/**
 * Esempio con una singola orbita e un solo pianeta
 */
export const SinglePlanet: Story = {
  args: {
    orbits: [
      {
        radius: 100,
        orbitDuration: 15,
        planets: [
          { imgSrc: 'https://via.placeholder.com/60' },
        ],
      },
    ],
  },
};

/**
 * Esempio con due orbite, ciascuna con pianeti differenti
 */
export const DoubleOrbit: Story = {
  args: {
    orbits: [
      {
        radius: 80,
        orbitDuration: 25,
        planets: [
          { imgSrc: 'https://via.placeholder.com/40' },
          { imgSrc: 'https://via.placeholder.com/40' },
        ],
      },
      {
        radius: 120,
        orbitDuration: 35,
        planets: [
          { imgSrc: 'https://via.placeholder.com/50' },
          { imgSrc: 'https://via.placeholder.com/50' },
          { imgSrc: 'https://via.placeholder.com/50' },
        ],
      },
    ],
  },
};
