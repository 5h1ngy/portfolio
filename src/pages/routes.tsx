import { RouteObject, Outlet, Navigate } from "react-router-dom"

import Error from "react-goblin-system/layouts/Error"

import Landing from "@/layouts/Landing";
import { route as homePageRoute } from "@/pages/Home";

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
                id: "ROOT_CHILD_HOME",
                path: 'home',
                ...homePageRoute,
            },
            {
                id: "HOME_ABOUT",
                path: 'about',
                ...homePageRoute,
            },
            {
                id: "HOME_SKILLS",
                path: 'skills',
                ...homePageRoute,
            },
            {
                id: "HOME_PROJECTS",
                path: 'projects',
                ...homePageRoute,
            },
            {
                id: "HOME_CONTACTS",
                path: 'contacts',
                ...homePageRoute,
            },
        ]
    }
];

export default routes;
