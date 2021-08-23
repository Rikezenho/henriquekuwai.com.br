import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import darcula from "react-syntax-highlighter/dist/cjs/styles/prism/darcula";
import { PrismLight, PrismAsyncLight } from "react-syntax-highlighter";

const SyntaxHighlighter =
  typeof window === "undefined" ? PrismLight : PrismAsyncLight;

export const Markdown: React.FC<{ children: string }> = (props) => {
  return (
    <div style={{ width: "100%" }} className="devii-markdown">
      <ReactMarkdown
        key="content"
        children={props.children}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                PreTag="div"
                style={darcula}
                // {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};
