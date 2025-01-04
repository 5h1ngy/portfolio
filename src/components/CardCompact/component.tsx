import _ from "lodash"; // Libreria lodash per eventuali operazioni utili (non utilizzata nel codice attuale).
import React from "react";
import { Flex } from "@chakra-ui/react"; // Importa il contenitore flessibile da Chakra UI.
import { Text } from "@chakra-ui/react"; // Importa il componente Text da Chakra UI.

export interface Props {
  title: string; // Titolo da visualizzare all'interno del componente.
  callback: Function; // Funzione da chiamare quando il componente viene cliccato.
  callbackRef: number; // Riferimento da passare come argomento alla callback.
}

/**
 * Componente `Component`.
 * 
 * Questo componente rappresenta una card compatta, ottimizzata per visualizzare un titolo in orientamento verticale.
 * 
 * @param {Props} props - Proprietà del componente.
 * - `title`: Titolo da visualizzare.
 * - `callback`: Funzione eseguita al clic sulla card.
 * - `callbackRef`: Indice o riferimento passato alla callback.
 */
const Component: React.FC<Props> = ({ title, callback, callbackRef }) => {
  return (
    <Flex
      overflow="hidden" // Nasconde eventuali contenuti che escono dai limiti del contenitore.
      flexDirection="row" // Disposizione orizzontale degli elementi figli.
      minHeight="16rem" // Altezza minima del contenitore.
      maxHeight="16rem" // Altezza massima del contenitore.
      minWidth="4rem" // Larghezza minima del contenitore.
      maxWidth="4rem" // Larghezza massima del contenitore.
      borderRadius={"15px"} // Applica bordi arrotondati con un raggio di 15px.
      backgroundColor={"gray.100"} // Colore di sfondo chiaro per il tema light.
      _dark={{ backgroundColor: "gray.900" }} // Colore di sfondo scuro per il tema dark.
      align="center" // Centra verticalmente il contenuto.
      justify="center" // Centra orizzontalmente il contenuto.
      onClick={() => callback(callbackRef)} // Esegue la callback con il riferimento passato come argomento al clic.
    >
      <Text
        textStyle="sm" // Stile del testo predefinito come "small" (Chakra UI).
        fontWeight="medium" // Peso del font impostato su medio.
        writingMode="vertical-rl" // Ruota il testo verticalmente da destra a sinistra.
      >
        {title} {/* Visualizza il titolo passato come proprietà. */}
      </Text>
    </Flex>
  );
};

export default Component; // Esporta il componente per l'utilizzo in altri file.
