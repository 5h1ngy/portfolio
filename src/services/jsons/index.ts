import axios from "axios";
import { Response } from "../shared/types";

const URL_BASE = '/jsons';

export async function getContacts(): Promise<Response<string>> {
    try {
        const { data } = await axios.get<string>(`${URL_BASE}/contacts.json`);

        return [data, null];
    } catch (error) {
        return [null, error];
    }
}
