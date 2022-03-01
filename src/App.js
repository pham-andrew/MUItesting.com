import * as React from 'react'
import { useState } from 'react'
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
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme } from '@mui/material'


import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import AutocompletePage from './inputs-pages/AutocompletePage'
import ButtonPage from './inputs-pages/ButtonPage'
import ButtonGroupPage from './inputs-pages/ButtonGroupPage'
import CheckboxPage from './inputs-pages/CheckboxPage'
import FloatingActionButtonPage from './inputs-pages/FloatingActionButtonPage'
import RadioPage from './inputs-pages/RadioPage'
import RatingPage from './inputs-pages/RatingPage'
import SelectPage from './inputs-pages/SelectPage'

import "@fontsource/plus-jakarta-sans";
import TextFieldPage from './inputs-pages/TextFieldPage'

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  let navigate = useNavigate()
  
  const [open, setOpen] = useState(false)

  return (
    <Box sx={{ display: 'flex' }}>
      <Helmet >
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1523342493703569" crossorigin="anonymous"></script>
      </Helmet>
      <AppBar style={{ background: '#071a2d' }}>
        <Toolbar>
          <IconButton
              size="large"
              edge="start"
              sx={{ mr: 2 }}
              color="inherit"
              onClick={()=>setOpen(true)}
            >
              <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" theme={createTheme({typography: {fontFamily:["Plus Jakarta Sans"]}})}>
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
        open={open}
        onClose={()=>setOpen(false)}
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>

          <ListItem button onClick={() => navigate('')}>
            <ListItemText primary={"Home"}/>
          </ListItem>

          <ListSubheader>
            Inputs
          </ListSubheader>
          <ListItem button onClick={() => navigate('autocomplete')}>
            <ListItemText primary={"Autocomplete"}/>
          </ListItem>
          <ListItem button onClick={() => navigate('button')}>
            <ListItemText primary={"Button"}/>
          </ListItem>
          <ListItem button onClick={() => navigate('buttongroup')}>
            <ListItemText primary={"Button Group"} />
          </ListItem>
          <ListItem button onClick={() => navigate('checkbox')}>
            <ListItemText primary={"Checkbox"}/>
          </ListItem>
          <ListItem button onClick={() => navigate('fab')}>
            <ListItemText primary={"Floating Action Button"}/>
          </ListItem>
          <ListItem button onClick={() => navigate('radio')}>
            <ListItemText primary={"Radio"}/>
          </ListItem>
          <ListItem button onClick={() => navigate('rating')}>
            <ListItemText primary={"Rating"}/>
          </ListItem>
          <ListItem button onClick={() => navigate('select')}>
            <ListItemText primary={"Select"}/>
          </ListItem>
          <ListItem button onClick={() => navigate('textfield')}>
            <ListItemText primary={"TextField"}/>
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
        sx={{ flexGrow: 1, bgcolor: 'background.default'}}
      >
        <Toolbar />
        <Routes>
            <Route path="autocomplete" element={<Box sx={{padding: 5}}><AutocompletePage /></Box>}/>
        </Routes>
        <Routes>
            <Route path="button" element={<Box sx={{padding: 5}}><ButtonPage /></Box>}/>
        </Routes>
        <Routes>
            <Route path="buttongroup" element={<Box sx={{padding: 5}}><ButtonGroupPage /></Box>}/>
        </Routes>
        <Routes>
            <Route path="checkbox" element={<Box sx={{padding: 5}}><CheckboxPage /></Box>}/>
        </Routes>
        <Routes>
            <Route path="fab" element={<Box sx={{padding: 5}}><FloatingActionButtonPage /></Box>}/>
        </Routes>
        <Routes>
            <Route path="radio" element={<Box sx={{padding: 5}}><RadioPage /></Box>}/>
        </Routes>
        <Routes>
            <Route path="rating" element={<Box sx={{padding: 5}}><RatingPage /></Box>}/>
        </Routes>
        <Routes>
            <Route path="select" element={<Box sx={{padding: 5}}><SelectPage /></Box>}/>
        </Routes>
        <Routes>
            <Route path="textfield" element={<Box sx={{padding: 5}}><TextFieldPage /></Box>}/>
        </Routes>
        <Routes>
            <Route path="" element={<Home setOpen={setOpen}/>}/>
        </Routes>
      </Box>
    </Box>
  );
}