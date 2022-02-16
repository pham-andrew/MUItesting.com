import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Gist from "react-gist";

export default function CodeBlocks(props) {
    return(
        <>
            <Typography variant="h6" sx={{margin: 2}}>Source Code</Typography>
            <Box sx={{margin: 2}}>
                <Gist id={props.source} />
            </Box>
            <Typography variant="h6" sx={{margin: 2}}>Test Code</Typography>
            <Box sx={{margin: 2}}>
                <Gist id={props.test} />
            </Box>
        </>
    )
}
