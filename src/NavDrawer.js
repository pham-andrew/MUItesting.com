import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader'

const drawerWidth = 240;

export default function NavDrawer() {
    <Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            },
        }}
        variant="permanent"
        anchor="left"
        >
        <Toolbar />
        <Divider />
        <List>
            <ListItem button >
            <ListItemText primary={"Home"} />
            </ListItem>
            <ListItem button >
            <ListItemText primary={"About"} />
            </ListItem>
            <ListItem button >
            <ListItemText primary={"FAQ"} />
            </ListItem>
            <ListSubheader>
            Components
            </ListSubheader>
            <ListItem button >
            <ListItemText primary={"Button"} />
            </ListItem>
        </List>
        <Divider />
    </Drawer>
}