import { RouteObject } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";

import withDynamicImport from "@/hocs/withDynamicImport"; // HOC per il caricamento dinamico dei componenti con un fallback di caricamento.
import Error from "@/pages/Error"; // Pagina generica mostrata in caso di errore durante il rendering.
import Loading from "@/pages/Loading"; // Componente mostrato durante il caricamento del contenuto.

const routes: RouteObject[] = [
    {
        id: "root", // Identificativo univoco per la rotta principale.
        path: "/", // Percorso della rotta principale.
        element: withDynamicImport('Landing', <Loading />).pages({
            // `Landing` è il componente caricato dinamicamente, con `<Loading />` mostrato come fallback.
            logo: `${import.meta.env.VITE_BASENAME}/assets/logo.png`, // Logo dell'app mostrato nel layout principale.
            children: <Outlet />, // Outlet utilizzato per il rendering delle rotte figlie.
            navbarItems: [
                // Oggetti che rappresentano gli elementi della barra di navigazione.
                { label: "About", value: '/about' }, // Collegamento alla sezione "About".
                { label: "Skills", value: '/skills' }, // Collegamento alla sezione "Skills".
                { label: "Projects", value: '/projects' }, // Collegamento alla sezione "Projects".
                { label: "Contacts", value: '/contacts' }, // Collegamento alla sezione "Contacts".
            ],
        }),
        errorElement: <Error />, // Elemento mostrato in caso di errore nella rotta principale.
        children: [
            {
                index: true, // Indica che questa è la rotta "predefinita" quando si accede a "/".
                element: <Navigate to="/home" replace /> // Redirezione automatica alla rotta "/home".
            },
            {
                id: "home", // ID univoco per la rotta "home".
                path: 'home', // Path relativo per "home".
                element: withDynamicImport('Home', <Loading />).containers(), // Caricamento dinamico del componente "Home".
                errorElement: <Error />, // Pagina di fallback per eventuali errori nel caricamento di "Home".
            },
            {
                id: "about", // ID univoco per la rotta "about".
                path: 'about', // Path relativo per "about".
                element: withDynamicImport('Home', <Loading />).containers(), // Caricamento dinamico del componente "About".
                errorElement: <Error />, // Pagina di fallback per eventuali errori nel caricamento di "About".
            },
            {
                id: "skills", // ID univoco per la rotta "skills".
                path: 'skills', // Path relativo per "skills".
                element: withDynamicImport('Home', <Loading />).containers(), // Caricamento dinamico del componente "Skills".
                errorElement: <Error />, // Pagina di fallback per eventuali errori nel caricamento di "Skills".
            },
            {
                id: "projects", // ID univoco per la rotta "projects".
                path: 'projects', // Path relativo per "projects".
                element: withDynamicImport('Home', <Loading />).containers(), // Caricamento dinamico del componente "Projects".
                errorElement: <Error />, // Pagina di fallback per eventuali errori nel caricamento di "Projects".
            },
            {
                id: "contacts", // ID univoco per la rotta "contacts".
                path: 'contacts', // Path relativo per "contacts".
                element: withDynamicImport('Home', <Loading />).containers(), // Caricamento dinamico del componente "Contacts".
                errorElement: <Error />, // Pagina di fallback per eventuali errori nel caricamento di "Contacts".
            }
        ]
    }
];

export default routes; // Esporta l'oggetto `routes` per essere utilizzato nell'app.
