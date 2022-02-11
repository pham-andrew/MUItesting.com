import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import CheckboxCodeBlocks from './CheckboxCodeBlocks';
import { Box } from '@mui/system';

export default function CheckboxPage() {
    const [checked, setChecked] = useState(false)
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Checkbox</Typography>
            <Typography variant="h6" sx={{margin: 2}}>Live Component</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Checkbox checked={checked} onChange={() => setChecked(!checked)}>Checked</Checkbox>
                {checked && <Typography>Checked!</Typography>}
                {/* 🙈 */}
            </Box>
            <CheckboxCodeBlocks />
        </>
    ) 
}