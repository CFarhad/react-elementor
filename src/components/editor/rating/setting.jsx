import React from "react";
import ToolbarItem from "../toolbar/toolbarItem";

function RatingSettings() {
  return (
    <>
      <ToolbarItem propKey="rating" type="number" label="Rating" />
      <ToolbarItem propKey="count" type="number" label="Count" />
      <ToolbarItem propKey="color" type="color" label="color" />
    </>
  );
}

export default RatingSettings;
