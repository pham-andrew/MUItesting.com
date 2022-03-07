import React from 'react';
import Typography from '@mui/material/Typography';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import Tooltip from '@mui/material/Tooltip';
import { Box } from '@mui/system';
import CodeBlocks from '../CodeBlocks'

export default function TooltipPage() {
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Tooltip</Typography>
            <Typography variant="h6" sx={{margin: 2}}>Live Component</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Tooltip title="Bug">
                    <EmojiNatureIcon />
                </Tooltip>
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="" test=""/>
        </>
    )
}