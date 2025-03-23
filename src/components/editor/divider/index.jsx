import { useNode } from "@craftjs/core";
import { Box, Button, Divider, Slider, Text, TextInput } from '@mantine/core';
import { useEditorMode } from "../../../context/editor";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setEdit } from "../../../redux/editor";
import HoverBox from "../hoverBox";
import ButtonSettings from "./settings";
import DividerSettings from "./settings";

export const EditorDivider = ({ type,label,size,color, ...props })=> {
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
      <Divider
      {...props}
      ref={(ref) => connect(drag(ref))}
      onClick={click}
      variant={type}
      label={label}
      size={size}
      styles={{root:{borderColor:color}}}
    />
  );
}

EditorDivider.craft = {
  displayName: 'Divider',
  props: {
    label: "",
    type: "solid",
    size: "1",
    color: "#ccc"
  },
  related: {
    settings: DividerSettings,
  },
};