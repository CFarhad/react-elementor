import { useNode } from "@craftjs/core";
import { Box, Slider, Text, TextInput } from '@mantine/core';
import { useEditorMode } from "../../../context/editor";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setEdit } from "../../../redux/editor";
import HoverBox from "../hoverBox";
import TextSettings from "./settings";

export const EditorText = ({ text, fontSize,color, textAlign,fontWeight,component, ...props })=> {
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
      <Box
      {...props}
      ref={(ref) => connect(drag(ref))}
      style={{ minHeight: "15px",fontSize: `${fontSize}px`, textAlign,color,fontWeight }}
      component={component}
      onClick={click}
      dangerouslySetInnerHTML={{__html:text }}
    />
  );
}

EditorText.craft = {
  displayName: 'Button',
  props: {
    text: "Default Text",
    fontSize: 16,
    color: "#000000",
    fontWeight: '500',
    component: "div"
  },
  related: {
    settings: TextSettings,
  },
};