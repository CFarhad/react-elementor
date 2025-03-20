import React from "react";
import {
  TextInput,
  NumberInput,
  Select,
  ColorInput,
  ActionIcon,
  SegmentedControl,
  Text,
  Divider,
  FileInput,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import {EditorText} from "../text";
import UnitInput from "../toolbar/unitInput";
import EdgeSpacing from "../toolbar/edgeSpacing";
import Repeater from "../repeater";
import TextEditor from "../../textEditor"

function FieldRenderer({ type, value, label, onChange, ...props }) {
  const handleChange = (newValue) => {
    if (onChange) {
      onChange(newValue); // Propagate changes to the parent
    }
  };

  switch (type) {
    case "text":
      return (
        <TextInput
          {...props}
          size="xs"
          variant="filled"
          label={label}
          value={value || ""}
          onChange={(e) => handleChange(e.target.value)}
        />
      );
    case "number":
      return (
        <NumberInput
          {...props}
          size="xs"
          label={label}
          variant="filled"
          value={value || ""}
          onChange={handleChange}
        />
      );
    case "color":
      return (
        <ColorInput
          {...props}
          size="xs"
          label={label}
          value={value || ""}
          onChange={handleChange}
          rightSection={
            value && (
              <ActionIcon
                variant="transparent"
                size="xs"
                onClick={() => handleChange("")}
              >
                <IconX />
              </ActionIcon>
            )
          }
        />
      );
    case "unit":
      return (
        <UnitInput
          {...props}
          label={label}
          value={value || ""}
          onChange={handleChange}
        />
      );
    case "select":
      return (
        <Select
          {...props}
          size="xs"
          label={label}
          value={value || ""}
          onChange={handleChange}
        />
      );
    case "wysiwyg":
      return (
        <TextEditor {...props} value={value || ""} onChange={handleChange} />
      );
    case "segmented":
      return (
        <>
        <Text size="xs" mb="sm">{label}</Text>
          <SegmentedControl
          {...props}
          size="xs"
          label
          labe
          value={value || ""}
          onChange={handleChange}
        />
        </>
      );
    case "hr": 
      return <Divider {...props} />
    case "edge":
      return (
        <EdgeSpacing
          {...props}
          label={label}
          value={value || ""}
          onChange={handleChange}
        />
      );
    case "repeater":
      return (
        <Repeater
          {...props}
          label={label}
          onChange={handleChange}
          fields={props.fields}
        />
      );
    default:
      return null;
  }
}

export default FieldRenderer;
