import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import CodeBlocks from '../CodeBlocks';
import { Box } from '@mui/system';

export default function FloatingActionButtonPage() {
    const [clicked, setClicked] = useState(false)
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Floating Action Button</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Fab 
                    onClick={() => setClicked(true)} 
                    aria-label="fab" // See "Why an Aria Label?" page
                />
                {clicked && <Typography>Clicked!</Typography>}
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="11dfb3f10bd2229f880552151c9e523c" test="b253a1336fe9747212474532c53b4142"/>
        </>
    ) 
}