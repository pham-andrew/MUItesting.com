import { render, screen, fireEvent } from "@testing-library/react";
import CheckboxPage from "./CheckboxPage"

test("Checking the checkbox makes text Checked! appear on screen", () => {
    render(<CheckboxPage />)
    fireEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByText("Checked!")).toBeInTheDocument();
});