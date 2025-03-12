import { createAsyncThunk } from '@reduxjs/toolkit';
import { STATUS } from "react-goblin-system/store/shared";
import * as apiGithub from '@/services/github';
import * as apiMarkdown from '@/services/markdown';
import { Repository, State } from './types';

export const doGetRepositories = createAsyncThunk<Repository[], void>(
    'slice/portfolio/doGetRepositories',
    async (_, { rejectWithValue }) => {
        const [response, error] = await apiGithub.getRepositories();
        if (!response) return rejectWithValue(error);
        return response;
    },
    {
        condition: (_, { getState }) => {
            const { portfolioSlice } = getState() as { portfolioSlice: State };
            const { status } = portfolioSlice.projects;
            if (status === STATUS.SUCCESS || status === STATUS.LOADING) return false;
            return true;
        },
    }
);

export const doGetAbout = createAsyncThunk<string, void>(
    'slice/portfolio/doGetAbout',
    async (_, { rejectWithValue }) => {
        const [response, error] = await apiMarkdown.getAbout();
        if (!response) return rejectWithValue(error);
        return response;
    },
    {
        condition: (_, { getState }) => {
            const { portfolioSlice } = getState() as { portfolioSlice: State };
            const { status } = portfolioSlice.about;
            if (status === STATUS.SUCCESS || status === STATUS.LOADING) return false;
            return true;
        },
    }
);

export const doGetHardskill = createAsyncThunk<string, void>(
    'slice/portfolio/doGetHardskill',
    async (_, { rejectWithValue }) => {
        const [response, error] = await apiMarkdown.getHardskill();
        if (!response) return rejectWithValue(error);
        return response;
    },
    {
        condition: (_, { getState }) => {
            const { portfolioSlice } = getState() as { portfolioSlice: State };
            const { status } = portfolioSlice.hardskill;
            if (status === STATUS.SUCCESS || status === STATUS.LOADING) return false;
            return true;
        },
    }
);

export const doGetSoftskill = createAsyncThunk<string, void>(
    'slice/portfolio/doGetSoftskill',
    async (_, { rejectWithValue }) => {
        const [response, error] = await apiMarkdown.getSoftskill();
        if (!response) return rejectWithValue(error);
        return response;
    },
    {
        condition: (_, { getState }) => {
            const { portfolioSlice } = getState() as { portfolioSlice: State };
            const { status } = portfolioSlice.softskill;
            if (status === STATUS.SUCCESS || status === STATUS.LOADING) return false;
            return true;
        },
    }
);

export const doGetContacts = createAsyncThunk<string, void>(
    'slice/portfolio/doGetContacts',
    async (_, { rejectWithValue }) => {
        const [response, error] = await apiMarkdown.getContacts();
        if (!response) return rejectWithValue(error);
        return response;
    },
    {
        condition: (_, { getState }) => {
            const { portfolioSlice } = getState() as { portfolioSlice: State };
            const { status } = portfolioSlice.contacts;
            if (status === STATUS.SUCCESS || status === STATUS.LOADING) return false;
            return true;
        },
    }
);
