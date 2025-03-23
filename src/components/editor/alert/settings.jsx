import React from "react";
import ToolbarItem from "../toolbar/toolbarItem";

function AlertSettings() {
  return (
    <>
      <ToolbarItem propKey="title" type="text" label="Title" />
      <ToolbarItem propKey="text" type="textarea" label="Text" />
      <ToolbarItem
        propKey="type"
        type="select"
        label="Type"
        data={[
          { label: "Light", value: 'light' },
          { label: "Filled", value: 'filled' },
          { label: "Outline", value: 'outline' },
          { label: "Transparent", value: 'transparent' },
          { label: "White", value: 'white' },
          { label: "Default", value: 'default' },
        ]}
      />
      <ToolbarItem propKey="color" type="color" label="Color" />
    </>
  );
}

export default AlertSettings;
