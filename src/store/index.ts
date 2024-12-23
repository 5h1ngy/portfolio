import { configureStore } from '@reduxjs/toolkit';

import containerPortfolio from './containerPortfolio';
import { actions as containerPortfolioActions } from "./containerPortfolio"

export const actions = {
    containerPortfolio: containerPortfolioActions,
}

const reducer = {
    containerPortfolio: containerPortfolio,
};

const store = configureStore({
    reducer,
});

export type State = ReturnType<typeof store.getState>;

export default store;
