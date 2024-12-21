import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRepositories } from '@/services/github';
import { Repository } from "@/services/github.types";

export enum STATUS { IDLE, LOADING, SUCCESS, FAILED }

export interface State {
    repositories: Repository[],
    status: STATUS;
    error: any;
}

const doGetRepositories = createAsyncThunk(
    'container/portfolio/doGetRepositories',
    async () => await getRepositories()
);

const slice = createSlice({
    name: 'container/portfolio',
    initialState: {
        status: STATUS.IDLE,
        error: null,
        repositories: [],
    } as State,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(doGetRepositories.pending, (state) => {
                state.status = STATUS.LOADING;
            })
            .addCase(doGetRepositories.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.repositories = action.payload;
            })
            .addCase(doGetRepositories.rejected, (state, action) => {
                state.status = STATUS.FAILED;
                state.error = action.error.message;
            });
    },
});

export const actions = {
    ...slice.actions,
    doGetRepositories,
};

export default slice.reducer;
