import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = props => {
  const DrawerButtons = [
    'Event starts in',
    'Venue Info',
    'Highlights',
    'Pricing',
    'Location'
  ];

  return (
    <Drawer
      anchor='right'
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component='nav'>
        {DrawerButtons.map(key => (
          <ListItem
            key={key}
            button
            onClick={() => {
              console.log('Side Drawer Selected :', key);
            }}
          >
            {key}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
