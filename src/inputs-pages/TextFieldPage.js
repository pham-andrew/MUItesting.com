import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import CodeBlocks from '../CodeBlocks'
import { Box } from '@mui/system';

export default function TextFieldPage() {
    const [comment, setComment] = useState("");
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>TextField</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <TextField
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                    inputProps={{ "data-testid": "comment-field" }}
                />
                <br />
                {comment}
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="3703fe4d1ec7e11da5edb7ab6997d13f" test="bd8de4d79b3bf260047fe2051f935bca"/>
        </>
    )
}