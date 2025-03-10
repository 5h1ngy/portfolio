export interface GitHubRepo<T = {}> {
    name: string;
    url: string;
    updated_at: string;
    license: null | T & {
        name: string;
    };
    topics: string[];
    description: null | string;
}