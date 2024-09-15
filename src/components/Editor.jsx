import React, { useState } from "react";
import { Controlled } from "react-codemirror2";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";

function Editor({ language, value, displayName, onChange }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div
      className={`flex flex-col bg-gray-800 p-2 ${
        isOpen ? "flex-grow" : "flex-grow-0"
      } 
                    w-full sm:w-1/2 lg:w-1/3 min-h-[200px]`}>
      <div className="flex justify-between items-center bg-gray-900 text-white p-2 rounded-t-lg">
        <span>{displayName}</span>
        <button
          className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          onClick={() => setIsOpen((prevState) => !prevState)}>
          {isOpen ? "Collapse" : "Expand"}
        </button>
      </div>
      <div
        className={`overflow-hidden rounded-b-lg transition-all duration-300 ease-in-out ${
          isOpen ? "flex-grow" : "h-0"
        }`}>
        <Controlled
          onBeforeChange={handleChange}
          value={value}
          className="h-full"
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            lineNumbers: true,
            theme: "material",
          }}
        />
      </div>
    </div>
  );
}

export default Editor;
