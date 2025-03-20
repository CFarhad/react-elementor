import { Flex, NumberInput, Select, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";

function UnitInput({label,number,unit,onChange}) {
  const [xunit, setUnit] = useState(unit || 'px');
  const [value,setValue] = useState(number);

  useEffect(() => {
    onChange(`${value}${xunit}`);
  },[xunit,value])
  return (
    <>
      <Text size="xs" mb="xs">{label}</Text>
      <Flex align="end" gap="xs">
        <NumberInput value={value} onChange={(val) => setValue(val)} w="100%" variant="filled" size="xs" hideControls={true} />
        <Select
          variant="filled"
          w="100px"
          defaultValue={xunit}
          value={xunit}
          onChange={(val) => setUnit(val)}
          size="xs"
          data={[
            { label: "px", value: "px" },
            { label: "%", value: "%" },
            { label: "em", value: "em" },
            { label: "rem", value: "rem" },
            { label: "vw", value: "vw" },
          ]}
        />
      </Flex>
    </>
  );
}

export default UnitInput;
