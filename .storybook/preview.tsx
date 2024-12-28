import React from "react";
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter per il contesto Router

import ThemeProvider from "../src/providers/ThemeProvider"; // Importa il tuo provider del tema

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i, // Matcher per controlli basati sui colori
        date: /Date$/i, // Matcher per controlli basati su date
      },
    },
    layout: "fullscreen", // Opzione per rendere le storie a schermo intero
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </BrowserRouter>
    ), // Avvolge le storie con il contesto del router e del tema
    withThemeByClassName({
      defaultTheme: "light", // Tema predefinito
      themes: { light: "", dark: "dark" }, // Temi disponibili
    }),
  ],
};

export default preview;
