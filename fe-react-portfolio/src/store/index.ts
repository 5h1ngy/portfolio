import { configureStore } from '@reduxjs/toolkit';

import { portfolioSlice, portfolioActions, portfolioAsyncActions } from './protfolio';

const reducer = {
    portfolioSlice,
};

export const actions = {
    portfolioActions,
}

export const asyncActions = {
    portfolioAsyncActions,
}

const store = configureStore({
    reducer
});

export type Dispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export default store;