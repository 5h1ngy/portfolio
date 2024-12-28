// Importazione delle librerie principali di Redux Toolkit per la gestione dello stato e delle azioni asincrone.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Importazione dei servizi per ottenere dati dai repository GitHub e dai file Markdown.
import { getRepositories } from '@/services/github';
import { getAbout, getHardskill, getSoftskill, getContacts } from '@/services/markdown';

// Importazione del tipo Repository per tipizzare i dati dei repository GitHub.
import { Repository } from "@/services/github.types";

// Enum per rappresentare gli stati delle operazioni asincrone.
export enum STATUS {
    IDLE, // Operazione non ancora avviata.
    LOADING, // Operazione in corso.
    SUCCESS, // Operazione completata con successo.
    FAILED // Operazione fallita.
}

// Definizione dell'interfaccia dello stato globale dello slice.
export interface State {
    about: {
        occurrence?: string; // Contenuto Markdown della sezione "About".
        status: STATUS; // Stato corrente dell'operazione.
        error?: any; // Eventuali errori riscontrati.
    },
    hardskill: {
        occurrence?: string; // Contenuto Markdown della sezione "Hard Skills".
        status: STATUS;
        error?: any;
    },
    softskill: {
        occurrence?: string; // Contenuto Markdown della sezione "Soft Skills".
        status: STATUS;
        error?: any;
    },
    projects: {
        occurrences: Repository[]; // Elenco dei repository GitHub.
        status: STATUS;
        error?: any;
    },
    contacts: {
        occurrence?: string; // Contenuto Markdown della sezione "Contacts".
        status: STATUS;
        error?: any;
    },
}

// ** Azioni asincrone definite con `createAsyncThunk` **
// Ogni azione rappresenta una chiamata API per ottenere i dati.

const doGetRepositories = createAsyncThunk(
    'container/portfolio/doGetRepositories', // Nome dell'azione.
    async () => await getRepositories() // Chiamata al servizio per ottenere i repository GitHub.
);

const doGetAbout = createAsyncThunk(
    'container/portfolio/doGetAbout', // Nome dell'azione.
    async () => await getAbout() // Chiamata al servizio per ottenere il contenuto "About".
);

const doGetHardskill = createAsyncThunk(
    'container/portfolio/doGetHardskill', // Nome dell'azione.
    async () => await getHardskill() // Chiamata al servizio per ottenere le "Hard Skills".
);

const doGetSoftskill = createAsyncThunk(
    'container/portfolio/doGetSoftskill', // Nome dell'azione.
    async () => await getSoftskill() // Chiamata al servizio per ottenere le "Soft Skills".
);

const doGetContacts = createAsyncThunk(
    'container/portfolio/doGetContacts', // Nome dell'azione.
    async () => await getContacts() // Chiamata al servizio per ottenere i contatti.
);

// ** Creazione dello slice Redux **
const slice = createSlice({
    name: 'container/portfolio', // Nome dello slice.
    initialState: {
        about: {
            occurrence: undefined, // Contenuto inizialmente non disponibile.
            status: STATUS.IDLE, // Stato iniziale.
            error: undefined, // Nessun errore iniziale.
        },
        hardskill: {
            occurrence: undefined,
            status: STATUS.IDLE,
            error: undefined,
        },
        softskill: {
            occurrence: undefined,
            status: STATUS.IDLE,
            error: undefined,
        },
        projects: {
            occurrences: [], // Nessun repository inizialmente.
            status: STATUS.IDLE,
            error: undefined,
        },
        contacts: {
            occurrence: undefined,
            status: STATUS.IDLE,
            error: undefined,
        },
    } as State, // Tipizzazione dello stato iniziale.
    reducers: {}, // Non ci sono azioni sincrone definite.
    extraReducers: (builder) => builder
        // Gestione dello stato per l'operazione "doGetRepositories".
        .addCase(doGetRepositories.pending, (state) => {
            state.projects.status = STATUS.LOADING; // Stato "loading" durante la richiesta.
        })
        .addCase(doGetRepositories.fulfilled, (state, action) => {
            state.projects.status = STATUS.SUCCESS; // Stato "success" se la richiesta ha successo.
            state.projects.occurrences = action.payload; // Salva i repository ottenuti.
        })
        .addCase(doGetRepositories.rejected, (state, action) => {
            state.projects.status = STATUS.FAILED; // Stato "failed" se la richiesta fallisce.
            state.projects.error = action.error.message; // Salva il messaggio di errore.
        })
        // Gestione dello stato per l'operazione "doGetAbout".
        .addCase(doGetAbout.pending, (state) => {
            state.about.status = STATUS.LOADING;
        })
        .addCase(doGetAbout.fulfilled, (state, action) => {
            state.about.status = STATUS.SUCCESS;
            state.about.occurrence = action.payload; // Salva il contenuto ottenuto.
        })
        .addCase(doGetAbout.rejected, (state, action) => {
            state.about.status = STATUS.FAILED;
            state.about.error = action.error.message;
        })
        // Gestione delle operazioni per Hard Skills, Soft Skills e Contacts segue la stessa logica.
        // Ogni stato (pending, fulfilled, rejected) è gestito individualmente.
        .addCase(doGetHardskill.pending, (state) => {
            state.hardskill.status = STATUS.LOADING;
        })
        .addCase(doGetHardskill.fulfilled, (state, action) => {
            state.hardskill.status = STATUS.SUCCESS;
            state.hardskill.occurrence = action.payload;
        })
        .addCase(doGetHardskill.rejected, (state, action) => {
            state.hardskill.status = STATUS.FAILED;
            state.hardskill.error = action.error.message;
        })
        .addCase(doGetSoftskill.pending, (state) => {
            state.softskill.status = STATUS.LOADING;
        })
        .addCase(doGetSoftskill.fulfilled, (state, action) => {
            state.softskill.status = STATUS.SUCCESS;
            state.softskill.occurrence = action.payload;
        })
        .addCase(doGetSoftskill.rejected, (state, action) => {
            state.softskill.status = STATUS.FAILED;
            state.softskill.error = action.error.message;
        })
        .addCase(doGetContacts.pending, (state) => {
            state.contacts.status = STATUS.LOADING;
        })
        .addCase(doGetContacts.fulfilled, (state, action) => {
            state.contacts.status = STATUS.SUCCESS;
            state.contacts.occurrence = action.payload;
        })
        .addCase(doGetContacts.rejected, (state, action) => {
            state.contacts.status = STATUS.FAILED;
            state.contacts.error = action.error.message;
        }),
});

// ** Esportazione delle azioni e del reducer **
export const actions = {
    ...slice.actions, // Esporta le azioni generate dallo slice.
    doGetRepositories,
    doGetAbout,
    doGetHardskill,
    doGetSoftskill,
    doGetContacts,
};

export default slice.reducer; // Esporta il reducer per l'integrazione nello store Redux.
