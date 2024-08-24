import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown"; // 마크다운 렌더링 라이브러리
import remarkGfm from "remark-gfm"; // 마크다운 확장 구문 플러그인
import rehypeHighlight from "rehype-highlight"; // 코드 하이라이팅을 위한 rehype 플러그인
import "highlight.js/styles/a11y-dark.css"; // 하이라이팅 사용할 css

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // SyntaxHighlighter 하이라이팅
import 'github-markdown-css/github-markdown.css'; // 깃허브 마크다운 CSS 파일 가져오기

function Chapter1() {
  //1. 마크다운 텍스트 렌더링하기
  const markDownText = `
  **MarkDown Text Test react-markdown 사용중**
  `;

  //2. md 파일로 렌더링하기
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    fetch("./md/Chapter1.md")
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div>
      {/* 마크다운 텍스트 렌더링하기 */}
      {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{markDownText}</ReactMarkdown> */}

      {/* .md 파일 렌더링하기 */}
      {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown> */}

      {/* 하이라이팅 플러그인 사용하기 */}
      {/* <SyntaxHighlighter language="javascript" style={oneDark}>
        {markdown}
      </SyntaxHighlighter> */}

      {/* rehypeHighlight 하이라이팅을 사용한 리액트 마크다운 */}
      {/* <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]} // ``` 코드 블록 하이라이팅 적용
      >
        {markdown}
      </ReactMarkdown> */}

      {/* SyntaxHighlighter 하이라이팅을 사용한 리액트 마크다운 */}
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>

      
    </div>
  );
}

export default Chapter1;
