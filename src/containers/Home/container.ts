import { connect, ConnectedProps } from "react-redux"; // Importa funzioni per connettere i componenti a Redux.
import { bindActionCreators, Dispatch } from "redux"; // Funzioni per collegare azioni e dispatcher.

import { State, actions } from '@/store'; // Importa lo stato globale e le azioni definite nello store.

// Funzione per mappare lo stato globale Redux come proprietà del componente.
const mapStateToProps = (state: State) => ({
    ...state.containerPortfolio, // Mappa tutto lo stato della sezione `containerPortfolio` come proprietà.
});

// Funzione per mappare le azioni Redux come proprietà del componente.
const mapDispatchToProps = (dispatch: Dispatch) => ({
    ...bindActionCreators(actions.containerPortfolio, dispatch),
    // Collega tutte le azioni di `containerPortfolio` al dispatcher.
});

// Funzione `connect` che unisce stato, azioni e proprietà personalizzate in un unico oggetto.
const bind = connect(
    mapStateToProps, // Connetti lo stato mappato.
    mapDispatchToProps, // Connetti le azioni mappate.
    (stateProps, dispatchProps, ownProps) => ({
        state: stateProps, // Stato derivato da Redux.
        actions: dispatchProps, // Azioni collegate al dispatcher.
        ...ownProps, // Proprietà personalizzate passate al componente.
    })
);

export default bind; // Esporta la funzione `bind` per connettere il componente a Redux.

// Tipizzazione per i componenti connessi a Redux.
// `ConnectedProps` genera automaticamente i tipi di proprietà derivati da `bind`.
export type Bind = ConnectedProps<typeof bind>;
