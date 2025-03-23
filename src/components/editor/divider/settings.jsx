import React from "react";
import ToolbarItem from "../toolbar/toolbarItem";

function DividerSettings() {
  return (
    <>
      <ToolbarItem propKey="label" type="text" label="label" />
      <ToolbarItem
        propKey="type"
        type="select"
        label="type"
        data={[
          { label: "solid", value: 'solid' },
          { label: "dashed", value: 'dashed' },
          { label: "dotted", value: 'dotted' },
        ]}
      />
      <ToolbarItem type="unit" label="Size" propKey="size" unit="px" />
      <ToolbarItem propKey="color" type="color" label="color" />
    </>
  );
}

export default DividerSettings;
