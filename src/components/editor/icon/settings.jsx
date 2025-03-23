import React from "react";
import ToolbarItem from "../toolbar/toolbarItem";

function IconSettings() {
  return (
    <>
      <ToolbarItem propKey="icon" type="icon" label="Choose Icon" />
      <ToolbarItem propKey="size" type="number" label="Size" />
      <ToolbarItem type="unit" label="Border Radius" propKey="radius" unit="px" />
      <ToolbarItem propKey="bgcolor" type="color" label="Background Color" />
      <ToolbarItem propKey="iconcolor" type="color" label="Icon Color" />
      <ToolbarItem type="unit" label="Icon Size" propKey="iconsize" unit="%" />

    </>
  );
}

export default IconSettings;
