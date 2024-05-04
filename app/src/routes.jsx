import { createBrowserRouter } from 'react-router-dom';

import config from '@app/assets/config.jsonc';
import withDynamicImport from '@app/hocs/withDynamicImport';

const routes = [
    {
        id: "root",
        path: "/",
        element: withDynamicImport('Dashboard').pages(),
        errorElement: <></>,
        loader: () => ({ config }),
        children: [
            {
                id: "file-system-navigator",
                path: ':path/*',
                element: withDynamicImport('FileSystemNavigator').containers(),
                errorElement: <></>,
            }
        ]
    }
];

const BrowserRouter = createBrowserRouter(routes);

export default BrowserRouter;
