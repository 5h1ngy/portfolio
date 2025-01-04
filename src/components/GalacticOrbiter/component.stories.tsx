import type { Meta, StoryObj } from '@storybook/react';
import Component from './index'; // Path al componente GalacticOrbiter

const meta: Meta<typeof Component> = {
  title: 'Components/GalacticOrbiter', // Nome della sezione in Storybook
  component: Component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // Layout centrato per le storie
  },
  args: {
    // Valori di default per le storie
    centerImage: 'https://via.placeholder.com/100', // Immagine centrale
    orbits: [
      {
        radius: 100, // Raggio dell'orbita
        orbitDuration: 10, // Durata della rotazione completa in secondi
        planets: [
          { imgSrc: 'https://via.placeholder.com/50' }, // Pianeta 1
          { imgSrc: 'https://via.placeholder.com/50' }, // Pianeta 2
        ],
      },
    ],
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Storia base con valori predefiniti.
 */
export const Default: Story = {};

/**
 * Esempio con una singola orbita e un solo pianeta.
 */
export const SinglePlanetOrbit: Story = {
  args: {
    orbits: [
      {
        radius: 150, // Raggio maggiore per enfatizzare l'orbita
        orbitDuration: 15, // Rotazione più lenta
        planets: [
          { imgSrc: 'https://via.placeholder.com/60' }, // Unico pianeta
        ],
      },
    ],
  },
};

/**
 * Esempio con due orbite, ciascuna con pianeti diversi.
 */
export const DoubleOrbitExample: Story = {
  args: {
    orbits: [
      {
        radius: 100,
        orbitDuration: 20, // Orbita esterna lenta
        planets: [
          { imgSrc: 'https://via.placeholder.com/40' }, // Pianeta 1
          { imgSrc: 'https://via.placeholder.com/40' }, // Pianeta 2
        ],
      },
      {
        radius: 60,
        orbitDuration: 10, // Orbita interna veloce
        planets: [
          { imgSrc: 'https://via.placeholder.com/30' }, // Pianeta 3
        ],
      },
    ],
  },
};

/**
 * Esempio complesso con tre orbite e pianeti multipli.
 */
export const TripleOrbitExample: Story = {
  args: {
    orbits: [
      {
        radius: 120,
        orbitDuration: 25, // Orbita esterna
        planets: [
          { imgSrc: 'https://via.placeholder.com/40' }, // Pianeta A
          { imgSrc: 'https://via.placeholder.com/40' },
          { imgSrc: 'https://via.placeholder.com/40' },
        ],
      },
      {
        radius: 80,
        orbitDuration: 15, // Orbita intermedia
        planets: [
          { imgSrc: 'https://via.placeholder.com/50' }, // Pianeta B
        ],
      },
      {
        radius: 50,
        orbitDuration: 8, // Orbita interna veloce
        planets: [
          { imgSrc: 'https://via.placeholder.com/20' }, // Pianeta C
          { imgSrc: 'https://via.placeholder.com/20' },
        ],
      },
    ],
  },
};
