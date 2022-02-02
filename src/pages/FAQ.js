import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function FAQ() {
    return(
        <>
            <Typography variant="h4" sx={{marginBottom: 2}}>FAQ</Typography>
            <Typography variant="h5">React Testing Library or Enzyme?</Typography>
            <Typography>React recommends using Jest as the test runner and React Testing Library.</Typography>
        </>
    )
}