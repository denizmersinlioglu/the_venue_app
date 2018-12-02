import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

const SideDrawer = props => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -100
    });
    props.onClose(false);
  };

  const drawerButtons = {
    titles: [
      'Event starts in',
      'Venue Info',
      'Highlights',
      'Pricing',
      'Location'
    ],
    links: ['featured', 'info', 'highlights', 'pricing', 'location']
  };

  return (
    <Drawer
      anchor='right'
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component='nav'>
        {drawerButtons.titles.map((key, i) => (
          <ListItem
            key={key}
            button
            onClick={() => {
              scrollToElement(drawerButtons.links[i]);
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
