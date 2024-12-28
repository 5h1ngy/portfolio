import axios from "axios"; // Importazione di Axios per effettuare chiamate HTTP.
import { Repository } from "./github.types"; // Tipo per rappresentare un repository GitHub.
import mockRepositories from "./github.repositories.mock"; // Mock dei dati dei repository.

// Verifica se l'applicazione è in modalità mock, basata su una variabile di ambiente.
const isMockMode = import.meta.env.VITE_USE_MOCK === "true";

/**
 * Funzione per ottenere i repository GitHub.
 * 
 * @returns {Promise<Repository[]>} - Una promessa che risolve con un array di repository.
 */
export async function getRepositories(): Promise<Repository[]> {
    // Verifica se è attiva la modalità mock.
    if (isMockMode) {
        console.log("Modalità Mock attiva. Restituisco dati mock.");
        // Restituisce i dati mock simulando un ritardo di 1 secondo.
        return new Promise((resolve) => setTimeout(() => resolve(mockRepositories.occurrences), 1000));
    }

    try {
        // URL predefinito per la chiamata API.
        let defaultQuery = `/api/be-node-portfolio/github/repos`;

        // Effettua una richiesta GET per ottenere i dati dei repository.
        const response = await axios.get(defaultQuery);

        // Mappa i dati restituiti, decodificando i link se presenti.
        return response.data.occurrences.map((repo: any) =>
            repo?.links
                ? { ...repo, links: JSON.parse(atob(repo.links)) } // Decodifica base64 per il campo "links".
                : { ...repo } // Restituisce il repository senza modifiche.
        );
    } catch (error) {
        // Log dell'errore in caso di fallimento della chiamata API.
        console.error("Errore durante la chiamata al servizio", error);

        // Lancia un'eccezione con il messaggio di errore.
        throw new Error(<string>error);
    }
}
