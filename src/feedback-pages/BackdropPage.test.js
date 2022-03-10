import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import BackdropPage from './BackdropPage'

test("clicking button opens backdrop", async () => {
    render(<BackdropPage />)
    userEvent.click(screen.getByRole("button", { name: "Open Backdrop" }));
    expect(screen.getByTestId("backdrop")).toBeInTheDocument();
});