import { useNode } from "@craftjs/core";
import { Box, Button, Divider, Slider, Space, Text, TextInput } from '@mantine/core';
import { useEditorMode } from "../../../context/editor";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setEdit } from "../../../redux/editor";
import SpacerSettings from "./settings";

export const EditorSpacer = ({ space, ...props })=> {
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
      <Space
      {...props}
      ref={(ref) => connect(drag(ref))}
      onClick={click}
      h={space}
    />
  );
}

EditorSpacer.craft = {
  displayName: 'Divider',
  props: {
    space: "1",
  },
  related: {
    settings: SpacerSettings,
  },
};