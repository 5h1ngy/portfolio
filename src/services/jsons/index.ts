import axios from "axios";
import { Response } from "../shared/types";

const URL_BASE = '/jsons';

export async function getContacts(): Promise<Response<Record<string, string>>> {
    try {
        const { data } = await axios.get<Record<string, string>>(`${URL_BASE}/contacts.json`);

        return [data, null];
    } catch (error) {
        return [null, error];
    }
}
