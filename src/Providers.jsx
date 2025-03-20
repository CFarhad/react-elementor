import React from 'react'
import { Button, createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import Theme from "./libs/theme";
import EditorPage from './Editor';
import EditorLayout from './layouts/editor';
import store from "./redux";
import { Provider } from 'react-redux';

const theme = createTheme(Theme);
function Providers({childen}) {
  return (
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <EditorLayout />
      </Provider>
    </MantineProvider>
  )
}

export default Providers