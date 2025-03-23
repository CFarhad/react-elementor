import {
  Editor,
  Frame,
  Canvas,
  Selector,
  useNode,
  Element,
} from "@craftjs/core";
import { EditorContainer } from "./components/editor/container";
import { EditorText } from "./components/editor/text";
import { EditorHeading } from "./components/editor/heading";

function EditorPage() {
  return (
    <Frame>
      <Element is={EditorContainer} canvas data-cy="root-container">
          <EditorHeading text="Hello guys" />
      </Element>
    </Frame>
  );
}

export default EditorPage
