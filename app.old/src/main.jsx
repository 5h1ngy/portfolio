import React from 'react'
import { Helmet } from "react-helmet";

import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import theme from "@app/theme/chakra";
import routes from './routes'

import './main.scss'

function Header() {
    // const imgUrl = new URL('/public/vite.svg', import.meta.url).href

    return <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <link rel="icon" type="image/svg+xml" href={imgUrl} /> */}
        <link rel="icon" type="image/svg+xml" />

        <title>fe-react-portfolio</title>
    </Helmet>;
}

function App() {
    return <ChakraProvider theme={theme}>
        <Header />
        <RouterProvider router={routes} />
    </ChakraProvider>
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
