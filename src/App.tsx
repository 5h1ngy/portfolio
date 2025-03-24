import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';

import ThemeProvider from "react-goblin-system/providers/Theme"
import store from '@/store';
import { routes } from '@/pages/routes'

const App: React.FC = () =>
    <Provider store={store}>
        <ThemeProvider>
            <HelmetProvider>
                <Helmet>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>5h1ngy Portfolio</title>
                    <link rel="icon" type="image/svg+xml" href={`${import.meta.env.VITE_BASENAME}/logo.png`} />
                </Helmet>
                <RouterProvider
                    router={createBrowserRouter(routes, {
                        basename: import.meta.env.VITE_BASENAME.startsWith("http")
                            ? new URL(import.meta.env.VITE_BASENAME).pathname
                            : import.meta.env.VITE_BASENAME,
                    })}
                />
            </HelmetProvider>
        </ThemeProvider>
    </Provider>

export default App;
