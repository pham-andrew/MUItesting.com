import React from 'react';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import CodeBlocks from '../CodeBlocks'

export default function DividerPage() {
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Divider</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Divider aria-label="divider"/>
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="6a3799da1ebb4c2ac0b455872073e10d" test="b2052ccde7b8e05c0016dc860788ea21"/>
        </>
    )
}