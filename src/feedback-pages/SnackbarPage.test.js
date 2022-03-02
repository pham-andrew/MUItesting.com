import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import SnackbarPage from './SnackbarPage'

test("clicking button opens snackbar", async () => {
    render(<SnackbarPage />)
    userEvent.click(screen.getByRole("button", { name: "Open Snackbar" }));
    expect(screen.getByLabelText("snack")).toBeInTheDocument();
});