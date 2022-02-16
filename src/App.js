import * as React from 'react'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'


import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Enzyme from './faq/Enzyme'
import Aria from './faq/Aria'
import AutocompletePage from './inputs-pages/AutocompletePage'
import ButtonPage from './inputs-pages/ButtonPage'
import ButtonGroupPage from './inputs-pages/ButtonGroupPage'
import CheckboxPage from './inputs-pages/CheckboxPage'
import FloatingActionButtonPage from './inputs-pages/FloatingActionButtonPage'

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  let navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            MUI Testing
          </Typography>
        </Toolbar>
      </AppBar>
      
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

          <ListItem button onClick={() => navigate('mui-testing/')}>
            <ListItemText primary={"Home"}/>
          </ListItem>
          <ListItem button onClick={() => navigate('mui-testing/about')}>
            <ListItemText primary={"About"} />
          </ListItem>

          <ListSubheader>
            FAQ
          </ListSubheader>
          <ListItem button onClick={() => navigate('mui-testing/enzyme')}>
            <ListItemText primary={"Enzyme or RTL?"} />
          </ListItem>
          <ListItem button onClick={() => navigate('mui-testing/aria')}>
            <ListItemText primary={"Why aria-label?"} />
          </ListItem>

          <ListSubheader>
            Inputs
          </ListSubheader>
          <ListItem button >
            <ListItemText primary={"Autocomplete"} onClick={() => navigate('mui-testing/autocomplete')}/>
          </ListItem>
          <ListItem button >
            <ListItemText primary={"Button"} onClick={() => navigate('mui-testing/button')}/>
          </ListItem>
          <ListItem button >
            <ListItemText primary={"Button Group"} onClick={() => navigate('mui-testing/buttongroup')}/>
          </ListItem>
          <ListItem button >
            <ListItemText primary={"Checkbox"} onClick={() => navigate('mui-testing/checkbox')}/>
          </ListItem>
          <ListItem button >
            <ListItemText primary={"Floating Action Button"} onClick={() => navigate('mui-testing/fab')}/>
          </ListItem>

          <ListSubheader>
            Other Helpful Test Examples
          </ListSubheader>
          <ListItem button disabled>
            <ListItemText primary={"React Router"} />
          </ListItem>
          <ListItem button disabled>
            <ListItemText primary={"API Mocking"} />
          </ListItem>
          <ListItem button disabled>
            <ListItemText primary={"useContext"} />
          </ListItem>
          <ListItem button disabled>
            <ListItemText primary={"getBy"} />
          </ListItem>


        </List>
        <Divider />
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Routes>
            <Route path="mui-testing/" element={<Home />}/>
        </Routes>
        <Routes>
            <Route path="mui-testing/about" element={<About />}/>
        </Routes>
        <Routes>
            <Route path="mui-testing/enzyme" element={<Enzyme />}/>
        </Routes>
        <Routes>
            <Route path="mui-testing/aria" element={<Aria />}/>
        </Routes>
        <Routes>
            <Route path="mui-testing/autocomplete" element={<AutocompletePage />}/>
        </Routes>
        <Routes>
            <Route path="mui-testing/button" element={<ButtonPage />}/>
        </Routes>
        <Routes>
            <Route path="mui-testing/buttongroup" element={<ButtonGroupPage />}/>
        </Routes>
        <Routes>
            <Route path="mui-testing/checkbox" element={<CheckboxPage />}/>
        </Routes>
        <Routes>
            <Route path="mui-testing/fab" element={<FloatingActionButtonPage />}/>
        </Routes>

      </Box>
    </Box>
  );
}