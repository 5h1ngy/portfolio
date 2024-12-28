import { RouteObject } from "react-router-dom"
import { Navigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";

import withDynamicImport from "@/hocs/withDynamicImport";
import Error from "@/pages/Error"
import Loading from "@/pages/Loading"

const routes: RouteObject[] = [
    {
        id: "root",
        path: "/",
        element: withDynamicImport('Landing', <Loading />).pages({
            logo: `${import.meta.env.VITE_BASENAME}/assets/logo.png`,
            children: <Outlet />,
            navbarItems: [
                { label: "About", value: '/about' },
                { label: "Skills", value: '/skills' },
                { label: "Projects", value: '/projects' },
            ],
        }),
        errorElement: <Error />,
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