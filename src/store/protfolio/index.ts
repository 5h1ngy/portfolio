import { createSlice } from '@reduxjs/toolkit';

import { reducers } from './reducers';
import { initialState } from './initialState';
import { extraReducers } from './extraReducers';
import * as thunks from './asyncThunks';

const slice = createSlice({
    name: 'slice/portfolio',
    initialState,
    reducers,
    extraReducers,
});

export const portfolioActions = slice.actions

export const portfolioAsyncActions = {
    ...thunks,
};

export const portfolioSlice = slice.reducer;

