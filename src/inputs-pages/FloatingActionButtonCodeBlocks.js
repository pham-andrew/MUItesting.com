import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Gist from "react-gist";

export default function FloatingActionButtonCodeBlocks() {
    return(
        <>
            <Typography variant="h6" sx={{margin: 2}}>Source Code</Typography>
            <Box sx={{margin: 2}}>
                <Gist id="11dfb3f10bd2229f880552151c9e523c" />
            </Box>
            <Typography variant="h6" sx={{margin: 2}}>Test Code</Typography>
            <Box sx={{margin: 2}}>
                <Gist id="b253a1336fe9747212474532c53b4142" />
            </Box>
        </>
    )
}
