import { configureStore } from '@reduxjs/toolkit';
// Importa `configureStore` da Redux Toolkit, un metodo semplificato per configurare lo store Redux.

import containerPortfolio from './containerPortfolio';
// Importa il reducer dello slice `containerPortfolio`, che gestisce lo stato relativo al portfolio.

import { actions as containerPortfolioActions } from "./containerPortfolio";
// Importa le azioni dello slice `containerPortfolio` per un uso più facile in tutta l'applicazione.

// ** Raggruppamento delle azioni **
export const actions = {
    containerPortfolio: containerPortfolioActions,
    // Esporta le azioni di `containerPortfolio` sotto un namespace dedicato per mantenere organizzato l'oggetto `actions`.
};

// ** Configurazione dei reducer **
const reducer = {
    containerPortfolio: containerPortfolio,
    // Registra il reducer `containerPortfolio` nello store. 
    // La chiave `containerPortfolio` rappresenta la parte dello stato gestita da questo slice.
};

// ** Creazione dello Store Redux **
const store = configureStore({
    reducer,
    // Passa l'oggetto `reducer` che contiene i reducer registrati per lo store.
});

// ** Tipizzazione dello Stato Globale **
export type State = ReturnType<typeof store.getState>;
// `State` rappresenta il tipo derivato automaticamente dallo stato gestito dallo store.
// Questo è utile per la tipizzazione in TypeScript durante l'accesso allo stato globale.

export default store;
// Esporta lo store configurato per essere utilizzato nel provider Redux o in altre parti dell'applicazione.
