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
                        color="#B2BAC2" 
                        sx={{margin: 2, maxWidth: "650px"}}
                    >
                        This website provides a quick reference for testing Material UI components with React Testing Library. Simply click on the button below to see the components.
                    </Typography>
                    <Button size="large" onClick={()=>props.setOpen(true)} sx={{margin: 2}} variant="contained">Open Navigation Drawer</Button>
                    <Button size="large" href="https://github.com/pham-andrew/MUItesting.com" sx={{margin: 2}} variant="outlined"><GitHubIcon sx={{marginLeft: -1, marginRight: 1}}/>Code Repository</Button>
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
                    <Typography color="#B2BAC2">
                        React recommends using Jest as the test runner and React Testing Library.
                    </Typography>
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
                    <Typography color="#B2BAC2" sx={{maxWidth: "800px"}}>
                        You may notice that there are a lot of aria-labels in our test examples. Why is that? To help find the element.
                        ARIA is a W3C specification that stands for “Accessible Rich Internet Applications”.
                        The aria-label provides the element with an accessible name, usually when there's no name already or when the content isn't visible.
                        Why can't you just find by test-id? It's bad practice because it's lower on the document queries priority list.
                        Using an aria-label allows you to get by label text, number 1 on the priority list. Test IDs are last on the priority list.
                    </Typography>
                    </Grid>
                    <Grid xs={12} sx={{margin: 2}}>
                        <Typography 
                            color="white" 
                            variant="h4" 
                            theme={createTheme({typography: {fontFamily:["Plus Jakarta Sans"]}})}
                            sx={{fontWeight: "800"}}
                        >
                            What are inputProps?
                        </Typography>
                    </Grid>
                    <Grid xs={12} sx={{margin: 2}}>
                    <Typography color="#B2BAC2" sx={{maxWidth: "800px"}}>
                        MaterialUI components abstract the actual HTML used so labels sometimes end up on a parent tag. To test, we often specifically want to act on the input. 
                        MaterialUI allows us to add properties to specifically the input of a MUI component by using the inputProps property. There we can label them to be found by our queries.
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
                    <Typography color="#B2BAC2" sx={{maxWidth: "800px"}}>
                        This site was made by Andrew Pham hated testing and test driven development.
                    </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}