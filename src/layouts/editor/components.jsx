import { Box, Button, Flex, Grid, SimpleGrid, Text } from "@mantine/core";
import { useEditor } from "@craftjs/core";
import "../../elementor-icons.css";
import { EditorText } from "../../components/editor/text";
import { EditorHeading } from "../../components/editor/heading";
import { EditorButton } from "../../components/editor/button";
import { EditorDivider } from "../../components/editor/divider";
import { EditorSpacer } from "../../components/editor/spacer";
import { EditorHtml } from "../../components/editor/html";
import { EditorAlert } from "../../components/editor/alert";
import { EditorRating } from "../../components/editor/rating";
import { EditorProgress } from "../../components/editor/progress";
import { EditorIcon } from "../../components/editor/icon";
import IconListSettings from "../../components/editor/iconList/settings";
import { EditorIconList } from "../../components/editor/iconList";



const elements = [
    {
      icon: "eicon-t-letter",
      label: "Heading",
      element: <EditorHeading />,
    },
    {
      icon: "eicon-image",
      label: "Image",
      element: <Box />,
    },
    {
      icon: "eicon-text",
      label: "Text Editor",
      element: <EditorText />,
    },
    {
      icon: "eicon-youtube",
      label: "Video",
      element: <Box />,
    },
    {
      icon: "eicon-button",
      label: "Button",
      element: <EditorButton />,
    },
    {
      icon: "eicon-divider",
      label: "Divider",
      element: <EditorDivider />,
    },
    {
      icon: "eicon-spacer",
      label: "Spacer",
      element: <EditorSpacer />,
    },
    {
      icon: "eicon-favorite",
      label: "Icon",
      element: <EditorIcon />,
    },
    {
      icon: "eicon-code",
      label: "HTML",
      element: <EditorHtml />,
    },
    {
      icon: "eicon-alert",
      label: "Alert",
      element: <EditorAlert />,
    },
    {
      icon: "eicon-rating",
      label: "Rating",
      element: <EditorRating />,
    },
    {
      icon: "eicon-skill-bar",
      label: "Porgress Bar",
      element: <EditorProgress />,
    },
    {
      icon: "eicon-bullet-list",
      label: "Icon List",
      element: <EditorIconList />,
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
