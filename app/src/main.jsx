import React from 'react'
import { Helmet } from "react-helmet";

import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'

import store from './store';
import routes from './routes'

function Header() {
    const imgUrl = new URL('/public/vite.svg', import.meta.url).href

    return <Helmet>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href={imgUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fe-react-portfolio</title>
    </Helmet>;
}

function App() {

    return <ReduxProvider store={store}>
        <ChakraProvider>
            <Header />
            <RouterProvider router={routes} />
        </ChakraProvider>
    </ReduxProvider>
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
