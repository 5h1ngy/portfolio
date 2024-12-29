import React, { Suspense, lazy, ComponentType } from 'react';
// Importa React e i metodi per gestire il caricamento dinamico e il rendering sospeso.

/**
 * Interfaccia `DynamicImportProps`.
 * 
 * Descrive le funzioni che restituiscono i componenti dinamici.
 */
interface DynamicImportProps {
  containers: (props?: object) => JSX.Element; // Funzione per caricare container dinamici.
  pages: (props?: object) => JSX.Element; // Funzione per caricare pagine dinamiche.
}

/**
 * Funzione HOC `withDynamicImport`.
 * 
 * Consente il caricamento dinamico di moduli, come container e pagine, con un fallback durante il caricamento.
 * 
 * @param {string} path - Il percorso relativo al modulo da caricare dinamicamente.
 * @param {React.ReactElement} loader - Un componente React mostrato come fallback durante il caricamento.
 * @returns {DynamicImportProps} - Oggetto contenente le funzioni per caricare container e pagine.
 */
export default function withDynamicImport(path: string, loader: React.ReactElement): DynamicImportProps {

  /**
   * Funzione per caricare dinamicamente un container.
   * 
   * @param {object} [props] - Proprietà opzionali da passare al container.
   * @returns {JSX.Element} - Il container caricato dinamicamente.
   */
  function containers(props?: object) {
    const Content = lazy<ComponentType<unknown>>(async () =>
      await import(`./../containers/${path}/index.ts`) // Importazione dinamica del modulo container.
    );

    return (
      <Suspense fallback={loader}>
        {/* Suspense mostra il `loader` fino al caricamento del contenuto. */}
        <Content {...props} />
      </Suspense>
    );
  }

  /**
   * Funzione per caricare dinamicamente una pagina.
   * 
   * @param {object} [props] - Proprietà opzionali da passare alla pagina.
   * @returns {JSX.Element} - La pagina caricata dinamicamente.
   */
  function pages(props?: object) {
    const Page = lazy<ComponentType<unknown>>(async () =>
      await import(`./../pages/${path}/index.ts`) // Importazione dinamica del modulo pagina.
    );

    return (
      <Suspense fallback={loader}>
        {/* Suspense mostra il `loader` fino al caricamento della pagina. */}
        <Page {...props} />
      </Suspense>
    );
  }

  // Restituisce un oggetto con le funzioni per caricare container e pagine.
  return {
    containers,
    pages
  };
}
