import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Slider } from '@mui/material';
import CodeBlocks from './../CodeBlocks'
import { Box } from '@mui/system';

export default function SliderPage() {
    const [value, setValue] = useState(30)

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Slider</Typography>
            <Typography variant="h6" sx={{margin: 2}}>Live Component</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Slider value={value} onChange={handleChange} name="name-of-hidden-input-element" />
                <br />
                {value}
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="7f29bd50cf74bdfa9c5a669def4d12d6" test="7330a380cfae3fc998efc6cf84410641"/>
        </>
    )
}