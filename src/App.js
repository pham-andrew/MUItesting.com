import * as React from 'react'
import { useState } from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'

import "@fontsource/plus-jakarta-sans";
import "@fontsource/ibm-plex-sans";

import { ThemeProvider, createTheme } from '@mui/material'
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
import Collapse from '@mui/material/Collapse';
import { ListItemButton } from '@mui/material';

import { ExpandMore, ExpandLess } from '@mui/icons-material';

import Home from './Home'

import AutocompletePage from './inputs-pages/AutocompletePage'
import ButtonPage from './inputs-pages/ButtonPage'
import ButtonGroupPage from './inputs-pages/ButtonGroupPage'
import CheckboxPage from './inputs-pages/CheckboxPage'
import FloatingActionButtonPage from './inputs-pages/FloatingActionButtonPage'
import RadioPage from './inputs-pages/RadioPage'
import RatingPage from './inputs-pages/RatingPage'
import SelectPage from './inputs-pages/SelectPage'
import SliderPage from './inputs-pages/SliderPage'
import SwitchPage from './inputs-pages/SwitchPage'
import TextFieldPage from './inputs-pages/TextFieldPage'
import ToggleButtonPage from './inputs-pages/ToggleButtonPage'

import AvatarPage from './data-display/AvatarPage'
import BadgePage from './data-display/BadgePage';
import ChipPage from './data-display/ChipPage';
import DividerPage from './data-display/DividerPage';
import IconPage from './data-display/IconPage';
import SorTablePage from './data-display/SorTablePage';
import TooltipPage from './data-display/TooltipPage';

import SnackbarPage from './feedback-pages/SnackbarPage'

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  let navigate = useNavigate()

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isInputsOpen, setIsInputsOpen] = useState(false);
  const [isDataDisplayOpen, setIsDataDisplayOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <ThemeProvider theme={createTheme({typography:{fontFamily:["IBM Plex Sans"]}})} >
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
                onClick={()=>setIsDrawerOpen(true)}
              >
                <MenuIcon />
            </IconButton>
            <Typography onClick={()=>navigate('')} variant="h6" theme={createTheme({typography:{fontFamily:["Plus Jakarta Sans"]}})}>
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
          PaperProps={{
            sx: {
              backgroundColor: "#0A1929",
              color: "#B2BAC2"
            }
          }}
          open={isDrawerOpen}
          onClose={()=>setIsDrawerOpen(false)}
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>

            <ListItem button onClick={() => navigate('')}>
              <ListItemText primary={"Home"}/>
            </ListItem>

            <ListItemButton onClick={() => setIsInputsOpen(!isInputsOpen)}>
              <ListItemText primary="Inputs" sx={{color: "white"}}/>
              {isInputsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={isInputsOpen}>
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
              <ListItem button onClick={() => navigate('slider')}>
                <ListItemText primary={"Slider"}/>
              </ListItem>
              <ListItem button onClick={() => navigate('switch')}>
                <ListItemText primary={"Switch"}/>
              </ListItem>
              <ListItem button onClick={() => navigate('textfield')}>
                <ListItemText primary={"TextField"}/>
              </ListItem>
              <ListItem button onClick={() => navigate('toggle')}>
                <ListItemText primary={"ToggleButton"}/>
              </ListItem>
            </Collapse>

            <ListItemButton onClick={() => setIsDataDisplayOpen(!isDataDisplayOpen)}>
              <ListItemText primary="Data Display" sx={{color: "white"}}/>
              {isDataDisplayOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={isDataDisplayOpen}>
              <ListItem button onClick={() => navigate('avatar')}>
                <ListItemText primary={"Avatar"}/>
              </ListItem>
              <ListItem button onClick={() => navigate('badge')}>
                <ListItemText primary={"Badge"}/>
              </ListItem>
              <ListItem button onClick={() => navigate('chip')}>
                <ListItemText primary={"Chip"}/>
              </ListItem>
              <ListItem button onClick={() => navigate('divider')}>
                <ListItemText primary={"Divider"}/>
              </ListItem>
              <ListItem button onClick={() => navigate('icon')}>
                <ListItemText primary={"Icon"}/>
              </ListItem>
              <ListItem button onClick={() => navigate('sortable')}>
                <ListItemText primary={"SorTable"}/>
              </ListItem>
              <ListItem button onClick={() => navigate('tooltip')}>
                <ListItemText primary={"Tooltip"}/>
              </ListItem>
            </Collapse>

            <ListItemButton onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}>
              <ListItemText primary="Feedback" sx={{color: "white"}}/>
              {isFeedbackOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={isFeedbackOpen}>
              <ListItem button onClick={() => navigate('snackbar')}>
                <ListItemText primary={"Snackbar"}/>
              </ListItem>
            </Collapse>

            {/* Other Helpful Test Examples
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
            </ListItem> */}
            
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
              <Route path="slider" element={<Box sx={{padding: 5}}><SliderPage /></Box>}/>
          </Routes>
          <Routes>
              <Route path="snackbar" element={<Box sx={{padding: 5}}><SnackbarPage /></Box>}/>
          </Routes>
          <Routes>
              <Route path="sortable" element={<Box sx={{padding: 5}}><SorTablePage /></Box>}/>
          </Routes>
          <Routes>
              <Route path="switch" element={<Box sx={{padding: 5}}><SwitchPage /></Box>}/>
          </Routes>
          <Routes>
              <Route path="textfield" element={<Box sx={{padding: 5}}><TextFieldPage /></Box>}/>
          </Routes>
          <Routes>
              <Route path="toggle" element={<Box sx={{padding: 5}}><ToggleButtonPage /></Box>}/>
          </Routes>
          <Routes>
              <Route path="avatar" element={<Box sx={{padding: 5}}><AvatarPage /></Box>}/>
          </Routes>
          <Routes>
              <Route path="badge" element={<Box sx={{padding: 5}}><BadgePage /></Box>}/>
          </Routes>
          <Routes>
              <Route path="chip" element={<Box sx={{padding: 5}}><ChipPage /></Box>}/>
          </Routes>
          <Routes>
              <Route path="divider" element={<Box sx={{padding: 5}}><DividerPage /></Box>}/>
          </Routes>
          <Routes>
              <Route path="icon" element={<Box sx={{padding: 5}}><IconPage /></Box>}/>
          </Routes>
          <Routes>
              <Route path="tooltip" element={<Box sx={{padding: 5}}><TooltipPage /></Box>}/>
          </Routes>
          <Routes>
              <Route path="" element={<Home setOpen={setIsDrawerOpen}/>}/>
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}