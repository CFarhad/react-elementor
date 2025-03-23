import React, { createElement, useEffect, useState } from "react";
import * as Icons from "@tabler/icons-react";
import { FixedSizeGrid as VirtualizedGrid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Box, Flex, Modal, Paper, Text, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const IconSelector = ({value,onChange,label}) => {
  const [filter, setFilter] = useState("");
  const [opened, { toggle, close }] = useDisclosure();
  const [icons, setIcons] = useState(Object.entries(Icons));
  // value comes string of icon name and it must be like {icon: Icon, name: icons[index][0]}
  const findedIcon = Object.entries(Icons).find(([name]) => name === value);
  const [activeIcon, setActiveIcon] = useState(findedIcon ? { icon: findedIcon[1], name: findedIcon[0] } : null);
  useEffect(() => {
    setIcons(
      Object.entries(Icons).filter(([name]) =>
        name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      )
    );
  }, [filter]);
  const changer = (icon) => {
    setActiveIcon(icon);
    close();
    onChange(icon.name);
  }
  return (
    <>
    <Text size="xs">{label}</Text>
      <Paper
        withBorder
        p="md"
        display="flex"
        className="w-full h-32 flex-col items-center justify-center"
        style={{ cursor: "pointer" }}
        onClick={toggle}
      >
        <Flex align="center" justify="center" style={{ height: 200 }}>
          {activeIcon ? (
            <Flex direction="column" align="center">
                {createElement(activeIcon.icon, { size: 64,className:"text-gray-500" })}
                <Text size="xs">{activeIcon.name}</Text>
            </Flex>
          ) : (
            <Flex direction="column" align="center">
              <Icons.IconIcons className="text-gray-500" />
              <Text>Select an icon</Text>
            </Flex>
          )}
        </Flex>
      </Paper>
      <Modal title="Icon Selector" opened={opened} onClose={close} size="70%">
        <TextInput
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search icons"
        />
        <AutoSizer disableHeight>
          {({ width }) => (
            <VirtualizedGrid
              itemData={icons}
              columnCount={4}
              columnWidth={width / 4 - 10 / 2}
              height={600}
              rowCount={Math.ceil(icons.length / 4 - 4)}
              rowHeight={94}
              width={width}
            >
              {({ data, columnIndex, rowIndex, style }) => {
                const index = rowIndex * 4 + columnIndex;
                if (!data[index]) {
                  return null;
                }
                const Icon = icons[index] && icons[index][1];
                return (
                  <Box style={style} className="icon" p="sm">
                    <Paper
                    style={{cursor:"pointer"}}
                      shadow="sm"
                      py="sm"
                      onClick={() => changer({ icon: Icon, name: icons[index][0] })}
                    >
                      <Flex align="center" direction="column" justify="center">
                        {createElement(Icon, { size: 32,className:"text-gray-500" })}
                        <Text component="span" style={{ textOverflow: "clip" }}>
                          {icons[index][0]}
                        </Text>
                      </Flex>
                    </Paper>
                  </Box>
                );
              }}
            </VirtualizedGrid>
          )}
        </AutoSizer>
      </Modal>
    </>
  );
};

// component ShowIcon and give string of icon name and it must show the icon
export const ShowIcon = ({icon,iconsize})=>{
  const Icon = Icons[icon];
  return createElement(Icon, { width: iconsize, height: iconsize });
}

export default IconSelector;
