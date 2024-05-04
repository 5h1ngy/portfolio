import _ from 'lodash';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "@app/services/NFS";

const initialState = {
    loading: false,
    currentFolder: '',
    occurrences: [],
}

const getNFS = createAsyncThunk(
    'containers/fileSystemNavigator/GET.fileSystem',
    async (path) => await api.getNFS(path)
)

const actionsMap = {
    setCurrentFolder: {
        declaration: (folder) => {
            return { payload: { folder } }
        },
        reducer: (state, action) => {
            state.currentFolder = action.payload.folder
        },
    },
    getNFS: {
        pending: (state, action) => {
            state.loading = true;
        },
        fulfilled: (state, action) => {
            state.loading = false;
            state.currentFolder = action.payload.folder;
            state.occurrences = action.payload.items;
        },
        rejected: (state, action) => {
            state.loading = false;
            state.occurrences = [];
        },
    },
}

const store = createSlice({
    name: 'containers/fileSystemNavigator',
    initialState,
    reducers: (create) => ({
        setCurrentFolder: create.preparedReducer(
            actionsMap.setCurrentFolder.declaration,
            actionsMap.setCurrentFolder.reducer
        )
    }),
    extraReducers: (builder) => {
        builder.addCase(getNFS.pending, actionsMap.getNFS.pending)
        builder.addCase(getNFS.fulfilled, actionsMap.getNFS.fulfilled)
        builder.addCase(getNFS.rejected, actionsMap.getNFS.rejected)
    }
});

export const actions = {
    ...store.actions,
    getNFS,
};

export const { reducer, name } = store;