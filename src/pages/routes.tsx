import { RouteObject } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";

import Error from "react-goblin-system/layouts/Error"
import Loading from "react-goblin-system/layouts/Loading"

import withDynamicImport from "@/hocs/withDynamicImport";
import Landing from "@/layouts/Landing";
// import { route as aboutPageRoute } from "@/pages/About";

export const routes: RouteObject[] = [
    {
        id: "root",
        path: "/",
        errorElement: <Error />,
        element: <Landing
            logo={`${import.meta.env.VITE_BASENAME}/assets/logo.png`}
            children={<Outlet />}
            navbarItems={[
                { label: "About", value: '/about' },
                { label: "Skills", value: '/skills' },
                { label: "Projects", value: '/projects' },
                { label: "Contacts", value: '/contacts' },
            ]}
        />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />
            },
            {
                id: "home",
                path: 'home',
                element: withDynamicImport('Home', <Loading />).containers(),
                errorElement: <Error />,
            },
            {
                id: "about",
                path: 'about',
                element: withDynamicImport('Home', <Loading />).containers(),
                errorElement: <Error />,
            },
            {
                id: "skills",
                path: 'skills',
                element: withDynamicImport('Home', <Loading />).containers(),
                errorElement: <Error />,
            },
            {
                id: "projects",
                path: 'projects',
                element: withDynamicImport('Home', <Loading />).containers(),
                errorElement: <Error />,
            },
            {
                id: "contacts",
                path: 'contacts',
                element: withDynamicImport('Home', <Loading />).containers(),
                errorElement: <Error />,
            }
        ]
    }
];

export default routes;
