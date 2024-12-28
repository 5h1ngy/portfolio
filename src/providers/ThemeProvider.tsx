"use client";
// Indicazione che il file è destinato a essere eseguito lato client, utile in ambienti server-side rendering come Next.js.

import { ChakraProvider, defaultConfig, defineConfig, createSystem } from "@chakra-ui/react";
// Importa i componenti principali di Chakra UI per configurare il tema e il sistema di design.

import { ColorModeProvider, type ColorModeProviderProps } from "@/components/Chakra/color-mode";
// Importa il provider per la modalità colore (tema chiaro/scuro) e il relativo tipo per i props.

/**
 * Componente Provider
 * 
 * Configura e fornisce il contesto Chakra UI e la gestione della modalità colore (light/dark mode).
 * 
 * @param {ColorModeProviderProps} props - Proprietà passate al `ColorModeProvider`.
 * @returns {JSX.Element} - Il provider configurato per Chakra UI.
 */
export default function Provider(props: ColorModeProviderProps) {
  // Configurazione personalizzata del tema Chakra UI.
  const _config = defineConfig({
    theme: {
      // Configurazione opzionale dei token semantici per colori personalizzati.
      // semanticTokens: {
      //   colors: {
      //     bg: {
      //       DEFAULT: { value: "{colors.red.900}" }, // Sfondo di default.
      //       primary: { value: "{colors.teal.100}" }, // Sfondo primario.
      //       secondary: { value: "{colors.red.900}" }, // Sfondo secondario.
      //     },
      //     fg: {
      //       DEFAULT: { value: "{colors.red.900}" }, // Colore di primo piano di default.
      //       primary: { value: "{colors.teal.100}" }, // Colore di primo piano primario.
      //       secondary: { value: "{colors.red.900}" }, // Colore di primo piano secondario.
      //     },
      //   },
      // },
    },
  });

  return (
    <ChakraProvider value={createSystem(defaultConfig, _config)}>
      {/*
        ChakraProvider:
        Fornisce il contesto globale per Chakra UI, integrando il tema predefinito e la configurazione personalizzata.
        */}
      <ColorModeProvider {...props} />
      {/*
        ColorModeProvider:
        Fornisce il contesto per gestire la modalità colore (chiaro/scuro).
        Passa tutte le proprietà ricevute a questo provider.
        */}
    </ChakraProvider>
  );
}
