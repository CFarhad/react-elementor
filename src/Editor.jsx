import {
  Editor,
  Frame,
  Canvas,
  Selector,
  useNode,
  Element,
} from "@craftjs/core";
import { EditorContainer } from "./components/editor/container";

function EditorPage() {
  return (
    <Frame>
      <Element is={EditorContainer} canvas data-cy="root-container">
        
      </Element>
    </Frame>
  );
}

export default EditorPage
