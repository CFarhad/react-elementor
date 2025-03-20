import { Box, Button, Flex, Grid, SimpleGrid, Text } from "@mantine/core";
import { useEditor } from "@craftjs/core";
import "../../elementor-icons.css";



const elements = [
    {
      icon: "eicon-text",
      label: "Text",
      element: <Button />,
    },
  ];

function Components() {
    const { connectors } = useEditor();
  return (
  <SimpleGrid cols={2}>
    {elements.map((item, index) => (
      <Box key={index} style={{ textAlign: 'center'}} ref={(ref) => connectors.create(ref, item.element)}>
        <Button
          h={70}
          variant="light"
          color=""
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          fullWidth
        >
          <i className={item.icon} style={{ fontSize: '35px' }}></i>
        </Button>
        <Text mt="sm" ta="center" size="xs" fw={600} style={{ whiteSpace: 'break-spaces' }}>
          {item.label}
        </Text>
      </Box>
    ))}
  </SimpleGrid>
  );
}

export default Components;
