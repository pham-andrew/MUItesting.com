import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Gist from "react-gist";

export default function AutocompleteCodeBlocks() {
    return(
        <>
            <Typography variant="h6" sx={{margin: 2}}>Source Code</Typography>
            <Box sx={{margin: 2}}>
                <Gist id="6ef6f8a5de907d77f95e871b04eb3384" />
            </Box>
            <Typography variant="h6" sx={{margin: 2}}>Test Code</Typography>
            <Box sx={{margin: 2}}>
                <Gist id="6cabd87b86b6273899352e63aa0a44bf" />
            </Box>
        </>
    )
}
