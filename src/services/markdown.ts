import axios from "axios";

const PATH = `${import.meta.env.VITE_BASENAME}/markdown`

export async function getAbout(): Promise<string> {

    try {
        let defaultQuery = `${PATH}/about.md`;
        const response = await axios.get<string>(defaultQuery);

        return response.data;
    } catch (error) {
        console.error("Errore durante la chiamata al servizio", error);

        throw new Error(<string>error)
    }
}

export async function getHardskill(): Promise<string> {

    try {
        let defaultQuery = `${PATH}/hardskill.md`;
        const response = await axios.get<string>(defaultQuery);

        return response.data;
    } catch (error) {
        console.error("Errore durante la chiamata al servizio", error);

        throw new Error(<string>error)
    }
}

export async function getSoftskill(): Promise<string> {

    try {
        let defaultQuery = `${PATH}/softskill.md`;
        const response = await axios.get<string>(defaultQuery);

        return response.data;
    } catch (error) {
        console.error("Errore durante la chiamata al servizio", error);

        throw new Error(<string>error)
    }
}