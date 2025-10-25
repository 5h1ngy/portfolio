export interface GitHubRepo<T = {}> {
    name: string;
    updated_at: string | null;
    license: null | T & { name: string; };
    topics: string[];
    description: string | null;
    html_url: string;
    homepage: string | null;
}