/**
 * Definizione del tipo `Repository`.
 * 
 * Rappresenta un repository GitHub con proprietà dettagliate come ID, date di creazione/aggiornamento,
 * URL, titolo, argomenti associati, e altre informazioni opzionali.
 */
export type Repository = {
    _id: number; // Identificatore univoco del repository.
    created: string; // Data di creazione del repository in formato ISO.
    updated: string; // Data di ultimo aggiornamento del repository in formato ISO.
    url: string; // URL del repository (es. link a GitHub).
    title: string; // Titolo del repository.
    topics?: string[]; // (Opzionale) Lista di argomenti associati al repository.
    thumbnail?: string; // (Opzionale) URL dell'immagine di anteprima del repository.
    description?: string; // (Opzionale) Descrizione del repository.
    readme?: string; // (Opzionale) Contenuto del file README in formato stringa.
    links?: Record<string, string>; // (Opzionale) Mappa di link aggiuntivi (es. documentazione, demo, ecc.).
};