import { useNode } from "@craftjs/core";
import { Progress, Rating } from "@mantine/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setEdit } from "../../../redux/editor";
import ProgressSettings from "./setting";

export const EditorProgress = ({ percent,color,radius,size,striped,animated, ...props }) => {
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
      <Progress
        {...props}
        onClick={click}
        value={percent}
        color={color}
        radius={radius}
        size={size}
        striped={striped}
        animated={animated}
      />
    </div>
  );
};

EditorProgress.craft = {
  displayName: "Rating",
  props: {
    percent: "70",
    color: "#228be6",
    radius: "20",
    size: "10",
    striped: false,
    animated: false
  },
  related: {
    settings: ProgressSettings,
  },
};
