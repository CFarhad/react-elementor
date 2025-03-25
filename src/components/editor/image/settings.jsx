import React from "react";
import ToolbarItem from "../toolbar/toolbarItem";

function ImageSettings() {
  return (
    <>
      <ToolbarItem propKey="src" type="image" label="Image" />
      <ToolbarItem type="unit" label="Width" propKey="w" unit="%" />
      <ToolbarItem type="unit" label="Height" propKey="h" unit="%" />
      <ToolbarItem
        propKey="fit"
        type="select"
        label="Fit"
        data={[
          { label: "Contain", value: 'contain' },
            { label: "Cover", value: 'cover' },
            { label: "Fill", value: 'fill' },
            { label: "None", value: 'none' },
            { label: "Scale Down", value: 'scale-down' },
        ]}
      />
    </>
  );
}

export default ImageSettings;
