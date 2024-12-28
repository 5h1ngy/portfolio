import React from "react"; // Importa la libreria React per creare componenti.
import ReactMarkdown from "react-markdown"; // Libreria per il rendering di contenuto Markdown in React.
import remarkGfm from "remark-gfm"; // Plugin Remark per supportare sintassi GitHub Flavored Markdown (GFM).
import rehypeHighlight from "rehype-highlight"; // Plugin Rehype per evidenziare sintassi del codice nei blocchi di codice Markdown.

import "highlight.js/styles/github.css"; // Importa lo stile GitHub per l'evidenziazione della sintassi.
import "./component.scss"; // Importa gli stili personalizzati del componente.

type Props = {
    content: string; // Tipo per le proprietà del componente: `content` è una stringa che rappresenta il contenuto Markdown.
};

/**
 * Componente `Component`.
 * 
 * Renderizza contenuto Markdown formattato, con supporto per GitHub Flavored Markdown e
 * evidenziazione della sintassi del codice.
 * 
 * @param {Props} props - Proprietà del componente, include il contenuto Markdown.
 * @returns {JSX.Element} - Un elemento che visualizza il contenuto Markdown renderizzato.
 */
const Component: React.FC<Props> = ({ content }) => {
    return (
        <div className="markdown-container"> {/* Contenitore con una classe CSS per la personalizzazione degli stili. */}
            <ReactMarkdown
                children={content} // Contenuto Markdown passato come proprietà.
                remarkPlugins={[remarkGfm]} // Plugin per supportare GFM (esempio: tabelle, liste di controllo).
                rehypePlugins={[rehypeHighlight]} // Plugin per evidenziare la sintassi nei blocchi di codice.
            />
        </div>
    );
};

export default Component; // Esporta il componente per l'utilizzo in altri file.
