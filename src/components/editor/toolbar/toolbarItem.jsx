import { useNode } from "@craftjs/core";
import FieldRenderer from "./fieldRenderer";
import { Box } from "@mantine/core";
import React from "react";
import { shallowEqual } from "@mantine/hooks";

function ToolbarItem({
  full = false,
  propKey,
  type,
  onChange,
  index,
  label,
  ...props
}) {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({ propValue: node.data.props[propKey] }));

  const value = Array.isArray(propValue) ? propValue[index] : propValue;

  const handleChange = (newValue) => {
    setProp((props) => {
      props[propKey] = onChange ? onChange(newValue) : newValue;
    });
  };

  return (
    <Box mb="md">
      <FieldRenderer
        type={type}
        value={value}
        label={label}
        onChange={handleChange}
        {...props}
      />
    </Box>
  );
}

const MemoizedToobarItem = React.memo(ToolbarItem,(prev,next) => {
  return ! shallowEqual(prev,next);
})

export default MemoizedToobarItem;
