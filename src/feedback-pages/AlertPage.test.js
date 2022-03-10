import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import AlertPage from './AlertPage'

test("clicking button opens alert", async () => {
    render(<AlertPage />)
    userEvent.click(screen.getByRole("button", { name: "Open Alert" }));
    expect(screen.getByText("RED SPY IS IN THE BASE")).toBeInTheDocument();
});