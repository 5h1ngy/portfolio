import { createBrowserRouter } from 'react-router-dom';
import { withDynamiContainer, withDynamicPage } from '@app/hocs/withDynamic';

const routes = [
    {
        id: "root",
        path: "/",
        element: withDynamicPage('Landing'),
        children: [
            {
                id: "home",
                path: ':path/*',
                element: withDynamiContainer('Portfolio'),
            }
        ]
    }
];

const BrowserRouter = createBrowserRouter(routes);

export default BrowserRouter;
