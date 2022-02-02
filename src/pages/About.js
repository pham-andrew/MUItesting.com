import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function About() {
    return(
        <>
            <Typography variant="h4" sx={{marginBottom: 2}}>About</Typography>
            <Typography>Created by Andrew Pham, who hates testing and test driven development.</Typography>
        </>
    )
}