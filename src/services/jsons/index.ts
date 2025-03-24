import axios from "axios";
import { Response } from "../shared/types";

const basename = import.meta.env.VITE_BASENAME.startsWith("http")
    ? new URL(import.meta.env.VITE_BASENAME).pathname
    : import.meta.env.VITE_BASENAME;

const URL_BASE = `${basename}/jsons`;

export async function getContacts(): Promise<Response<Record<string, string>>> {
    try {
        const { data } = await axios.get<Record<string, string>>(`${URL_BASE}/contacts.json`);

        return [data, null];
    } catch (error) {
        return [null, error];
    }
}
