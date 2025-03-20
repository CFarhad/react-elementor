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

function EditorPage() {
  return (
    <Frame>
      <Element is={EditorContainer} canvas data-cy="root-container">
        <EditorText text="Hello" />
        <EditorText text="Hello" />
      </Element>
    </Frame>
  );
}

export default EditorPage
