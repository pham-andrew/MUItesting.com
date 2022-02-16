import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import FloatingActionButtonCodeBlocks from './FloatingActionButtonCodeBlocks';
import { Box } from '@mui/system';

export default function FloatingActionButtonPage() {
    const [clicked, setClicked] = useState(false)
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Floating Action Button</Typography>
            <Typography variant="h6" sx={{margin: 2}}>Live Component</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Fab 
                    onClick={() => setClicked(true)} 
                    aria-label="fab" // See "Why an Aria Label?" page
                />
                {clicked && <Typography>Clicked!</Typography>}
                {/* 🙈 */}
            </Box>
            <FloatingActionButtonCodeBlocks />
        </>
    ) 
}