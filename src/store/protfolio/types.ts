import { STATUS } from "react-goblin-system/store/shared";

export type Repository = {
    name: string;
    url: string;
    updated_at: string;
    license: null | {
        name: string;
    };
    topics: string[];
    description: null | string;
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