import { render, screen, fireEvent } from "@testing-library/react";
import RadioPage from "./RadioPage"

test("Clicking the button makes text Clicked! appear on screen", () => {
    render(<RadioPage />)
    fireEvent.click(screen.getByRole("radio", { name: "Male" }));
    expect(screen.getByText("boy")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("radio", { name: "Female" }));
    expect(screen.getByText("girl")).toBeInTheDocument();
});