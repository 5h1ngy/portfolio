import { STATUS } from 'react-goblin-system/store/shared';
import { State } from "./types";

export const initialState: State = {
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
    selfHosted: {
        occurrences: [],
        status: STATUS.IDLE,
        error: undefined,
    },
    projects: {
        occurrences: {},
        status: STATUS.IDLE,
        error: undefined,
    },
    contacts: {
        occurrence: undefined,
        status: STATUS.IDLE,
        error: undefined,
    },
} 