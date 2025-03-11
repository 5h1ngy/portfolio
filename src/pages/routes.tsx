import { RouteObject, Outlet, Navigate } from "react-router-dom"

import Error from "react-goblin-system/layouts/Error"
import Transformer from "react-goblin-system/layouts/Transformer"

import Landing from "@/layouts/Landing";
import { route as homePageRoute } from "@/pages/Home";

export const routes: RouteObject[] = [
    {
        id: "root",
        path: "/",
        errorElement: <Error />,
        element: <Transformer
            children={<Outlet />}
            // logo={`${import.meta.env.VITE_BASENAME}/assets/logo.png`}
            background={{
                opacity: 60,
                image: `/assets/background_white.png`,
                imageDark: `/assets/background_dark.png`,
            }}
            navigationScroll={false}
            navbarItems={[
                { label: "About", value: '/about' },
                { label: "Skills", value: '/skills' },
                { label: "Projects", value: '/projects' },
                { label: "Contacts", value: '/contacts' },
                // { icon: <HiHome />, label: "About", value: '/about' },
                // { icon: <HiHome />, label: "Profile", value: '/dashboard/profile/overview', group: "PROFILE" },
                // { icon: <HiHome />, label: "Users", value: '/dashboard/users/overview', group: "USERS" },
            ]}
        />,
        // element: <Landing
        //     logo={'/assets/logo.png'}
        //     children={<Outlet />}
        //     navbarItems={[
        //         { label: "About", value: '/about' },
        //         { label: "Skills", value: '/skills' },
        //         { label: "Projects", value: '/projects' },
        //         { label: "Contacts", value: '/contacts' },
        //     ]}
        // />,
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
