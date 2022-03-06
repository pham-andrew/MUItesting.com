import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import SwitchPage from "./SwitchPage";

test("flipping switch changes boolean", async () => {
    render(<SwitchPage />)
    userEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByText("true")).toBeInTheDocument();
});