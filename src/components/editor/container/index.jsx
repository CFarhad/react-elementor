import { useNode } from "@craftjs/core";
import { Box, Container } from "@mantine/core";
import React, { useState } from "react";


export const EditorContainer = ({ children, container = true }) => {
  return (
    <Box component={ContainerBox}>
      {container ? <Container>{children}</Container> : children}
    </Box>
  );
};

const ContainerBox = ({ children }) => {
  const {
    connectors: { connect, drag },
    selected,
    id,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
  }));

  return (
    <div ref={(ref) => connect(drag(ref))} >
      {children}
    </div>
  );
};
