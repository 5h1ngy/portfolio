import { Suspense, lazy } from 'react';
import _ from "lodash";

export function withDynamiContainer(path) {
    const Component = lazy(() => import(`./../containers/${path}/index.js`));

    return <Suspense>
        <Component />
    </Suspense>
}

export function withDynamicPage(path) {
    const Page = lazy(() => import(`./../pages/${path}/index.js`));

    return <Suspense>
        <Page />
    </Suspense>
}

export default {
    container: withDynamiContainer,
    page: withDynamicPage
};