import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Box, createTheme, Button, Grid } from '@mui/material';
import "@fontsource/plus-jakarta-sans";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home(props) {
    return(
        <>
            <Container maxWidth sx={{ bgcolor: '#001e3c', height: '800px', display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Box sx={{maxWidth: "800px"}}>
                    <Typography 
                        theme={createTheme({typography: {fontFamily:["Plus Jakarta Sans"]}})} 
                        sx={{fontWeight: "1000", margin: 2}} 
                        color="white" 
                        variant="h2"
                    >
                        The MaterialUI testing reference you needed</Typography>
                    <Typography 
                        color="gray" 
                        sx={{margin: 2, maxWidth: "650px"}}
                    >
                        This website provides a quick reference for testing Material UI components with React Testing Library. Simply click on the button below to see the components.
                    </Typography>
                    <Button onClick={()=>props.setOpen(true)} sx={{margin: 2}} variant="contained">Open Component Drawer</Button>
                    <Button href="https://github.com/pham-andrew/mui-testing" sx={{margin: 2}} variant="outlined"><GitHubIcon sx={{marginRight: 1}}/>github.com/pham-andrew/mui-testing</Button>
                </Box>
            </Container>
            <Container maxWidth sx={{ bgcolor: '#0a1929', height: '800px', display: "flex", justifyContent: "left", alignItems: "flex-start", padding: 10}}>
                <Grid container>
                    <Typography theme={createTheme({typography: {fontFamily:["Plus Jakarta Sans"]}})} sx={{margin: 2, fontWeight: "bold"}} color="primary">FAQ</Typography>
                    <Grid xs={12} sx={{margin: 2}}>
                        <Typography 
                            color="white" 
                            variant="h4" 
                            theme={createTheme({typography: {fontFamily:["Plus Jakarta Sans"]}})}
                            sx={{fontWeight: "800"}}
                        >
                            React Testing Library or Enzyme?
                        </Typography>
                    </Grid>
                    <Grid xs={12} sx={{margin: 2}}>
                    <Typography color="gray">React recommends using Jest as the test runner and React Testing Library.</Typography>
                    </Grid>
                    <Grid xs={12} sx={{margin: 2}}>
                        <Typography 
                            color="white" 
                            variant="h4" 
                            theme={createTheme({typography: {fontFamily:["Plus Jakarta Sans"]}})}
                            sx={{fontWeight: "800"}}
                        >
                            Why aria-label?
                        </Typography>
                    </Grid>
                    <Grid xs={12} sx={{margin: 2}}>
                    <Typography color="gray" sx={{maxWidth: "800px"}}>
                        You may notice that there are a lot of aria-labels in our test examples. Why is that? To find the element. It's like a test ID that's exposed to the user that we can use to identify elements.
                        ARIA is a W3C specification that stands for “Accessible Rich Internet Applications”. It consists of markup that can be added to HTML in order to clearly communicate the roles, states, and properties of user interface elements.
                        The aria-label provides the element with an accessible name, usually when there's no name already or when the content isn't visible.
                        Why can't you just find by test-id? It's bad practice because we want to test for things "visible" to the user and the aria label is exposed via the accessibility tree. The visually impaired may have a screen reader read it to them so while it's not visible, it is exposed.
                        Fun fact: The RTL documentation list queries by priority. Using an aria-label allows you to get by label text, number 1 on the priority list. Test IDs are last on that list if you were wondering.
                    </Typography>
                    </Grid>
                    <Grid xs={12} sx={{margin: 2}}>
                        <Typography 
                            color="white" 
                            variant="h4" 
                            theme={createTheme({typography: {fontFamily:["Plus Jakarta Sans"]}})}
                            sx={{fontWeight: "800"}}
                        >
                            Who made this website?
                        </Typography>
                    </Grid>
                    <Grid xs={12} sx={{margin: 2}}>
                    <Typography color="gray" sx={{maxWidth: "800px"}}>
                        This site was made by Andrew Pham who hated testing and test driven development. 
                    </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}