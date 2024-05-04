import { configureStore, combineReducers } from "@reduxjs/toolkit";

import * as containersFileSystemNavigator from "@app/store/containers/fileSystemNavigator.js";
import * as pagesDashboard from "@app/store/pages/dashboard.js";

const store = configureStore({
    reducer: combineReducers({
        [containersFileSystemNavigator.name]: containersFileSystemNavigator.reducer,
        [pagesDashboard.name]: pagesDashboard.reducer,
    })
});

export default store;