import React from "react";
import ToolbarItem from "../toolbar/toolbarItem";

function IconListSettings() {
  const fields = [
    {
      name: "text",
      type: "text",
      label: "Text",
    },
    {
      name: "icon",
      type: "icon",
      label: "Icon",
    },
  ];
  return (
    <>
      <ToolbarItem
        type="repeater"
        propKey="items"
        label="Items"
        fields={fields}
      />
    </>
  );
}

export default IconListSettings;
