import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ButtonGroupCodeBlocks from './ButtonGroupCodeBlocks';
import { Box } from '@mui/system';

export default function ButtonGroupPage() {
    const [clicked, setClicked] = useState("")
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Button</Typography>
            <Typography variant="h6" sx={{margin: 2}}>Live Component</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button variant="contained" onClick={() => setClicked("click1")}>One</Button>
                    <Button variant="contained" onClick={() => setClicked("click2")}>Two</Button>
                    <Button variant="contained" onClick={() => setClicked("click3")}>Three</Button>
                </ButtonGroup>
                {clicked}
                {/* 🙈 */}
            </Box>
            <ButtonGroupCodeBlocks />
        </>
    ) 
}