import { RouterProvider } from "react-router-dom"; // Fornisce il contesto e gestisce il routing principale.
import { createBrowserRouter } from 'react-router-dom'; // Crea un router basato sul browser history API.
import { Provider } from 'react-redux'; // Fornisce il contesto Redux per gestire lo stato globale dell'app.
import { Helmet } from 'react-helmet-async'; // Gestisce i metadati dinamici per il documento.
import { HelmetProvider } from 'react-helmet-async'; // Fornisce il contesto per il componente `Helmet`.

import ThemeProvider from "@/providers/ThemeProvider"; // Gestisce il tema globale dell'applicazione.
import store from '@/store'; // Configurazione dello store Redux.
import routes from '@/routes'; // Definizione delle rotte dell'applicazione.

const App: React.FC = () => {
    // Crea un URL completo per il logo utilizzando la base URL fornita dall'ambiente.
    const imgUrl = new URL(`${import.meta.env.VITE_BASENAME}/logo.png`, location.origin).href;

    return (
        // Fornisce il contesto Redux per l'app.
        <Provider store={store}>
            {/* Applica il tema globale, es. colori, stili, tipografia */}
            <ThemeProvider>
                {/* Contesto per `Helmet` per gestire i metadati del documento */}
                <HelmetProvider>
                    {/* Configura i metadati dinamici del documento HTML */}
                    <Helmet>
                        <meta charSet="UTF-8" /> {/* Specifica la codifica dei caratteri */}
                        <link rel="icon" type="image/svg+xml" href={imgUrl} /> {/* Configura l'icona del sito */}
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* Configura la viewport per il layout responsive */}
                        <title>5h1ngy Portfolio</title> {/* Titolo della pagina */}
                    </Helmet>
                    {/* Gestisce il routing dell'app utilizzando il router configurato */}
                    <RouterProvider
                        router={createBrowserRouter(routes, {
                            // Configura il router con un basename specificato nell'ambiente.
                            basename: import.meta.env.VITE_BASENAME,
                            // Opzioni future per abilitare funzionalità sperimentali di React Router v7.
                            future: {
                                v7_fetcherPersist: true, // Mantiene i dati dei fetcher durante la navigazione.
                                v7_normalizeFormMethod: true, // Normalizza il metodo dei form (GET, POST, ecc.).
                                v7_partialHydration: true, // Supporta l'idratazione parziale del client.
                                v7_relativeSplatPath: true, // Supporta percorsi relativi con "*".
                                v7_skipActionErrorRevalidation: true, // Salta la ri-validazione in caso di errori nelle azioni.
                            },
                        })}
                    />
                </HelmetProvider>
            </ThemeProvider>
        </Provider>
    );
};

export default App; // Esporta il componente principale dell'app.
