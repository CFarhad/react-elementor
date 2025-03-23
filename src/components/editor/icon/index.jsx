import { useNode } from "@craftjs/core";
import { Box, Button, Slider, Text, TextInput, ThemeIcon } from '@mantine/core';
import { useEditorMode } from "../../../context/editor";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setEdit } from "../../../redux/editor";
import { ShowIcon } from "../../iconSelector";
import IconSettings from "./settings";

export const EditorIcon = ({ icon,size,bgcolor,iconcolor,radius,iconsize, ...props })=> {
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
      <ThemeIcon
      {...props}
      ref={(ref) => connect(drag(ref))}
      onClick={click}
      size={size}
      color={bgcolor}
      radius={radius}
      c={iconcolor}
    >
      <ShowIcon icon={icon} iconsize={iconsize} />
    </ThemeIcon>
  );
}

EditorIcon.craft = {
  displayName: 'Icon',
  props: {
    icon: "IconPhoto",
    size: "35",
    radius: "9",
    bgcolor: "#0f172b",
    iconcolor: "#ffffff",
    iconsize: "75%",
  },
  related: {
    settings: IconSettings,
  },
};