import React, { useEffect } from 'react';
import { useEditor } from '@craftjs/core';
import { Box, Divider, Space, Tabs, TextInput } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { setComponents } from '../../redux/editor';

function Settings({ setDeleted }) {
  const dispatch = useDispatch();
  const { actions, selected, isEnabled, query } = useEditor((state, query) => {
    const currentNodeId = query.getEvent('selected').last();
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });

  useEffect(() => {
    if (selected) {
      setDeleted(() => () => {
        actions.delete(selected.id);
        dispatch(setComponents()); // Example dispatch
      });
    }
  }, [selected]);

  return isEnabled && selected ? (
    <div data-cy="settings-panel">
      {selected.settings && React.createElement(selected.settings)}
    </div>
  ) : null;
}

export default Settings;