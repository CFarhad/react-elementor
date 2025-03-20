import React, { useState } from "react";
import {
  NumberInput,
  Select,
  ActionIcon,
  Button,
  Group,
  Text,
  SimpleGrid,
  Flex,
} from "@mantine/core";
import { IconLock, IconLockOpen } from "@tabler/icons-react";
import { shallowEqual } from "@mantine/hooks";

const EdgeSpacing = ({ value, onChange, label }) => {
  // Parse the initial value (e.g., "10px 10px 10px 10px")
  const [top, right, bottom, left] = value.split(" ").map((v) => parseInt(v));

  // State for individual values
  const [spacing, setSpacing] = useState({ top, right, bottom, left });

  // State for lock/unlock
  const [isLocked, setIsLocked] = useState(true);

  // State for unit (px, em, rem, etc.)
  const [unit, setUnit] = useState("px");

  // Handle input changes
  const handleChange = (side, newValue) => {
    const updatedSpacing = { ...spacing, [side]: newValue };

    if (isLocked) {
      // If locked, update all sides to the same value
      setSpacing({
        top: newValue,
        right: newValue,
        bottom: newValue,
        left: newValue,
      });
      onChange(
        `${newValue}${unit} ${newValue}${unit} ${newValue}${unit} ${newValue}${unit}`
      );
    } else {
      // If unlocked, update only the specific side
      setSpacing(updatedSpacing);
      onChange(
        `${updatedSpacing.top}${unit} ${updatedSpacing.right}${unit} ${updatedSpacing.bottom}${unit} ${updatedSpacing.left}${unit}`
      );
    }
  };

  // Handle unit change
  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    onChange(
      `${spacing.top}${newUnit} ${spacing.right}${newUnit} ${spacing.bottom}${newUnit} ${spacing.left}${newUnit}`
    );
  };

  return (
    <div>
      {/* Label and Unit Selector */}
      <Group justify="space-between" mb="sm">
        <Text size="xs">{label}</Text>
        <Select
          variant="unstyled"
          size="xs"
          value={unit}
          onChange={handleUnitChange}
          data={[
            { value: "px", label: "px" },
            { value: "em", label: "em" },
            { value: "rem", label: "rem" },
          ]}
          w="70px"
        />
      </Group>

      {/* Spacing Inputs and Lock Button */}
      <SimpleGrid cols={5} spacing="xs">
        {/* Top Input */}
        <Flex align="center" direction="column" gap={6}>
            <NumberInput
            value={spacing.top}
            onChange={(value) => handleChange("top", value)}
            hideControls
            placeholder="بالا"
            size="xs"
            variant={isLocked ? "filled" : "default"}
            />
            <Text size="10" lh={0}>بالا</Text>
        </Flex>

        <Flex align="center" direction="column" gap={6}>
            {/* Right Input */}
            <NumberInput
            value={spacing.right}
            onChange={(value) => handleChange("right", value)}
            hideControls
            placeholder="راست"
            size="xs"
            variant={isLocked ? "filled" : "default"}
            />
            <Text size="10" lh={0}>راست</Text>
        </Flex>

        <Flex align="center" direction="column" gap={6}>
            {/* Bottom Input */}
            <NumberInput
            value={spacing.bottom}
            onChange={(value) => handleChange("bottom", value)}
            hideControls
            placeholder="پایین"
            size="xs"
            variant={isLocked ? "filled" : "default"}
            />
            <Text size="10" lh={0}>پایین</Text>
        </Flex>

        <Flex align="center" direction="column" gap={6}>
            {/* Left Input */}
            <NumberInput
            value={spacing.left}
            onChange={(value) => handleChange("left", value)}
            hideControls
            placeholder="چپ"
            size="xs"
            variant={isLocked ? "filled" : "default"}
            />
            <Text size="10" lh={0}>چپ</Text>
        </Flex>


        {/* Lock/Unlock Button */}
        <ActionIcon
          variant={isLocked ? "filled" : "outline"}
          color="gray"
          onClick={() => setIsLocked(!isLocked)}
          size="xs"
          h="30"
          w="100%"
        >
          {isLocked ? <IconLock size={16} /> : <IconLockOpen size={16} />}
        </ActionIcon>
      </SimpleGrid>
    </div>
  );
};

const MemoizedEdgeSpacing = React.memo(EdgeSpacing, (prev, next) => {
  return !shallowEqual(prev, next);
});

export default EdgeSpacing;
