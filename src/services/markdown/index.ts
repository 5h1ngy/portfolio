import axios from "axios";
import { Response } from "../shared/types";

const basename = import.meta.env.VITE_BASENAME;

const URL_BASE = `${basename}/markdown`;

export async function getAbout(): Promise<Response<string>> {
    try {
        const { data } = await axios.get<string>(`${URL_BASE}/about.md`);

        return [data, null];
    } catch (error) {
        return [null, error];
    }
}

export async function getHardskill(): Promise<Response<string>> {
    try {
        const { data } = await axios.get<string>(`${URL_BASE}/hardskill.md`);

        return [data, null];
    } catch (error) {
        return [null, error];
    }
}

export async function getSoftskill(): Promise<Response<string>> {
    try {
        const { data } = await axios.get<string>(`${URL_BASE}/softskill.md`);

        return [data, null];
    } catch (error) {
        return [null, error];
    }
}
