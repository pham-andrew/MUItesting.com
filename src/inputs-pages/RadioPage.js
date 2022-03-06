import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CodeBlocks from './../CodeBlocks'
import { Box } from '@mui/system';

export default function RadioPage() {
    const [sex, setSex] = useState("")
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Radio</Typography>
            <Typography variant="h6" sx={{margin: 2}}>Live Component</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <FormControl>
                    <RadioGroup>
                        <FormControlLabel 
                            value="female" 
                            control={<Radio />} 
                            label="Female" 
                            onClick={()=>setSex("girl")}
                        />
                        <FormControlLabel 
                            value="male" 
                            control={<Radio />} 
                            label="Male" 
                            onClick={()=>setSex("boy")}
                        />
                    </RadioGroup>
                </FormControl>
                <br />
                {sex}
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="5b212b3801105025db96b2eb0f3f33ba" test="976b20d9cd72117892f6a548bbb10434"/>
        </>
    )
}