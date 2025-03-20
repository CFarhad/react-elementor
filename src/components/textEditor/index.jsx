import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { RichTextEditor } from "@mantine/tiptap";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import "@mantine/tiptap/styles.css";
import React, { useState } from "react";
import { shallowEqual } from "@mantine/hooks";
import { TextSize } from "./TextSize"; // Import the custom extension
import { Button, Popover, Slider } from "@mantine/core";
import { IconTextSize } from "@tabler/icons-react";
import TextStyle from "@tiptap/extension-text-style";

function TextEditor({ value, onChange }) {
  const [fontSize, setFontSize] = useState(16);
  const [popoverOpened, setPopoverOpened] = useState(false);
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      TextSize,
      Underline,
      TextAlign.configure({ types: ["paragraph"] }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const handleFontSizeChange = (value) => {
    setFontSize(value);
    editor?.commands.setFontSize(`${value}px`);
  };

  return (
    <RichTextEditor editor={editor} styles={{ content: { fontSize: "14px" } }}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Undo />
          <RichTextEditor.Redo />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Blockquote />
          <RichTextEditor.Hr />
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Subscript />
          <RichTextEditor.Superscript />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft />
          <RichTextEditor.AlignCenter />
          <RichTextEditor.AlignJustify />
          <RichTextEditor.AlignRight />
        </RichTextEditor.ControlsGroup>

        {/* Popover for Font Size */}
        <RichTextEditor.ControlsGroup>
          <Popover
          clickOutsideEvents={['mouseup', 'touchend']}
            opened={popoverOpened}
            onClose={() => setPopoverOpened(false)}
            position="bottom"
            withArrow
          >
            <Popover.Target>
              <Button
                onClick={() => setPopoverOpened((o) => !o)}
                variant="default"
                size="xs"
                h={26}
                px="xs"
                c="gray.7"
              >
                <IconTextSize size={16} stroke={1.5} />
              </Button>
            </Popover.Target>

            <Popover.Dropdown>
              <Slider
                value={fontSize}
                onChange={handleFontSizeChange}
                min={8}
                max={72}
                step={1}
                style={{ width: "200px" }}
                label={(value) => `${value}px`}
              />
            </Popover.Dropdown>
          </Popover>
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

const MemoizedTextEditor = React.memo(TextEditor, (prev, next) => {
  return !shallowEqual(prev, next);
});

export default MemoizedTextEditor;
