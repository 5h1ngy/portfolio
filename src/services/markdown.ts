import axios from "axios"; // Importazione di Axios per effettuare richieste HTTP.

// Percorso base per accedere ai file Markdown.
const PATH = `${import.meta.env.VITE_BASENAME}/markdown`;

/**
 * Funzione per ottenere il contenuto del file "about.md".
 * 
 * @returns {Promise<string>} - Una promessa che risolve con il contenuto Markdown del file.
 */
export async function getAbout(): Promise<string> {
    try {
        let defaultQuery = `${PATH}/about.md`; // URL del file Markdown "about.md".
        const response = await axios.get<string>(defaultQuery); // Effettua una richiesta GET.

        return response.data; // Restituisce il contenuto del file.
    } catch (error) {
        console.error("Errore durante la chiamata al servizio", error); // Log dell'errore.

        throw new Error(<string>error); // Lancia un'eccezione con il messaggio di errore.
    }
}

/**
 * Funzione per ottenere il contenuto del file "contacts.md".
 * 
 * @returns {Promise<string>} - Una promessa che risolve con il contenuto Markdown del file.
 */
export async function getContacts(): Promise<string> {
    try {
        let defaultQuery = `${PATH}/contacts.md`; // URL del file Markdown "contacts.md".
        const response = await axios.get<string>(defaultQuery); // Effettua una richiesta GET.

        return response.data; // Restituisce il contenuto del file.
    } catch (error) {
        console.error("Errore durante la chiamata al servizio", error); // Log dell'errore.

        throw new Error(<string>error); // Lancia un'eccezione con il messaggio di errore.
    }
}

/**
 * Funzione per ottenere il contenuto del file "hardskill.md".
 * 
 * @returns {Promise<string>} - Una promessa che risolve con il contenuto Markdown del file.
 */
export async function getHardskill(): Promise<string> {
    try {
        let defaultQuery = `${PATH}/hardskill.md`; // URL del file Markdown "hardskill.md".
        const response = await axios.get<string>(defaultQuery); // Effettua una richiesta GET.

        return response.data; // Restituisce il contenuto del file.
    } catch (error) {
        console.error("Errore durante la chiamata al servizio", error); // Log dell'errore.

        throw new Error(<string>error); // Lancia un'eccezione con il messaggio di errore.
    }
}

/**
 * Funzione per ottenere il contenuto del file "softskill.md".
 * 
 * @returns {Promise<string>} - Una promessa che risolve con il contenuto Markdown del file.
 */
export async function getSoftskill(): Promise<string> {
    try {
        let defaultQuery = `${PATH}/softskill.md`; // URL del file Markdown "softskill.md".
        const response = await axios.get<string>(defaultQuery); // Effettua una richiesta GET.

        return response.data; // Restituisce il contenuto del file.
    } catch (error) {
        console.error("Errore durante la chiamata al servizio", error); // Log dell'errore.

        throw new Error(<string>error); // Lancia un'eccezione con il messaggio di errore.
    }
}
