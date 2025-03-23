import React, { useState, useId } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { Paper, Text } from "@mantine/core";

const CodeEditor = ({ value, onChange, label }) => {
  const [code, setCode] = useState("");
  return (
    <>
      <Text component="span">{label}</Text>
      <AceEditor
        width="100%"
        placeholder="//code"
        mode="html"
        theme="monokai"
        name="acecode"
        fontSize={12}
        lineHeight={19}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        onChange={(val) => onChange(val)}
        value={value || ""}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          enableMobileMenu: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </>
  );
};

export default CodeEditor;
