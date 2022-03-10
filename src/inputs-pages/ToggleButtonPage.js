import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Box } from '@mui/system';
import CodeBlocks from '../CodeBlocks'

export default function ToggleButtonPage() {
    const [state, setState] = useState([])

    const handler = (event, value) => {
        setState(value);
      };
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Toggle Button</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <ToggleButtonGroup
                    value={state}
                    onChange={handler}
                    >
                    <ToggleButton value="🛰">
                        🚀
                    </ToggleButton>
                    <ToggleButton value="👾">
                        🛸
                    </ToggleButton>
                </ToggleButtonGroup>
                <br />
                {state}
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="fb81a4eacff9a6b8830ef0669fbb86e0" test="3be47e34f634e522e3f5e28e6630b9ec"/>
        </>
    )
}