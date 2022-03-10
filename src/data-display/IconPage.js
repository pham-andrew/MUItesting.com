import React from 'react';
import Typography from '@mui/material/Typography';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import { Box } from '@mui/system';
import CodeBlocks from '../CodeBlocks'

export default function IconPage() {
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Icon</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <EmojiNatureIcon />
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="725a6ec11f133b653c3c41bff760775d" test="2b7bcd937f83d40e9e1f45e50818c79c"/>
        </>
    )
}