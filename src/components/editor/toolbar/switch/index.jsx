import { Group, Switch, Text } from "@mantine/core";
import React, { useState } from "react";

function SwitchHandler({ value, onChange, label }) {
  const [checked, setChecked] = useState(false);
  const changeFunction = (e) => {
    setChecked(e.currentTarget.checked);
    onChange(e.currentTarget.checked);
  };

  return (
    <Group>
      <Text size="xs" component="label">
        {label}
      </Text>
      <Switch size="xs" checked={checked} onChange={(event) => changeFunction(event)} />
    </Group>
  );
}

export default SwitchHandler;
