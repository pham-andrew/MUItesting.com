import React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Snackbar } from '@mui/material';
import CodeBlocks from '../CodeBlocks'
import { Box } from '@mui/system';

export default function SnackbarPage() {
    const [open, setOpen] = React.useState(false);
    
    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Snackbar</Typography>
            <Box sx={{margin: 2}}>
                {/* 👀 */}
                <Button onClick={() => setOpen(true)}>Open Snackbar</Button>
                <Snackbar
                    open={open}
                    message="Delicious Delicious Snack Bar"
                    aria-label="snack"
                />
                {/* 🙈 */}
            </Box>
            <CodeBlocks source="ad3c0803eff4097cff8d3353e3f21362" test="5e0ccd2078390e84c6f2688233cb3935"/>
        </>
    )
}