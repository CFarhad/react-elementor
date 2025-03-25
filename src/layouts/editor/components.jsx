import {
  Box,
  Button,
  SimpleGrid,
  Text,
  Accordion,
  Paper,
  TextInput,
  CloseButton,
} from "@mantine/core";
import { useEditor } from "@craftjs/core";
import { useState } from "react";
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
import { EditorIconList } from "../../components/editor/iconList";
import { EditorImage } from "../../components/editor/image";
import { IconSearch } from "@tabler/icons-react";
import { EditorVideo } from "../../components/editor/video";

const elements = [
  {
    name: "basic",
    children: [
      { icon: "eicon-t-letter", label: "Heading", keywords: ["title", "header", "text"], element: <EditorHeading /> },
      { icon: "eicon-image", label: "Image", keywords: ["photo", "picture", "media"], element: <EditorImage /> },
      { icon: "eicon-text", label: "Text Editor", keywords: ["text", "paragraph", "content"], element: <EditorText /> },
      { icon: "eicon-youtube", label: "Video", keywords: ["video", "media", "embed"], element: <EditorVideo /> },
      { icon: "eicon-button", label: "Button", keywords: ["button", "click", "action"], element: <EditorButton /> },
      { icon: "eicon-divider", label: "Divider", keywords: ["divider", "line", "separate"], element: <EditorDivider /> },
      { icon: "eicon-spacer", label: "Spacer", keywords: ["spacer", "gap", "empty"], element: <EditorSpacer /> },
      { icon: "eicon-favorite", label: "Icon", keywords: ["icon", "symbol", "graphic"], element: <EditorIcon /> },
      { icon: "eicon-code", label: "HTML", keywords: ["html", "code", "embed"], element: <EditorHtml /> },
      { icon: "eicon-alert", label: "Alert", keywords: ["alert", "notification", "warning"], element: <EditorAlert /> },
      { icon: "eicon-rating", label: "Rating", keywords: ["rating", "stars", "feedback"], element: <EditorRating /> },
      { icon: "eicon-skill-bar", label: "Progress Bar", keywords: ["progress", "bar", "status"], element: <EditorProgress /> },
      { icon: "eicon-bullet-list", label: "Icon List", keywords: ["list", "icon", "bullet"], element: <EditorIconList /> },
    ],
  },
];

function Components() {
  const { connectors } = useEditor();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredElements = elements.map((group) => ({
    ...group,
    children: group.children.filter((item) =>
      [item.label, ...item.keywords].some((word) =>
        word.toLowerCase().includes(searchTerm.toLowerCase())
      )
    ),
  }));

  return (
    <>
      <TextInput
        placeholder="Search Widget"
        leftSection={<IconSearch size={14} />}
        size="sm"
        radius={3}
        mx="md"
        className="italic"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        rightSection={
          <CloseButton
            variant="transparent"
            aria-label="Clear input"
            onClick={() => setSearchTerm('')}
            style={{ display: searchTerm ? undefined : 'none' }}
          />
        }
      />
      <Accordion
        defaultValue="item-0"
        variant="separated"
        chevronPosition="left"
        styles={{
          item: {
            backgroundColor: "transparent",
            border: "none",
            borderBottom: "1px solid #ccc",
            padding: 0,
            borderRadius: 0,
          },
          control: { padding: "0 14px" },
          content: { padding: 0,paddingBottom:20 },
        }}
      >
        {filteredElements.map((group, index) => (
          group.children.length > 0 && (
            <Accordion.Item key={index} value={`item-${index}`}>
              <Accordion.Control fw={600}>{group.name}</Accordion.Control>
              <Accordion.Panel px="md">
                <SimpleGrid cols={2}>
                  {group.children.map((item, idx) => (
                    <Paper
                      withBorder
                      key={idx}
                      style={{ textAlign: "center" }}
                      ref={(ref) => connectors.create(ref, item.element)}
                      pb="md"
                      radius={3}
                    >
                      <Button
                        h={70}
                        variant="white"
                        color="#515962"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        fullWidth
                      >
                        <i className={item.icon} style={{ fontSize: "29px" }}></i>
                      </Button>
                      <Text
                        ta="center"
                        size="12px"
                        fw={400}
                        style={{ whiteSpace: "break-spaces" }}
                        c="#515962"
                      >
                        {item.label}
                      </Text>
                    </Paper>
                  ))}
                </SimpleGrid>
              </Accordion.Panel>
            </Accordion.Item>
          )
        ))}
      </Accordion>
    </>
  );
}

export default Components;
