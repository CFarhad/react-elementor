import React from "react";
import ToolbarItem from "../toolbar/toolbarItem";

function HeadingSettings() {
  return (
    <>
      <ToolbarItem propKey="text" type="textarea" label="Title" />
      <ToolbarItem
        propKey="component"
        type="select"
        label="component"
        data={[
          { label: "H1", value: "h1" },
          { label: "H2", value: "h2" },
          { label: "H3", value: "h3" },
          { label: "H4", value: "h4" },
          { label: "H5", value: "h5" },
          { label: "H6", value: "h6" },
          { label: "div", value: "div" },
          { label: "span", value: "span" },
          { label: "p", value: "p" },
        ]}
        defaultValue="h1"
      />
    </>
  );
}

export default HeadingSettings;
