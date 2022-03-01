import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import CodeBlocks from './../CodeBlocks'
import { Box } from '@mui/system';

export default function RatingPage() {
    const [rating, setRating] = useState(0)
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Rating</Typography>
            <Typography variant="h6" sx={{margin: 2}}>Live Component</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {setRating(newValue)}}
                />
                rating: {rating}
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="84607da5386aefe2e1453f2b7390dfa6" test="56d7c4a1a84d0ce547090254cc9c4834"/>
        </>
    )
}