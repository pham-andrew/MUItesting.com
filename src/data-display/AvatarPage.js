import React from 'react';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { Box } from '@mui/system';
import CodeBlocks from '../CodeBlocks'

export default function AvatarPage() {
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Avatar</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Avatar aria-label="avatar" src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png" />
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="a1d9f4c436cc4ce5f4eb12e66b7765ab" test="99dd07fb485bed66e03823cb9627f625"/>
        </>
    )
}