import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // Stile del codice
import "./test.scss"

type StyledMarkdownProps = {
    content: string;
};

const StyledMarkdown: React.FC<StyledMarkdownProps> = ({ content }) => {
    return (
        <div className="markdown-container">
            <ReactMarkdown
                children={content}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
            />
        </div>
    );
};

export default StyledMarkdown;
