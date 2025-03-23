import { useNode } from "@craftjs/core";
import {
  Box,
  Button,
  List,
  Slider,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { useEditorMode } from "../../../context/editor";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setEdit } from "../../../redux/editor";
import { ShowIcon } from "../../iconSelector";
import IconListSettings from "./settings";

export const EditorIconList = ({ items, ...props }) => {
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
  };

  return (
    <List {...props} ref={(ref) => connect(drag(ref))} onClick={click}>
      {items.map((item, i) => {
        return (
          <List.Item
            icon={
              <ThemeIcon radius="xl">
                <ShowIcon icon={item.icon} iconsize="16" />
              </ThemeIcon>
            }
          >
            {item.text}
          </List.Item>
        );
      })}
    </List>
  );
};

EditorIconList.craft = {
  displayName: "Icon",
  props: {
    items: [
      {
        text: "Default Icon",
        icon: "IconPhoto",
      },
    ],
  },
  related: {
    settings: IconListSettings,
  },
};
