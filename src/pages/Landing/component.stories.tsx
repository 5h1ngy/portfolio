import type { Meta, StoryObj } from '@storybook/react';
import Component from './index'; // Assicurati che il path punti correttamente al tuo file

const meta: Meta<typeof Component> = {
  title: 'Pages/NavigationComponent',
  component: Component,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // Il componente occupa l'intera viewport
  },
  args: {
    logo: 'https://via.placeholder.com/42', // URL per il logo al centro
    navbarItems: [
      { label: 'Home', value: '/home' },
      { label: 'About', value: '/about' },
      { label: 'Projects', value: '/projects' },
      { label: 'Contact', value: '/contact' },
    ], // Navigazione dinamica
    children: (
      <div style={{ height: '200vh', padding: '2rem', background: '#f0f0f0' }}>
        <h1>Welcome to the Example Page</h1>
        <p>Scroll down to explore more sections.</p>
      </div>
    ), // Contenuto di esempio all'interno del layout
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Storia base (valori di default)
 */
export const Default: Story = {};

/**
 * Storia con navbar personalizzata
 */
export const CustomNavbar: Story = {
  args: {
    navbarItems: [
      { label: 'Features', value: '/features' },
      { label: 'Docs', value: '/docs' },
      { label: 'Blog', value: '/blog' },
    ],
  },
};

/**
 * Storia con logo assente
 */
export const NoLogo: Story = {
  args: {
    logo: undefined, // Rimuove il logo
  },
};

/**
 * Storia con contenuto lungo per testare lo scroll
 */
export const LongContent: Story = {
  args: {
    children: (
      <div style={{ height: '500vh', padding: '2rem', background: '#e0e0e0' }}>
        <h1>Scroll Test</h1>
        <p>Questo esempio contiene contenuto molto lungo per testare lo scroll e la navigazione.</p>
      </div>
    ),
  },
};
