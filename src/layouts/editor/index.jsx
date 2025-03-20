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
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useMediaQuery } from "@mantine/hooks";
import { IconDashboard, IconLayoutGrid, IconTrash, IconWand } from "@tabler/icons-react";
import { Editor, Element, Frame, useEditor, useNode } from "@craftjs/core";
import { EditorContainer } from "../../components/editor/container";
import EditorPage from "../../Editor";
import Save from "./save";
import { useDispatch, useSelector } from "react-redux";
import Components from "./components";



function EditorLayout() {
  const rtl = false;
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const smallScreen = useMediaQuery("(max-width: 768px)");
  const mode = useSelector(state => state.editor.mode);
  const dispatch = useDispatch();
  const editorState = useSelector((state) => state.editor);
  const [deleteFunc,setDeleted] = useState(null);

  return (
    <>
      <Editor enabled={false} resolver={{EditorContainer}}>
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
              </Group>
              <Save />
            </Group>
          </AppShell.Header>

          {/* Sidebar */}
          <AppShell.Navbar>
            <AppShell.Section grow component={ScrollArea}>
              <Group justify="space-between">
                <ActionIcon color="gray" radius={0} size="xl" onClick={() => dispatch(setComponents())}>
                  <IconLayoutGrid />
                </ActionIcon>
                <Text >{editorState.title}</Text>
                {deleteFunc && mode === "edit" ? (
                  <ActionIcon color="red" radius={0} size="xl" onClick={deleteFunc}>
                    <IconTrash />
                  </ActionIcon>
                ) : <ThemeIcon color="gray" radius={0} size="xl"><IconWand /></ThemeIcon>}
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
