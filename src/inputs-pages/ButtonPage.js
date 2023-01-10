import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CodeBlocks from '../CodeBlocks'
import { Box } from '@mui/system';

export default function ButtonPage() {
    const [clicked, setClicked] = useState(false)
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Button</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Button variant="contained" onClick={() => setClicked(true)}>Click</Button>
                {clicked && <Typography>Clicked!</Typography>}
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="e56a26c75fed69648ce602efc67778da" test="11f0992edecf5cdb72b74fc19eb50c6b" />
        </>
    )
}