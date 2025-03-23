import React, { useState } from "react";
import {
  AppShell,
  Burger,
  Group,
  ScrollArea,
  Skeleton,
  Container,
  Text,
  Button,
  ActionIcon,
  Divider,
  Paper,
  Box,
  ThemeIcon,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconDashboard,
  IconLayoutGrid,
  IconMoon,
  IconMoonStars,
  IconSun,
  IconTrash,
  IconWand,
} from "@tabler/icons-react";
import { Editor, Element, Frame, useEditor, useNode } from "@craftjs/core";
import { EditorContainer } from "../../components/editor/container";
import EditorPage from "../../Editor";
import Save from "./save";
import { useDispatch, useSelector } from "react-redux";
import Components from "./components";
import Settings from "./settings";
import { EditorText } from "../../components/editor/text";
import { setComponents } from "../../redux/editor";
import { EditorHeading } from "../../components/editor/heading";
import { EditorButton } from "../../components/editor/button";
import { EditorDivider } from "../../components/editor/divider";
import { EditorSpacer } from "../../components/editor/spacer";
import { EditorHtml } from "../../components/editor/html";
import { EditorAlert } from "../../components/editor/alert";
import { EditorRating } from "../../components/editor/rating";
import { EditorProgress } from "../../components/editor/progress";
import { EditorIcon } from "../../components/editor/icon";

function EditorLayout() {
  const rtl = false;
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const smallScreen = useMediaQuery("(max-width: 768px)");
  const mode = useSelector((state) => state.editor.mode);
  const dispatch = useDispatch();
  const editorState = useSelector((state) => state.editor);
  const [deleteFunc, setDeleted] = useState(null);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <>
      <Editor
        enabled={true}
        resolver={{
          EditorContainer,
          EditorText,
          EditorHeading,
          EditorButton,
          EditorDivider,
          EditorSpacer,
          EditorHtml,
          EditorAlert,
          EditorRating,
          EditorProgress,
          EditorIcon
        }}
      >
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
          }}
          padding="md"
          style={{ direction: rtl ? "rtl" : "ltr" }}
        >
          {/* Header */}
          <AppShell.Header>
            <Group h="100%" px="md" justify="space-between">
              <Group>
                <Burger
                  opened={mobileOpened}
                  onClick={toggleMobile}
                  hiddenFrom="sm"
                  size="sm"
                />
                <Burger
                  opened={desktopOpened}
                  onClick={toggleDesktop}
                  visibleFrom="sm"
                  size="sm"
                />
                <Text>Page Editor</Text>
                <ActionIcon
                  variant="light"
                  color="dark"
                  size="lg"
                  onClick={() => toggleColorScheme()}
                >
                  {dark ? (
                    <IconSun size="1.1rem" />
                  ) : (
                    <IconMoonStars size="1.1rem" />
                  )}
                </ActionIcon>
              </Group>
              <Group>
                <Save />
              </Group>
            </Group>
          </AppShell.Header>

          {/* Sidebar */}
          <AppShell.Navbar>
            <AppShell.Section grow component={ScrollArea}>
              <Group justify="space-between">
                <ActionIcon
                  color=""
                  radius={0}
                  size="xl"
                  onClick={() => dispatch(setComponents())}
                >
                  <IconLayoutGrid />
                </ActionIcon>
                <Text>{editorState.title}</Text>
                {deleteFunc && mode === "edit" ? (
                  <ActionIcon
                    color="red"
                    radius={0}
                    size="xl"
                    onClick={deleteFunc}
                  >
                    <IconTrash />
                  </ActionIcon>
                ) : (
                  <ThemeIcon color="" radius={0} size="xl">
                    <IconWand />
                  </ThemeIcon>
                )}
              </Group>
              <Divider />
              <Box px="lg" mt="md">
                {mode === "components" && <Components />}
                {mode === "edit" && <Settings setDeleted={setDeleted} />}
              </Box>
            </AppShell.Section>
          </AppShell.Navbar>

          {/* Main Content */}
          <AppShell.Main>
            <Container mt="md">
              <EditorPage />
            </Container>
          </AppShell.Main>
        </AppShell>
      </Editor>
    </>
  );
}

export default EditorLayout;
