import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import CodeBlocks from "../CodeBlocks"

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
      <CodeBlocks source="6ef6f8a5de907d77f95e871b04eb3384" test="6cabd87b86b6273899352e63aa0a44bf" />
    </>
  );
}

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
];