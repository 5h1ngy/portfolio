import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { STATUS } from 'react-goblin-system/store/shared';
import { Repository, State } from "./types";
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

        const occurrencesByCategory: Record<string, Repository[]> = {
            "Infrastructure": [],
            "Command Line Interface": [],
            "Frontend": [],
            "Backend": [],
            "Videogames": [],
        };

        for (const repo of action.payload as Repository[]) {
            if (repo.name.startsWith("infra-"))
                occurrencesByCategory['Infrastructure'].push(repo);
            else if (repo.name.startsWith("cli-"))
                occurrencesByCategory["Command Line Interface"].push(repo);
            else if (repo.name.startsWith("fe-") && !repo.name.startsWith("fe-phaser") && !repo.name.startsWith("fe-pixijs"))
                occurrencesByCategory['Frontend'].push(repo);
            else if (repo.name.startsWith("be-"))
                occurrencesByCategory['Backend'].push(repo);
            else if (repo.name.startsWith("fe-phaser"))
                occurrencesByCategory['Videogames'].push(repo);
            else {
                // If you need an "Other" array for anything else:
                // occurrencesByCategory.Other.push(repo);
            }
        }

        state.projects.occurrences = occurrencesByCategory;
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
