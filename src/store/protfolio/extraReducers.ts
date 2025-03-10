import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { STATUS } from 'react-goblin-system/store/shared';
import { State } from "./types";
import * as thunks from './asyncThunks';

export const extraReducers = (builder: ActionReducerMapBuilder<State>) => builder

    // ======================================================
    // Repositories (Projects)
    // ======================================================
    .addCase(thunks.doGetRepositories.pending, (state) => {
        state.projects.status = STATUS.LOADING;
    })
    .addCase(thunks.doGetRepositories.fulfilled, (state, action) => {
        state.projects.status = STATUS.SUCCESS;
        state.projects.occurrences = action.payload;
    })
    .addCase(thunks.doGetRepositories.rejected, (state, action) => {
        state.projects.status = STATUS.FAILED;
        state.projects.error = action.error.message;
    })

    // ======================================================
    // About
    // ======================================================
    .addCase(thunks.doGetAbout.pending, (state) => {
        state.about.status = STATUS.LOADING;
    })
    .addCase(thunks.doGetAbout.fulfilled, (state, action) => {
        state.about.status = STATUS.SUCCESS;
        state.about.occurrence = action.payload;
    })
    .addCase(thunks.doGetAbout.rejected, (state, action) => {
        state.about.status = STATUS.FAILED;
        state.about.error = action.error.message;
    })

    // ======================================================
    // Hardskill
    // ======================================================
    .addCase(thunks.doGetHardskill.pending, (state) => {
        state.hardskill.status = STATUS.LOADING;
    })
    .addCase(thunks.doGetHardskill.fulfilled, (state, action) => {
        state.hardskill.status = STATUS.SUCCESS;
        state.hardskill.occurrence = action.payload;
    })
    .addCase(thunks.doGetHardskill.rejected, (state, action) => {
        state.hardskill.status = STATUS.FAILED;
        state.hardskill.error = action.error.message;
    })

    // ======================================================
    // Softskill
    // ======================================================
    .addCase(thunks.doGetSoftskill.pending, (state) => {
        state.softskill.status = STATUS.LOADING;
    })
    .addCase(thunks.doGetSoftskill.fulfilled, (state, action) => {
        state.softskill.status = STATUS.SUCCESS;
        state.softskill.occurrence = action.payload;
    })
    .addCase(thunks.doGetSoftskill.rejected, (state, action) => {
        state.softskill.status = STATUS.FAILED;
        state.softskill.error = action.error.message;
    })

    // ======================================================
    // Contacts
    // ======================================================
    .addCase(thunks.doGetContacts.pending, (state) => {
        state.contacts.status = STATUS.LOADING;
    })
    .addCase(thunks.doGetContacts.fulfilled, (state, action) => {
        state.contacts.status = STATUS.SUCCESS;
        state.contacts.occurrence = action.payload;
    })
    .addCase(thunks.doGetContacts.rejected, (state, action) => {
        state.contacts.status = STATUS.FAILED;
        state.contacts.error = action.error.message;
    });
