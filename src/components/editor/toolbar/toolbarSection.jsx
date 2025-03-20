import { useNode } from "@craftjs/core";
import React from "react";

function ToolbarSection({ title, props, summary, children }) {
  const { nodeProps } = useNode((node) => ({
    nodeProps:
      props &&
      props.reduce((res, key) => {
        res[key] = node.data.props[key] || null;
        return res;
      }, {}),
  }));
  return children
}

export default ToolbarSection;
