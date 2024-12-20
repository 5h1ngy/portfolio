import { configureStore } from '@reduxjs/toolkit';

import containerNewest from './containerNewest';
import { actions as containerNewestActions } from "./containerNewest"

export const actions = {
    containerNewest: containerNewestActions,
}

const reducer = {
    containerNewest,
};

const store = configureStore({
    reducer,
});

export type State = ReturnType<typeof store.getState>;

export default store;
