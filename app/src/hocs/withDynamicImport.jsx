import { Suspense, lazy } from 'react';
import _ from "lodash";


export default function withDynamicImport(path) {

    return {
        containers: (props) => {
            const Content = lazy(() => {
                return import(`./../containers/${path}/index.js`)
                    .then(module => module)
            });

            return <Suspense>
                <Content {...props} />
            </Suspense >

        },
        pages: (props) => {

            const Page = lazy(() => {
                return import(`./../pages/${path}/index.js`)
                    .then(module => module)
            });

            return <Suspense>
                <Page {...props} />
            </Suspense >

        }
    };
}