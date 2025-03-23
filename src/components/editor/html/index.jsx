import { useNode } from "@craftjs/core";
import { Box, Button, Divider, Slider, Text, TextInput } from '@mantine/core';
import { useEditorMode } from "../../../context/editor";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setEdit } from "../../../redux/editor";
import HoverBox from "../hoverBox";
import ButtonSettings from "./settings";
import DividerSettings from "./settings";
import HtmlSettings from "./settings";

export const EditorHtml = ({ code, ...props })=> {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));
  const [select, setSelect] = useState(false);
  const dispatch = useDispatch();

  const click = () => {
    setSelect(true);
    dispatch(setEdit());
  }

  return (
      <div
      {...props}
      ref={(ref) => connect(drag(ref))}
      onClick={click}
      dangerouslySetInnerHTML={{__html:code}}
    />
  );
}

EditorHtml.craft = {
  displayName: 'Divider',
  props: {
    code: "<p>your code</p>",
  },
  related: {
    settings: HtmlSettings,
  },
};