import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import CodeBlocks from '../CodeBlocks';
import { Box } from '@mui/system';

export default function CheckboxPage() {
    const [checked, setChecked] = useState(false)
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Checkbox</Typography>
            <Typography variant="h6" sx={{margin: 2}}>Live Component</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
                {checked && <Typography>Checked!</Typography>}
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="0d29b110235ce3f552d489a4f2482d79" test="eea842cc056edf39562a5dfe76be5afd"/>
        </>
    ) 
}