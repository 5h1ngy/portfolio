import { createAsyncThunk, } from '@reduxjs/toolkit';

import * as apiGithub from '@/services/github';
import * as apiMarkdown from '@/services/markdown';
import { Repository } from './types';

export const doGetRepositories = createAsyncThunk<Repository[], void>(
    'slice/portfolio/doGetRepositories',
    async (_: void, { rejectWithValue }) => apiGithub.getRepositories()
        .then(([response, error]) => !response ? rejectWithValue(error) : response)
);

export const doGetAbout = createAsyncThunk<string, void>(
    'slice/portfolio/doGetAbout',
    async (_: void, { rejectWithValue }) => apiMarkdown.getAbout()
        .then(([response, error]) => !response ? rejectWithValue(error) : response)
);

export const doGetHardskill = createAsyncThunk<string, void>(
    'slice/portfolio/doGetHardskill',
    async (_: void, { rejectWithValue }) => apiMarkdown.getHardskill()
        .then(([response, error]) => !response ? rejectWithValue(error) : response)
);

export const doGetSoftskill = createAsyncThunk<string, void>(
    'slice/portfolio/doGetSoftskill',
    async (_: void, { rejectWithValue }) => apiMarkdown.getSoftskill()
        .then(([response, error]) => !response ? rejectWithValue(error) : response)
);

export const doGetContacts = createAsyncThunk<string, void>(
    'slice/portfolio/doGetContacts',
    async (_: void, { rejectWithValue }) => apiMarkdown.getContacts()
        .then(([response, error]) => !response ? rejectWithValue(error) : response)
);