import { Flex, NumberInput, Select, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";

function UnitInput({label,number,unit,onChange}) {
  const [xunit, setUnit] = useState(unit || 'px');
  // remove everything following with number
  const [value,setValue] = useState(number.replace(/[^0-9]/g, ''));

  useEffect(() => {
    onChange(`${value}${xunit}`);
  },[xunit,value])
  return (
    <>
      <Text size="xs" mb="xs">{label}</Text>
      <Flex align="end" gap="xs">
        <NumberInput value={value} onChange={(val) => setValue(val)} w="100%" size="xs" hideControls={true} />
        <Select
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
