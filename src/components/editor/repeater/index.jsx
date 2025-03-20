import React, { useState } from "react";
import FieldRenderer from "../toolbar/fieldRenderer";
import { Accordion, Button, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { shallowEqual } from "@mantine/hooks";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

function Repeater({ onChange, label, fields, ...props }) {
  const [items, setItems] = useState([]);

  // Add a new item
  const handleAddItem = () => {
    const newItem = fields.reduce((acc, field) => {
      acc[field.name] = ""; // Initialize fields with empty strings
      return acc;
    }, {});
    const sequenceNumber = items.length + 1; // Assign a unique sequence number
    const updatedItems = [
      ...items,
      { id: `${Date.now()}`, sequenceNumber, ...newItem },
    ];
    setItems(updatedItems);
    if (onChange) onChange(updatedItems);
  };

  // Remove an item
  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    if (onChange) onChange(updatedItems);
  };

// Handle field value changes
const handleFieldChange = (index, fieldName, value) => {
  // Create a deep copy of the items array to avoid mutation
  const updatedItems = items.map((item, i) => {
    if (i === index) {
      // Update the specific field in the item
      return {
        ...item, // Copy all existing fields
        [fieldName]: value, // Update the specific field
      };
    }
    return item; // Return unchanged items
  });

  // Update the state with the new items
  setItems(updatedItems);

  // Trigger the onChange callback if provided
  if (onChange) onChange(updatedItems);
};

  // Handle drag and drop
  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return; // Dropped outside droppable area

    const updatedItems = Array.from(items);
    const [removed] = updatedItems.splice(source.index, 1);
    updatedItems.splice(destination.index, 0, removed);
    setItems(updatedItems);
    if (onChange) onChange(updatedItems);
  };

  return (
    <div {...props}>
      <Text size="xs" mb="sm">
        {label}
      </Text>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Accordion variant="separated">
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={{
                          marginBottom: "10px",
                          ...provided.draggableProps.style,
                        }}
                      >
                        <Accordion.Item value={`item-${index}`}>
                          {/* Drag Handle */}
                          <div
                            {...provided.dragHandleProps}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <span
                              style={{
                                cursor: "grab",
                                paddingRight: "10px",
                              }}
                            >
                              ::
                            </span>
                            <Accordion.Control>
                              #{item.sequenceNumber} {/* Use sequenceNumber */}
                            </Accordion.Control>
                          </div>
                          <Accordion.Panel>
                            {fields.map((field, fieldIndex) => (
                              <div
                                key={fieldIndex}
                                style={{ marginBottom: "10px" }}
                              >
                                <FieldRenderer
                                  {...field}
                                  value={item[field.name]}
                                  onChange={(value) => handleFieldChange(index, field.name, value)
                                  }
                                />
                              </div>
                            ))}
                            <Button
                              size="xs"
                              h={35}
                              color="red"
                              onClick={() => handleRemoveItem(index)}
                            >
                              <IconTrash size={16} />
                            </Button>
                          </Accordion.Panel>
                        </Accordion.Item>
                      </div>
                    )}
                  </Draggable>
                ))}
              </Accordion>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Button size="xs" onClick={handleAddItem} mt="md">
        افزودن
      </Button>
    </div>
  );
}

const MemoizedRepeater = React.memo(
  Repeater,
  (prev, next) => !shallowEqual(prev, next)
);

export default MemoizedRepeater;