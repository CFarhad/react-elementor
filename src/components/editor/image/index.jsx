import { useNode } from "@craftjs/core";
import { Box, Button, Divider, Image, Slider, Text, TextInput } from '@mantine/core';
import { useEditorMode } from "../../../context/editor";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setEdit } from "../../../redux/editor";
import ImageSettings from "./settings";
import imageFallback from "../../../assets/imagefallback.svg";

export const EditorImage = ({ src,fit,w,h, ...props })=> {
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
      <Image
      {...props}
      ref={(ref) => connect(drag(ref))}
      onClick={click}
      fallbackSrc={imageFallback}
      src={typeof src === "string" ? src : URL.createObjectURL(src)}
      fit={fit}
      w={w || "auto"}
      h={h || "auto"}
    />
  );
}

EditorImage.craft = {
  displayName: 'Image',
  props: {
    src: imageFallback,
    fit: "contain",
    w: "100%",
    h: "100%"
  },
  related: {
    settings: ImageSettings,
  },
};