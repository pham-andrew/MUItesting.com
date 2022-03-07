import React from 'react';
import Typography from '@mui/material/Typography';
import CodeBlocks from './../CodeBlocks'
import { Box } from '@mui/system';
import { SorTable } from './SorTable'

export default function SorTablePage() {
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>SorTable</Typography>
            <Typography variant="h6" sx={{margin: 2}}>Live Component</Typography>
            <Box sx={{margin: 2}}>
                <SorTable />
            </Box>
            <CodeBlocks source="b98a3150d678222d4362bdcd9b3a1489" test="58afdeade0a6a0aa5ed4e8c677813ea6"/>
        </>
    )
}