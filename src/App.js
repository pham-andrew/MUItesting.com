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
import FAQ from './pages/FAQ'
import ButtonPage from './component-pages/ButtonPage'

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
            MUI x React Testing Library
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

          <ListItem button onClick={() => navigate('mui-x-reacttestinglibrary/')}>
            <ListItemText primary={"Home"}/>
          </ListItem>
          <ListItem button onClick={() => navigate('mui-x-reacttestinglibrary/about')}>
            <ListItemText primary={"About"} />
          </ListItem>
          <ListItem button onClick={() => navigate('mui-x-reacttestinglibrary/faq')}>
            <ListItemText primary={"FAQ"} />
          </ListItem>

          <ListSubheader>
            Components
          </ListSubheader>
          <ListItem button >
            <ListItemText primary={"Button"} onClick={() => navigate('mui-x-reacttestinglibrary/button')}/>
          </ListItem>

          <ListSubheader>
            Other Helpful Tests
          </ListSubheader>
          <ListItem button >
            <ListItemText primary={"React Router"} />
          </ListItem>
          <ListItem button >
            <ListItemText primary={"API Mocking"} />
          </ListItem>
          <ListItem button >
            <ListItemText primary={"useContext"} />
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
            <Route path="mui-x-reacttestinglibrary/" element={<Home />}/>
        </Routes>
        <Routes>
            <Route path="mui-x-reacttestinglibrary/about" element={<About />}/>
        </Routes>
        <Routes>
            <Route path="mui-x-reacttestinglibrary/faq" element={<FAQ />}/>
        </Routes>
        <Routes>
            <Route path="mui-x-reacttestinglibrary/button" element={<ButtonPage />}/>
        </Routes>
      </Box>
    </Box>
  );
  
}