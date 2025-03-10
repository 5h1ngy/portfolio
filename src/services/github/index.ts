import axios from "axios";
import { GitHubRepo } from "./types";
import { getRepositoriesResponse } from "./mock";
import { Response } from "../shared/types";

const IS_MOCK = import.meta.env.VITE_USE_MOCK === "true";

const HEADERS = {
    ["X-GitHub-Api-Version"]: "2022-11-28",
    ["Accept"]: "application/vnd.github+json",
    ["Authorization"]: `Bearer ${import.meta.env.VITE_GITHUB_BEARER}`,
}

const URL_REPOS = `https://api.github.com/users/${import.meta.env.VITE_GITHUB_USER}/repos`

function transformRepositories<T, K extends keyof T>(data: T[], fields: readonly K[]): Pick<T, K>[] {
    return data.map((item) => fields.reduce((acc, field) => {
        acc[field] = item[field];
        return acc;
    }, {} as Pick<T, K>));
}

export async function getRepositories(): Promise<Response<GitHubRepo[]>> {
    const FIELDS = ['name', 'url', 'license', 'topics', 'description', 'updated_at'] as const;

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
