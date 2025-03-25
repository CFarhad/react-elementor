import { useNode } from "@craftjs/core";
import { Box, Button, Divider, Slider, Text, TextInput } from '@mantine/core';
import { useEditorMode } from "../../../context/editor";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setEdit } from "../../../redux/editor";
import HoverBox from "../hoverBox";
import VideoSettings from "./settings";

export const EditorVideo = ({ embed, ...props })=> {
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
      dangerouslySetInnerHTML={{__html:embed}}
    />
  );
}

EditorVideo.craft = {
  displayName: 'Video',
  props: {
    embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Y-x0efG1seA?si=AWUdXxivzznG2cdz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  related: {
    settings: VideoSettings,
  },
};