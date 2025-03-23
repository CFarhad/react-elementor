import React from "react";
import ToolbarItem from "../toolbar/toolbarItem";

function ButtonSettings() {
  return (
    <>
      <ToolbarItem propKey="text" type="text" label="Text" />
      <ToolbarItem propKey="link" type="text" label="link" />
      <ToolbarItem propKey="textcolor" type="color" label="text color" />
      <ToolbarItem propKey="bgcolor" type="color" label="background color" />
      <ToolbarItem type="unit" label="border radius" propKey="radius" unit="px" />
    </>
  );
}

export default ButtonSettings;
