import { STATUS } from "react-goblin-system/store/shared";

export type Repository = {
    name: string;
    updated_at: string | null;
    license: null | { name: string; };
    topics: string[];
    description: string | null;
    html_url: string;
    homepage: string | null;
}

export interface State {
    about: {
        occurrence?: string;
        status: STATUS;
        error?: any;
    },
    hardskill: {
        occurrence?: string;
        status: STATUS;
        error?: any;
    },
    softskill: {
        occurrence?: string;
        status: STATUS;
        error?: any;
    },
    selfHosted: {
        occurrences: Repository[];
        status: STATUS;
        error?: any;
    },
    projects: {
        occurrences: Record<string, Repository[]>;
        status: STATUS;
        error?: any;
    },
    contacts: {
        occurrence?: Record<string, string>;
        status: STATUS;
        error?: any;
    },
}