import React, { useEffect, useState } from "react";
import Editor from "./components/Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 350);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Editor section */}
      <div className="flex flex-wrap h-1/2 lg:h-2/3">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>

      {/* Responsive iframe section */}
      <div className="flex-grow">
        <iframe
          srcDoc={srcDoc}
          sandbox="allow-scripts allow-modals"
          title="output"
          className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] border-0 bg-slate-100"
        />
      </div>
    </div>
  );
}

export default App;
