import { render, screen, fireEvent } from "@testing-library/react";
import FloatingActionButtonPage from "./FloatingActionButtonPage"

test("Clicking button makes clicked appear", () => {
    render(<FloatingActionButtonPage />)
    fireEvent.click(screen.getByRole("button", { name: "fab" }));
    expect(screen.getByText("Clicked!")).toBeInTheDocument();
});