import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Gist from "react-gist";

export default function ButtonCodeBlocks() {
    return(
        <>
            <Typography variant="h6" sx={{margin: 2}}>Source Code</Typography>
            <Box sx={{margin: 2}}>
                <Gist id="e56a26c75fed69648ce602efc67778da" />
            </Box>
            <Typography variant="h6" sx={{margin: 2}}>Test Code</Typography>
            <Box sx={{margin: 2}}>
                <Gist id="11f0992edecf5cdb72b74fc19eb50c6b" />
            </Box>
        </>
    )
}
