import { RouteObject, Outlet, Navigate } from "react-router-dom"

import Error from "react-goblin-system/layouts/Error"
import Transformer from "react-goblin-system/layouts/Transformer"

import { route as homePageRoute } from "@/pages/Home";

export const routes: RouteObject[] = [
    {
        id: "ROOT",
        path: "/",
        errorElement: <Error />,
        element: <Transformer
            children={<Outlet />}
            logo={"/assets/logo.png"}
            navigationScroll={true}
            background={{
                opacity: 60,
                image: "/assets/background_white.png",
                imageDark: "/assets/background_dark.png",
            }}
            navbarItems={[
                { label: "About", value: "/about" },
                { label: "Skills", value: "/skills" },
                { label: "Projects", value: "/projects" },
                { label: "Contacts", value: "/contacts" },
            ]}
        />,
        children: [
            { index: true, element: <Navigate to="/home" replace /> },
            { id: "ROOT_CHILD_HOME", path: "home", ...homePageRoute, },
            { id: "HOME_CHILD_ABOUT", path: "about", ...homePageRoute, },
            { id: "HOME_CHILD_SKILLS", path: "skills", ...homePageRoute, },
            { id: "HOME_CHILD_PROJECTS", path: "projects", ...homePageRoute, },
            { id: "HOME_CHILD_CONTACTS", path: "contacts", ...homePageRoute, },
        ]
    }
];
