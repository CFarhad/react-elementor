import React from "react";
import ToolbarItem from "../toolbar/toolbarItem";

function ProgressSettings() {
  return (
    <>
      <ToolbarItem propKey="percent" type="number" label="Percent" />
      <ToolbarItem propKey="size" type="number" label="Size" />
      <ToolbarItem propKey="color" type="color" label="color" />
      <ToolbarItem type="unit" label="Border Radius" propKey="radius" unit="px" />
      <ToolbarItem propKey="striped" type="switch" label="Striped" />
      <ToolbarItem propKey="animated" type="switch" label="Animated" />
    </>
  );
}

export default ProgressSettings;
