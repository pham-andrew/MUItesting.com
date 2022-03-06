import { render, screen } from "@testing-library/react";
import ChipPage from "./ChipPage"

test("chip is there", () => {
    render(<ChipPage />)
    expect(screen.getByText("Delicious Delicious Chips")).toBeInTheDocument();
});