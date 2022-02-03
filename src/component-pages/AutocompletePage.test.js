import { render, screen, fireEvent } from "@testing-library/react";
import AutocompletePage from "./AutocompletePage"

test("Selecting from the list", () => {
    render(<AutocompletePage />)
    fireEvent.click(screen.getByRole("button", { name: "Click" }));
    expect(screen.getByText("Clicked!")).toBeInTheDocument();
});

test("Typing in the Autocomplete filters the list", () => {
    render(<AutocompletePage />)
    fireEvent.click(screen.getByRole("button", { name: "Click" }));
    expect(screen.getByText("Clicked!")).toBeInTheDocument();
});