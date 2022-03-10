import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Switch } from '@mui/material';
import { Box } from '@mui/system';
import CodeBlocks from './../CodeBlocks'

export default function SwitchPage() {
    const [state, setState] = useState(false)
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Switch</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Switch onChange={() => setState(!state)}/>
                <br />
                {state.toString()}
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="a0bed8fb794399515096dd7cc8c51362" test="06c64f95d70e99fe15ed7b02c8b10e81"/>
        </>
    )
}