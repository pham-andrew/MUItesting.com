import React from 'react';
import Typography from '@mui/material/Typography';
import { Alert, Collapse, Button } from '@mui/material';
import CodeBlocks from '../CodeBlocks'
import { Box } from '@mui/system';

export default function AlertPage() {
    const [open, setOpen] = React.useState(false);

    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Alert</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Button onClick={()=>setOpen(true)}>Open Alert</Button>
                <Collapse in={open}>
                    <Alert severity="error">RED SPY IS IN THE BASE</Alert> 
                </Collapse>
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="eb2172f2fbcacffe0143b3c1f314af56" test="52ba3552ca750ca46daf1d5bb9970546"/>
        </>
    )
}