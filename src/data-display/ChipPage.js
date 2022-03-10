import React from 'react';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import { Box } from '@mui/system';
import CodeBlocks from '../CodeBlocks'

export default function ChipPage() {
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Chip</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Chip label="Delicious Delicious Chips" />
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="9e28977fe0e730d2d51af3b5acb57bd6" test="65f9cfa8db907c994e85e05ba289fff5"/>
        </>
    )
}