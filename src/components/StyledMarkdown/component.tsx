import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github.css";
import "./component.scss"

type Props = {
    content: string;
};

const Component: React.FC<Props> = ({ content }) => {
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

export default Component;
