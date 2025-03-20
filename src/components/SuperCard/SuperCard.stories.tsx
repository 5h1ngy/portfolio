import type { Meta, StoryObj } from "@storybook/react";
import SuperCard from "./SuperCard";
import { Icon } from "@chakra-ui/react";
import { FaLink, FaHeart } from "react-icons/fa";

export default {
    title: "Components/SuperCard",
    component: SuperCard,
    tags: ["autodocs"],
    // Puoi aggiungere qui eventuali argTypes per descrivere i controlli:
    argTypes: {
        orientation: {
            control: {
                type: "radio",
                options: ["vertical", "horizontal"],
            },
        },
        colorPalette: {
            control: {
                type: "select",
                options: ["gray", "blue", "green", "red", "yellow"], // e così via
            },
        },
        compact: { control: "boolean" },
        onCardClick: { action: "clicked" },
    },
} as Meta<typeof SuperCard>;

type Story = StoryObj<typeof SuperCard>;

/**
 * Storia base: le impostazioni di default.
 */
export const Default: Story = {
    args: {
        title: "Titolo di Default",
        subTitle: "Sottotitolo di esempio",
        description:
            "Questo è un esempio di descrizione piuttosto lunga, per mostrare come si comporta il componente con testo più articolato.",
        thumbnail: "https://via.placeholder.com/400x300",
        topics: ["React", "Storybook", "UI"],
        links: [
            {
                label: "Link",
                icon: <Icon as={FaLink} />,
                onClick: () => { },
            },
        ],
    },
};

/**
 * Versione compatta (compact = true).
 */
export const Compact: Story = {
    args: {
        compact: true,
        title: "Titolo in verticale",
        onCardClick: () => alert("Hai cliccato sulla card compatta!"),
    },
};

/**
 * Orientamento orizzontale.
 */
export const Horizontal: Story = {
    args: {
        orientation: "horizontal",
        title: "SuperCard orizzontale",
        subTitle: "Layout in orizzontale",
        description:
            "Guarda come si affiancano thumbnail, titoli e contenuto su un layout di tipo orizzontale.",
        thumbnail: "https://via.placeholder.com/300x300",
    },
};

/**
 * Senza thumbnail.
 * Non passando alcun 'thumbnail', la card non mostrerà alcuna immagine iniziale.
 */
export const NoThumbnail: Story = {
    args: {
        title: "Senza immagine",
        subTitle: "SuperCard senza thumbnail",
        description:
            "Questa card mostra come il componente si comporta quando non forniamo un'immagine di anteprima.",
    },
};

/**
 * Thumbnail con errore (per forzare la fallback icon).
 * Impostando un URL che causerà un errore di caricamento.
 */
export const ErrorThumbnail: Story = {
    args: {
        title: "Thumbnail in errore",
        thumbnail: "https://dominioCheNonEsiste1234.xxx/immagineInesistente.jpg",
        description: "Verrà mostrata l'icona di fallback al posto dell'immagine.",
    },
};

/**
 * Esempio di card con diversi "topic" e link.
 */
export const WithTopicsAndLinks: Story = {
    args: {
        title: "Card con vari topic e link",
        subTitle: "Approfondisci l'argomento",
        description:
            "Esempio di come la card possa contenere molti topic e diversi link con icone differenti.",
        thumbnail: "https://via.placeholder.com/400",
        topics: ["JavaScript", "TypeScript", "ChakraUI", "Storybook", "React"],
        links: [
            {
                label: "Preferito",
                icon: <Icon as={FaHeart} />,
                onClick: () => alert("Hai cliccato sul cuore!"),
            },
            {
                label: "Visita il link",
                icon: <Icon as={FaLink} />,
                onClick: () => alert("Hai cliccato sul link!"),
            },
        ],
    },
};

/**
 * Esempio con children personalizzati:
 * Se desideri mostrare contenuto extra nel body della card,
 * aggiungendo magari un pulsante aggiuntivo o un componente custom.
 */
export const WithCustomChildren: Story = {
    args: {
        title: "Card con contenuto extra",
        subTitle: "Utilizzo di children",
        description: "In questa card utilizziamo children personalizzati nel body.",
        children: (
            <div>
                <p>
                    Questa porzione di contenuto è passata come <code>children</code> a
                    SuperCard.
                </p>
                <button onClick={() => alert("Cliccato!")}>Bottone di prova</button>
            </div>
        ),
    },
};

/**
 * Esempio con onCardClick per catturare il click sul contenuto principale.
 */
export const ClickableCard: Story = {
    args: {
        title: "Card cliccabile",
        subTitle: "Gestione onCardClick",
        description: "Quando clicchi sul contenuto principale, viene mostrato un alert.",
        onCardClick: () => alert("Hai cliccato sul corpo della card!"),
        thumbnail: "https://via.placeholder.com/400x200",
    },
};
