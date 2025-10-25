import axios from "axios";
import { GitHubRepo } from "./types";
import { getRepositoriesResponse } from "./mock";
import { Response } from "../shared/types";

const IS_MOCK = import.meta.env.VITE_MODE === "mock";

const HEADERS = {
    ...import.meta.env.VITE_MODE === "dev"
        ? {
            ["X-GitHub-Api-Version"]: "2022-11-28",
            ["Accept"]: "application/vnd.github+json",
            ["Authorization"]: `Bearer ${import.meta.env.VITE_GITHUB_BEARER}`,
        }
        : {
            Accept: 'application/vnd.github+json',
            // opzionalmente, puoi aggiungere un User-Agent se richiesto:
            'User-Agent': 'MyApp/1.0'
        }
}

const URL_REPOS = `https://api.github.com/users/${import.meta.env.VITE_GITHUB_USER}/repos`

function transformRepositories<T, K extends keyof T>(data: T[], fields: readonly K[]): Pick<T, K>[] {
    return data.map((item) => fields.reduce((acc, field) => {
        acc[field] = item[field];
        return acc;
    }, {} as Pick<T, K>));
}

export async function getRepositories(): Promise<Response<GitHubRepo[]>> {
    const FIELDS = ['name', 'html_url', 'homepage', 'license', 'topics', 'description', 'updated_at'] as const;

    if (IS_MOCK) {
        const { data } = await getRepositoriesResponse

        return ([
            transformRepositories<GitHubRepo, typeof FIELDS[number]>(data, FIELDS),
            null
        ])
    }

    try {
        const { data } = await axios.get<GitHubRepo[]>(URL_REPOS, { headers: HEADERS })

        return [
            transformRepositories<GitHubRepo, typeof FIELDS[number]>(data, FIELDS),
            null
        ];

    } catch (error) {
        return [
            null,
            error
        ]
    }
}
