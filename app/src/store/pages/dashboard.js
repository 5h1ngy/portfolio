import _ from 'lodash';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navbarMode: 'FULL',
    header: {
        multipleSwitch: {
            options: {
                enableHiddenFiles: false
            },
            switchOptions: {
                enableViewModeGrid: false,
                enableViewModeList: false
            },
        }
    },
    navbar: {
        navigation: {
            home: false,
            documents: false,
            images: false,
            music: false,
            work: false,
        }
    },
    body: {
        actionBar: {
            navigation: [],
        }
    },
}

const actionsMap = {
    setNavbarMode: {
        declaration: (mode = "DRAWER") => {
            return { payload: { mode } }
        },
        reducer: (state, action) => {
            state.navbarMode = action.payload.mode
        },
    },
    setHeaderOptions: {
        declaration: (key, value) => {
            return { payload: { key, value } }
        },
        reducer: (state, action) => {
            state.header.multipleSwitch.options = _.map(state.header.multipleSwitch.options, (enable, key) => {
                return key === action.payload.key
                    ? { [action.payload.key]: action.payload.value }
                    : { [key]: !action.payload.value }
            }).reduce((acc, asd) => {
                return ({ ...acc, ...asd })
            }, {})
        },
    },
    setHeaderSwitchOptions: {
        declaration: (key, value) => {
            return { payload: { key, value } }
        },
        reducer: (state, action) => {
            state.header.multipleSwitch.switchOptions = _.map(state.header.multipleSwitch.switchOptions, (enable, key) => {
                return key === action.payload.key
                    ? { [action.payload.key]: action.payload.value }
                    : { [key]: !action.payload.value }
            }).reduce((acc, obj) => {
                return ({ ...acc, ...obj })
            }, {})
        },
    },
    setNavbarNavigation: {
        declaration: (key, value) => {
            return { payload: { key, value } }
        },
        reducer: (state, action) => {
            state.navbar.navigation = _.map(state.navbar.navigation, (enable, key) => {
                return key === action.payload.key
                    ? { [action.payload.key]: action.payload.value }
                    : { [key]: !action.payload.value }
            }).reduce((acc, obj) => {
                return ({ ...acc, ...obj })
            }, {})
        },
    },
    setBodyActionbarNavigation: {
        declaration: (navigation) => {
            return { payload: { navigation } }
        },
        reducer: (state, action) => {
            state.body.actionBar.navigation = action.payload.navigation
        },
    },
}

const store = createSlice({
    name: 'pages/Dashboard',
    initialState,
    reducers: (create) => ({
        setNavbarMode: create.preparedReducer(
            actionsMap.setNavbarMode.declaration,
            actionsMap.setNavbarMode.reducer
        ),
        setHeaderOptions: create.preparedReducer(
            actionsMap.setHeaderOptions.declaration,
            actionsMap.setHeaderOptions.reducer
        ),
        setHeaderSwitchOptions: create.preparedReducer(
            actionsMap.setHeaderSwitchOptions.declaration,
            actionsMap.setHeaderSwitchOptions.reducer
        ),
        setNavbarNavigation: create.preparedReducer(
            actionsMap.setNavbarNavigation.declaration,
            actionsMap.setNavbarNavigation.reducer
        ),
        setBodyActionbarNavigation: create.preparedReducer(
            actionsMap.setBodyActionbarNavigation.declaration,
            actionsMap.setBodyActionbarNavigation.reducer
        ),
    })
});

export const actions = {
    ...store.actions,
};

export const { reducer, name } = store;