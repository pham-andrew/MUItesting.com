import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { CodeBlockStyle } from '../CodeBlockStyle';

export default function ButtonCodeBlocks() {
    return(
        <>
            <Typography variant="h6" sx={{margin: 2}}>Source Code</Typography>
            <Box sx={CodeBlockStyle} >
                <pre>{`import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonCodeBlocks from './ButtonCodeBlocks';
import { Box } from '@mui/system';
import { CodeBlockStyle } from '../CodeBlockStyle';

export default function ButtonPage() {
    const [clicked, setClicked] = useState(false)

    return(
        <>
            <Typography variant="h4" sx={{margin: 2}}>Button</Typography>
            <Typography variant="h6" sx={{margin: 2}}>Live Component</Typography>

            <Box sx={CodeBlockStyle} >
                <Button variant="contained" onClick={() => setClicked(true)}>Click</Button>
                {clicked && <Typography>Clicked!</Typography>}
            </Box>

            <ButtonCodeBlocks />
        </>
    ) 
}
`}</pre>
            </Box>
            <Typography variant="h6" sx={{margin: 2}}>Test Code</Typography>
            <Box sx={CodeBlockStyle} >
            <pre>{`import { render, screen, fireEvent } from "@testing-library/react";
import ButtonPage from "./ButtonPage"

test("Clicking the button makes text Clicked! appear on screen", async () => {
    render(<ButtonPage />)
    fireEvent.click(screen.getByRole("button", { name: "Click" }));
    expect(screen.getByText("Clicked!")).toBeInTheDocument();
});
`}</pre>
            </Box>
        </>
    )
}
