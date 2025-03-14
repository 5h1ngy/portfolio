import _ from "lodash"; // Importa lodash per utilità (non usato in questo codice).
import React from "react";
import { Badge, Card, Flex, IconButton, Image } from "@chakra-ui/react"; // Importa componenti di Chakra UI.
import { Text } from "@chakra-ui/react"; // Importa il componente Text da Chakra UI.

import getRandomColor from "@/utils/getRandomColor"; // Funzione per generare colori casuali.
import { FaGithub } from "react-icons/fa"; // Icona GitHub.
import { SiStorybook, SiSwagger } from "react-icons/si"; // Icone Storybook e Swagger.
import { SiGoogledocs } from "react-icons/si"; // Icona Google Docs.
import { CiGlobe } from "react-icons/ci"; // Icona Globe/Hosting.

export interface Props {
  _id: number; // Identificatore univoco della card.
  title: string; // Titolo del progetto o elemento rappresentato dalla card.
  thumbnail?: string; // URL opzionale dell'immagine di anteprima (thumbnail).
  links?: Record<string, string>; // Oggetto che contiene URL per documentazione, Swagger, ecc.
  urlCallback: Function; // Funzione di callback per la gestione dei clic sui link.

  name: string;
  url: string;
  updated_at: string;
  license: null | {
    name: string;
  };
  topics: string[];
  description: null | string;
}

/**
 * Componente `Component`.
 * 
 * Questo componente rappresenta una card orizzontale con:
 * - Immagine di anteprima.
 * - Link utili (Docs, Swagger, ecc.).
 * - Titolo, descrizione e argomenti associati (topics).
 * 
 * @param {Props} props - Proprietà del componente.
 */
const Component: React.FC<Props> = ({
  thumbnail, title, links, urlCallback,

  name, url, updated_at, license, topics, description
}) => {
  return (
    <Card.Root
      overflow="hidden" // Nasconde contenuti che eccedono i limiti della card.
      flexDirection="row" // Disposizione orizzontale degli elementi figli.
      alignItems={"center"} // Allinea verticalmente gli elementi al centro.
      maxHeight="16rem" // Altezza massima della card.
      minHeight="16rem" // Altezza minima della card.
      minWidth="30rem" // Larghezza minima della card.
      maxWidth="30rem" // Larghezza massima della card.
      borderRadius={"15px"} // Angoli arrotondati della card.
      backgroundColor={"gray.100"} // Colore di sfondo per il tema chiaro.
      _dark={{ backgroundColor: "gray.900" }} // Colore di sfondo per il tema scuro.
    >
      <Flex flexDirection="column">
        {/* Se disponibile, visualizza l'immagine di anteprima */}
        {thumbnail && (
          <Image
            margin={"1rem"} // Margine attorno all'immagine.
            width={"10rem"} // Larghezza dell'immagine.
            height={"10rem"} // Altezza dell'immagine.
            src={thumbnail} // URL dell'immagine.
            alt="Anteprima del progetto" // Testo alternativo per l'immagine.
          />
        )}

        {/* Se disponibili, visualizza i link utili */}
        {links && (
          <Flex
            flexDirection={thumbnail ? "row" : "column"} // Disposizione orizzontale dei link.
            padding={"0.5rem"} // Padding interno.
            gap={"0.8rem"} // Spaziatura tra i link.
            borderLeftWidth={"1px"} // Bordo a sinistra.
            justifyContent={"center"} // Centra i link orizzontalmente.
          >
            {/* Link a Google Docs */}
            {links?.docs && (
              <IconButton aria-label="Google Docs" variant={"ghost"} onClick={() => urlCallback(links?.docs)}>
                <SiGoogledocs />
                <Text textStyle="xs" fontWeight="normal">Docs</Text>
              </IconButton>
            )}

            {/* Link a Swagger */}
            {links?.swagger && (
              <IconButton aria-label="Swagger" variant={"ghost"} onClick={() => urlCallback(links?.swagger)}>
                <SiSwagger />
                <Text textStyle="xs" fontWeight="normal">Swagger</Text>
              </IconButton>
            )}

            {/* Link a Storybook */}
            {links?.storybook && (
              <IconButton aria-label="Storybook" variant={"ghost"} onClick={() => urlCallback(links?.storybook)}>
                <SiStorybook />
                <Text textStyle="xs" fontWeight="normal">Storybook</Text>
              </IconButton>
            )}

            {/* Link all'host o live demo */}
            {links?.host && (
              <IconButton aria-label="Host" variant={"ghost"} onClick={() => urlCallback(links?.host)}>
                <CiGlobe />
                <Text textStyle="xs" fontWeight="normal">Host</Text>
              </IconButton>
            )}
          </Flex>
        )}
      </Flex>

      <Card.Body gap="2">
        {/* Titolo del progetto e pulsante GitHub */}
        <Card.Title lineClamp="3">
          <IconButton aria-label="GitHub" variant={"ghost"} onClick={() => urlCallback()}>
            <FaGithub />
          </IconButton>
          {title}
        </Card.Title>

        {/* Descrizione e argomenti (se disponibili) */}
        {topics && description && (
          <Card.Description>
            <Flex direction="row" wrap={"wrap"} gap={"1rem"}>
              {/* Descrizione del progetto */}
              {description && (
                <Text textStyle="sm" fontWeight="normal" lineClamp="3">
                  {description}
                </Text>
              )}

              {/* Argomenti associati al progetto (come badge) */}
              {topics && (
                <Flex direction="row" wrap={"wrap"} gap={"0.4rem"}>
                  <Text textStyle="md" fontWeight="normal" lineClamp="3" spaceX={"0.2rem"}>
                    {topics.map((topic) => (
                      <Badge key={crypto.randomUUID()} colorPalette={getRandomColor()}>
                        {topic}
                      </Badge>
                    ))}
                  </Text>
                </Flex>
              )}
            </Flex>
          </Card.Description>
        )}
      </Card.Body>
    </Card.Root>
  );
};

export default Component; // Esporta il componente per l'utilizzo in altri file.
