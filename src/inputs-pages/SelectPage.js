import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Select, FormControl, MenuItem, InputLabel } from '@mui/material';
import CodeBlocks from './../CodeBlocks'
import { Box } from '@mui/system';

export default function SelectPage() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Select</Typography>
            <Typography variant="h6" sx={{margin: 2}}>Live Component</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <FormControl sx={{width: "100px"}}>
                    <InputLabel>Age</InputLabel>
                    <Select
                        value={age}
                        onChange={handleChange}
                        labelId="Age"
                        inputProps={{ "data-testid": "input-test-id" }}
                    >
                        <MenuItem value={"10"}>Ten</MenuItem>
                        <MenuItem value={"20"}>Twenty</MenuItem>
                        <MenuItem value={"30"}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <br />
                {age}
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="13ba603c79c91844685a92256265741f" test="0b850d4ff633d9ff008664b5166b4f4f"/>
        </>
    )
}