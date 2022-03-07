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
            <CodeBlocks source="1417fddde05030f3d7a7f972cb558566" test="0dbd7af076474ce8b1db8b9c5b21bece"/>
        </>
    )
}