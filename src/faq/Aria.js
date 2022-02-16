import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Aria() {
    return(
        <>
            <Typography variant="h4">Why aria-label?</Typography>
            <Typography sx={{margin: 1}}>You may notice that there are a lot of aria-labels in our test examples. Why is that? To find the element. It's like a test ID that's exposed to the user that we can use to identify elements. Read on if you're curious about more...</Typography>
            <Typography variant="h6">What is an ARIA Label?</Typography>
            <Typography sx={{margin: 1}}>"ARIA is a W3C specification that stands for “Accessible Rich Internet Applications”. It consists of markup that can be added to HTML in order to clearly communicate the roles, states, and properties of user interface elements."</Typography>
            <Typography variant="h6">What are ARIA labels used for?</Typography>
            <Typography sx={{margin: 1}}>The aria-label provides the element with an accessible name... usually when there's no name already or when the content isn't visible.</Typography>
            <Typography variant="h6">Why can't I just find the element by test ID?</Typography>
            <Typography sx={{margin: 1}}>Bad practice because we want to test for things "visible" to the user and the aria label is exposed via the accessibility tree. The visually impaired may have a screen reader read it to them so while it's not visible, it is exposed.</Typography>
            <Typography variant="h6">Priority:</Typography>
            <Typography sx={{margin: 1}}>The RTL documentation list queries by priority. Using an aria-label allows you to get by label text, number 1 on the priority list. Test IDs are last on that list if you were wondering.</Typography>
        </>
    )
}