import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Home() {
    return(
        <>
            <Typography variant="h4" sx={{marginBottom: 2}}>Home</Typography>
            <Typography sx={{marginBottom: 2}}>This website provides a quick reference for testing Material UI components with React Testing Library.</Typography>
            <a href="https://github.com/pham-andrew/mui-testing">The source code along with running tests can be found here: https://github.com/pham-andrew/mui-testing</a>
        </>
    )
}