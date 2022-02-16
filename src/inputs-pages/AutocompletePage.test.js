import { render, screen, fireEvent } from "@testing-library/react";
import AutocompletePage from "./AutocompletePage"

test("Correct selections are submitted from the list", () => {
    render(<AutocompletePage />)
    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    fireEvent.click(screen.getByRole("option", { name: "The Godfather: Part II" }))
    expect(screen.getByText("The Godfather: Part II")).toBeInTheDocument()
});