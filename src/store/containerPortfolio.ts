import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRepositories } from '@/services/github';
import { getAbout, getHardskill, getSoftskill } from '@/services/markdown';
import { Repository } from "@/services/github.types";

export enum STATUS { IDLE, LOADING, SUCCESS, FAILED }

export interface State {
    about: {
        occurrence?: string,
        status: STATUS,
        error?: any,
    },
    hardskill: {
        occurrence?: string,
        status: STATUS,
        error?: any,
    },
    softskill: {
        occurrence?: string,
        status: STATUS,
        error?: any,
    },
    projects: {
        occurrences?: Repository[],
        status: STATUS,
        error?: any,
    },
}

const doGetRepositories = createAsyncThunk(
    'container/portfolio/doGetRepositories',
    async () => await getRepositories()
);

const doGetAbout = createAsyncThunk(
    'container/portfolio/doGetAbout',
    async () => await getAbout()
);

const doGetHardskill = createAsyncThunk(
    'container/portfolio/doGetHardskill',
    async () => await getHardskill()
);

const doGetSoftskill = createAsyncThunk(
    'container/portfolio/doGetSoftskill',
    async () => await getSoftskill()
);

const slice = createSlice({
    name: 'container/portfolio',
    initialState: {
        about: {
            occurrence: undefined,
            status: STATUS.IDLE,
            error: undefined,
        },
        hardskill: {
            occurrence: undefined,
            status: STATUS.IDLE,
            error: undefined,
        },
        softskill: {
            occurrence: undefined,
            status: STATUS.IDLE,
            error: undefined,
        },
        projects: {
            occurrences: [],
            status: STATUS.IDLE,
            error: undefined,
        },
    } as State,
    reducers: {},
    extraReducers: (builder) => builder
        // GitHub
        .addCase(doGetRepositories.pending, (state) => {
            state.projects.status = STATUS.LOADING;
        })
        .addCase(doGetRepositories.fulfilled, (state, action) => {
            state.projects.status = STATUS.SUCCESS;
            state.projects.occurrences = action.payload;
        })
        .addCase(doGetRepositories.rejected, (state, action) => {
            state.projects.status = STATUS.FAILED;
            state.projects.error = action.error.message;
        })
        // About .MD
        .addCase(doGetAbout.pending, (state) => {
            state.about.status = STATUS.LOADING;
        })
        .addCase(doGetAbout.fulfilled, (state, action) => {
            state.about.status = STATUS.SUCCESS;
            state.about.occurrence = action.payload;
        })
        .addCase(doGetAbout.rejected, (state, action) => {
            state.about.status = STATUS.FAILED;
            state.about.error = action.error.message;
        })
        // hardskill .MD
        .addCase(doGetHardskill.pending, (state) => {
            state.hardskill.status = STATUS.LOADING;
        })
        .addCase(doGetHardskill.fulfilled, (state, action) => {
            state.hardskill.status = STATUS.SUCCESS;
            state.hardskill.occurrence = action.payload;
        })
        .addCase(doGetHardskill.rejected, (state, action) => {
            state.hardskill.status = STATUS.FAILED;
            state.hardskill.error = action.error.message;
        })
        // Softskill .MD
        .addCase(doGetSoftskill.pending, (state) => {
            state.softskill.status = STATUS.LOADING;
        })
        .addCase(doGetSoftskill.fulfilled, (state, action) => {
            state.softskill.status = STATUS.SUCCESS;
            state.softskill.occurrence = action.payload;
        })
        .addCase(doGetSoftskill.rejected, (state, action) => {
            state.softskill.status = STATUS.FAILED;
            state.softskill.error = action.error.message;
        }),
});

export const actions = {
    ...slice.actions,
    doGetRepositories,
    doGetAbout,
    doGetHardskill,
    doGetSoftskill,
};

export default slice.reducer;
