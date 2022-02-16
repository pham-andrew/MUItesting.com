import * as React from 'react'
import Helmet from 'react-helmet'

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
  let navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex' }}>
      <Helmet >
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1523342493703569" crossorigin="anonymous"></script>
      </Helmet>
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

          <ListItem button onClick={() => navigate('')}>
            <ListItemText primary={"Home"}/>
          </ListItem>
          <ListItem button onClick={() => navigate('about')}>
            <ListItemText primary={"About"} />
          </ListItem>

          <ListSubheader>
            FAQ
          </ListSubheader>
          <ListItem button onClick={() => navigate('enzyme')}>
            <ListItemText primary={"Enzyme or RTL?"} />
          </ListItem>
          <ListItem button onClick={() => navigate('aria')}>
            <ListItemText primary={"Why aria-label?"} />
          </ListItem>

          <ListSubheader>
            Inputs
          </ListSubheader>
          <ListItem button >
            <ListItemText primary={"Autocomplete"} onClick={() => navigate('autocomplete')}/>
          </ListItem>
          <ListItem button >
            <ListItemText primary={"Button"} onClick={() => navigate('button')}/>
          </ListItem>
          <ListItem button >
            <ListItemText primary={"Button Group"} onClick={() => navigate('buttongroup')}/>
          </ListItem>
          <ListItem button >
            <ListItemText primary={"Checkbox"} onClick={() => navigate('checkbox')}/>
          </ListItem>
          <ListItem button >
            <ListItemText primary={"Floating Action Button"} onClick={() => navigate('fab')}/>
          </ListItem>

          <ListSubheader>
            Other Helpful Test Examples
          </ListSubheader>
          <ListItem button disabled>
            <ListItemText primary={"React Router"}/>
          </ListItem>
          <ListItem button disabled>
            <ListItemText primary={"API Mocking"}/>
          </ListItem>
          <ListItem button disabled>
            <ListItemText primary={"useContext"}/>
          </ListItem>
          <ListItem button disabled>
            <ListItemText primary={"Query Examples, getBy..."}/>
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
            <Route path="about" element={<About />}/>
        </Routes>
        <Routes>
            <Route path="enzyme" element={<Enzyme />}/>
        </Routes>
        <Routes>
            <Route path="aria" element={<Aria />}/>
        </Routes>
        <Routes>
            <Route path="autocomplete" element={<AutocompletePage />}/>
        </Routes>
        <Routes>
            <Route path="button" element={<ButtonPage />}/>
        </Routes>
        <Routes>
            <Route path="buttongroup" element={<ButtonGroupPage />}/>
        </Routes>
        <Routes>
            <Route path="checkbox" element={<CheckboxPage />}/>
        </Routes>
        <Routes>
            <Route path="fab" element={<FloatingActionButtonPage />}/>
        </Routes>
        <Routes>
            <Route path="" element={<Home />}/>
        </Routes>
      </Box>
    </Box>
  );
}