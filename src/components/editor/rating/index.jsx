import { useNode } from "@craftjs/core";
import { Box, Button, Rating, Slider, Text, TextInput } from "@mantine/core";
import { useEditorMode } from "../../../context/editor";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setEdit } from "../../../redux/editor";
import HoverBox from "../hoverBox";
import ButtonSettings from "./settings";
import RatingSettings from "./setting";

export const EditorRating = ({ rating, color, count, ...props }) => {
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
    <div ref={(ref) => connect(drag(ref))}>
      <Rating
        {...props}
        onClick={click}
        value={rating}
        color={color}
        count={count}
        readOnly
      />
    </div>
  );
};

EditorRating.craft = {
  displayName: "Rating",
  props: {
    rating: "3",
    color: "#fab005",
    count: "5",
  },
  related: {
    settings: RatingSettings,
  },
};
