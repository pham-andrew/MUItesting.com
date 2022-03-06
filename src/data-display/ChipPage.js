import React from 'react';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import { Box } from '@mui/system';
import CodeBlocks from '../CodeBlocks'

export default function ChipPage() {
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Chip</Typography>
            <Typography variant="h6" sx={{margin: 2}}>Live Component</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Chip label="Delicious Delicious Chips" />
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="" test=""/>
        </>
    )
}