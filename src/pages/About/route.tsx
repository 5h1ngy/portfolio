import { ActionFunction, LoaderFunction } from "react-router-dom";

import store from "@/store";
import { asyncActions } from "@/store";
import { withDynamicPages } from "@/hocs/withDynamicImport";
import Loading from "react-goblin-system/layouts/Loading"
import { PrivateRoute } from "react-goblin-system/providers/Auth"

export const loader: LoaderFunction | undefined =
    async () => {
        await store.dispatch(asyncActions.aboutAsyncActions.doGetAbout());
        return null;
    };

export const action: ActionFunction | undefined =
    undefined;

export const element: React.ReactElement =
    <PrivateRoute render={withDynamicPages({ pageName: 'About', loader: <Loading /> })} />