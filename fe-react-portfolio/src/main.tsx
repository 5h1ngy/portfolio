import React from "react"; // Importa la libreria React per creare e gestire componenti.
import ReactDOM from "react-dom/client"; // Importa il modulo ReactDOM per il rendering nel DOM.
import App from "@/App"; // Importa il componente principale dell'applicazione.

ReactDOM.createRoot(document.getElementById("root")!).render(
  /* 
   * `createRoot` è il metodo di React 18+ per inizializzare l'applicazione React. 
   * Utilizza il nodo DOM con l'ID "root" come contenitore principale.
   * Il punto esclamativo (!) dopo `getElementById` indica a TypeScript che il risultato non sarà null
   * (utilizzato quando si è sicuri che l'elemento esiste nel DOM).
   */
  <React.StrictMode>
    {/* 
     * `React.StrictMode` è uno strumento per evidenziare potenziali problemi nel codice.
     * Durante lo sviluppo:
     * - Aiuta a rilevare componenti con cicli di vita obsoleti.
     * - Attiva controlli aggiuntivi e avvisi per migliorare la qualità del codice.
     * Non influisce sul comportamento in produzione.
     */}
    <App />
    {/*
     * Il componente `<App />` rappresenta il punto di ingresso logico dell'applicazione.
     * Tutte le funzionalità e i componenti figli vengono orchestrati a partire da qui.
     */}
  </React.StrictMode>
);
