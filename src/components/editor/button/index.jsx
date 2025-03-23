import { useNode } from "@craftjs/core";
import { Box, Button, Slider, Text, TextInput } from '@mantine/core';
import { useEditorMode } from "../../../context/editor";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setEdit } from "../../../redux/editor";
import HoverBox from "../hoverBox";
import ButtonSettings from "./settings";

export const EditorButton = ({ text, textcolor,bgcolor,radius,link, ...props })=> {
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
      <Button
      {...props}
      ref={(ref) => connect(drag(ref))}
      c={textcolor}
      bg={bgcolor}
      onClick={click}
      component="a"
      href={link}
      radius={radius}
    >
      {text}
    </Button>
  );
}

EditorButton.craft = {
  displayName: 'Button',
  props: {
    text: "Click here",
    textcolor: "#fff",
    bgcolor: "#0f172b",
    link: "#",
    radius: "9"
  },
  related: {
    settings: ButtonSettings,
  },
};