import { ComponentType } from 'react'; // Importa il tipo ComponentType da React per rappresentare un componente.
import { useLocation, useNavigate } from 'react-router-dom';
// Importa i hook `useLocation` e `useNavigate` da react-router-dom per ottenere il contesto di routing.

/**
 * Interfaccia `WithRouterProps`.
 * 
 * Definisce le proprietà aggiuntive di routing che saranno iniettate nel componente.
 */
export interface WithRouterProps {
    router: {
        location: ReturnType<typeof useLocation>; // Informazioni sulla posizione corrente (percorso, stato, ecc.).
        navigate: ReturnType<typeof useNavigate>; // Funzione per navigare programmaticamente tra le rotte.
    };
}

/**
 * HOC (Higher-Order Component) `withRouter`.
 * 
 * Aggiunge proprietà di routing (`location` e `navigate`) a un componente React.
 * 
 * @template P - Tipo delle proprietà del componente avvolto.
 * @param {ComponentType<P & WithRouterProps>} WrappedComponent - Il componente che deve ricevere le proprietà di routing.
 * @returns {React.FC<P>} - Un nuovo componente con le proprietà di routing iniettate.
 */
export default function withRouter<P>(WrappedComponent: ComponentType<P & WithRouterProps>): React.FC<P> {
    // Componente che avvolge il componente originale con le proprietà di routing.
    const RouterComponent: React.FC<P> = (props) => {
        const location = useLocation(); // Ottiene l'oggetto `location` dal contesto del router.
        const navigate = useNavigate(); // Ottiene la funzione `navigate` per la navigazione programmatica.

        // Restituisce il componente originale con le proprietà di routing aggiunte.
        return <WrappedComponent {...props} router={{ location, navigate }} />;
    };

    return RouterComponent; // Restituisce il componente avvolto.
}
