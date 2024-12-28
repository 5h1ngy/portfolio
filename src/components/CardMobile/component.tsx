import _ from "lodash";
import React from "react";
import { Badge, Card, Flex, IconButton, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import getRandomColor from "@/utils/getRandomColor"; // Funzione per ottenere colori casuali.
import { FaGithub } from "react-icons/fa"; // Icona per GitHub.
import { SiSwagger } from "react-icons/si"; // Icona per Swagger.
import { SiGoogledocs } from "react-icons/si"; // Icona per Google Docs.
import { SiStorybook } from "react-icons/si"; // Icona per Storybook.
import { CiGlobe } from "react-icons/ci"; // Icona per Globe/Hosting.

export interface Props {
  _id: number; // Identificatore unico del componente.
  title: string; // Titolo del progetto o elemento.
  thumbnail?: string; // URL immagine opzionale (thumbnail).
  topics?: string[]; // Array di argomenti/tag associati.
  description?: string; // Descrizione testuale opzionale.
  links?: Record<string, string>; // Oggetto con chiavi per URL (es. docs, swagger, ecc.).
  urlCallback: Function; // Funzione di callback per gestire il click sui link.
}

/**
 * Componente `Component`.
 * 
 * Rappresenta una card per visualizzare informazioni su un progetto o elemento,
 * inclusi immagine, descrizione, argomenti e link utili.
 */
const Component: React.FC<Props> = ({ thumbnail, title, description, topics, links, urlCallback }) => {

  return (
    <Card.Root
      overflow="hidden"
      flexDirection="column"
      alignItems={"center"}
      borderRadius={"15px"}
      backgroundColor={"gray.100"}
      _dark={{ backgroundColor: "gray.900" }} // Colore scuro per modalità dark.
    >
      {/* Thumbnail (immagine opzionale) */}
      {thumbnail && <Image margin={"1rem"} width={"10rem"} height={"10rem"} src={thumbnail} alt="" />}

      <Card.Body gap="2">
        {/* Titolo della card con pulsante GitHub */}
        <Card.Title>
          {title}
          <IconButton aria-label="" variant={"ghost"} onClick={() => urlCallback()}>
            <FaGithub />
          </IconButton>
        </Card.Title>

        {/* Descrizione e argomenti (se presenti) */}
        {topics && description && (
          <Card.Description>
            <Flex direction="row" wrap={"wrap"} gap={"1rem"}>
              {/* Testo della descrizione */}
              {description && <Text textStyle="sm" fontWeight="normal">{description}</Text>}

              {/* Lista di badge per i topics */}
              {topics && (
                <Flex direction="row" wrap={"wrap"} gap={"0.4rem"}>
                  <Text textStyle="md" fontWeight="normal">
                    {topics.map(topic => (
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

      {/* Footer con i link (se presenti) */}
      {links && (
        <Card.Footer
          flexDirection={"row"}
          padding={"1.5rem"}
          gap={"0.8rem"}
          borderTopWidth={"1px"}
          justifyContent={"start"}
          width={"100%"}
          flexWrap={"wrap"}
        >
          {/* Link Docs */}
          {links?.docs && (
            <IconButton aria-label="" variant={"ghost"} onClick={() => urlCallback(links?.docs)}>
              <SiGoogledocs />
              <Text textStyle="md" fontWeight="normal">Docs</Text>
            </IconButton>
          )}

          {/* Link Swagger */}
          {links?.swagger && (
            <IconButton aria-label="" variant={"ghost"} onClick={() => urlCallback(links?.swagger)}>
              <SiSwagger />
              <Text textStyle="md" fontWeight="normal">Swagger</Text>
            </IconButton>
          )}

          {/* Link Storybook */}
          {links?.storybook && (
            <IconButton aria-label="" variant={"ghost"} onClick={() => urlCallback(links?.storybook)}>
              <SiStorybook />
              <Text textStyle="md" fontWeight="normal">Storybook</Text>
            </IconButton>
          )}

          {/* Link Host/Live Preview */}
          {links?.host && (
            <IconButton aria-label="" variant={"ghost"} onClick={() => urlCallback(links?.host)}>
              <CiGlobe />
              <Text textStyle="md" fontWeight="normal">Host</Text>
            </IconButton>
          )}
        </Card.Footer>
      )}
    </Card.Root>
  );
};

export default Component; // Esporta il componente per l'utilizzo.
