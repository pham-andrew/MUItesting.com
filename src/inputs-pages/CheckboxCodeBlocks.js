import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Gist from "react-gist";

export default function CheckboxCodeBlocks() {
    return(
        <>
            <Typography variant="h6" sx={{margin: 2}}>Source Code</Typography>
            <Box sx={{margin: 2}}>
                <Gist id="0d29b110235ce3f552d489a4f2482d79" />
            </Box>
            <Typography variant="h6" sx={{margin: 2}}>Test Code</Typography>
            <Box sx={{margin: 2}}>
                <Gist id="eea842cc056edf39562a5dfe76be5afd" />
            </Box>
        </>
    )
}
