import { useNode } from "@craftjs/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setEdit } from "../../../redux/editor";
import HtmlSettings from "./settings";
import { IconInfoCircle } from '@tabler/icons-react';
import { Alert } from "@mantine/core";
import AlertSettings from "./settings";


export const EditorAlert = ({ title,text,type,color,icon, ...props })=> {
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
      <Alert
      {...props}
      ref={(ref) => connect(drag(ref))}
      onClick={click}
      variant={type}
      color={color}
      title={title}
      icon={icon}
    >
        {text}
    </Alert>
  );
}

EditorAlert.craft = {
  displayName: 'Alert',
  props: {
    title: "Alert title",
    text: "Your alert text",
    type: "light",
    color: "#228be6",
    icon: <IconInfoCircle />
  },
  related: {
    settings: AlertSettings,
  },
};