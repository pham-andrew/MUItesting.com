import React from 'react';
import Typography from '@mui/material/Typography';
import { Badge } from '@mui/material';
import { Box } from '@mui/system';
import CodeBlocks from '../CodeBlocks'

export default function BadgePage() {
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Badge</Typography>
            <Typography variant="h6" sx={{margin: 2}}>Live Component</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Badge badgeContent={3}>
                    📛
                </Badge>
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="b75a24ef35a082db58e600ee80a89092" test="c84a44e781caf44bcb8d55786507cc98"/>
        </>
    )
}