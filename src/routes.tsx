import { RouteObject } from "react-router-dom"
import { Navigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";

import { HiHome, HiBookmark, HiMagnifyingGlass } from "react-icons/hi2";

import withDynamicImport from "@/hocs/withDynamicImport";
import Error from "@/pages/Error"
import Loading from "@/pages/Loading"

const routes: RouteObject[] = [
    {
        id: "root",
        path: "/",
        element: withDynamicImport('Landing', <Loading />).pages({
            logo: `${import.meta.env.VITE_BASENAME}/logo.png`,
            decorationBody: `${import.meta.env.VITE_BASENAME}/decoration.png`,
            children: <Outlet />,
            navbarItems: [
                { icon: <HiHome />, label: "About", value: '/about' },
            ],
            navbarSubItems: [
                { icon: <HiHome />, label: 'Newset', value: '/home' },
                { icon: <HiMagnifyingGlass />, label: 'Search', value: '/search' },
                { icon: <HiBookmark />, label: 'My List', value: '/my-list' }
            ]
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
                element: withDynamicImport('Newest', <Loading />).containers(),
                errorElement: <Error />,
            }
        ]
    }
];

export default routes;