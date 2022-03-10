import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import CodeBlocks from '../CodeBlocks'

export default function TypogarphyPage() {
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Typography</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Typography title="Bug">
                    Hello World
                </Typography>
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="a2ad6a9d994279354ad64ba40bbbeeaa" test="2ae3df60bc132b5ad09b53c982fe532e"/>
        </>
    )
}