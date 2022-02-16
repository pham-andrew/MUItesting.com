import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import AutocompleteCodeBlocks from './AutocompleteCodeBlocks';

export default function AutocompletePage() {
  const [selected, setSelected] = useState("")

  return (
    <>
        <Typography variant="h4" sx={{margin: 2}}>Autocomplete</Typography>
        <Typography variant="h6" sx={{margin: 2}}>Live Component</Typography>
        <Box sx={{margin: 2}}>
            {/* 👀 */}
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
                onChange={(event, value) => setSelected(value.label)}
            />
            {selected}
            {/* 🙈 */}
        </Box>
        <AutocompleteCodeBlocks />
    </>
  );
}

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
];