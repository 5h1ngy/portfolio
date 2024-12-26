import axios from "axios";
import { Repository } from "./github.types";
import mockRepositories from "./github.repositories.mock";

const isMockMode = import.meta.env.VITE_USE_MOCK === "true";

export async function getRepositories(): Promise<Repository[]> {

    if (isMockMode) {
        console.log("Modalità Mock attiva. Restituisco dati mock.");
        return new Promise((resolve) => setTimeout(() => resolve(mockRepositories.occurrences), 1000));
    }

    try {
        let defaultQuery = `/api/be-node-portfolio/github/repos`;
        const response = await axios.get(defaultQuery);

        return response.data.occurrences.map((repo: any) =>
            repo?.links
                ? { ...repo, links: JSON.parse(atob(repo.links)) }
                : { ...repo }
        );
    } catch (error) {
        console.error("Errore durante la chiamata al servizio", error);

        throw new Error(<string>error)
    }
}