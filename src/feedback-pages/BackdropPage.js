import React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Backdrop } from '@mui/material';
import CodeBlocks from '../CodeBlocks'
import { Box } from '@mui/system';

export default function BackdopPage() {
    const [open, setOpen] = React.useState(false);

    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Backdrop</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Button onClick={()=>setOpen(!open)}>Open Backdrop</Button>
                <Backdrop
                    open={open}
                    onClick={()=>setOpen(false)}
                    data-testid= "backdrop"
                >
                    Loading Slowly...
                </Backdrop>
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="400b00b3452fb7ac56ea30a0c502e506" test="ee868cfb8cda4738519ce762f3a99155"/>
        </>
    )
}