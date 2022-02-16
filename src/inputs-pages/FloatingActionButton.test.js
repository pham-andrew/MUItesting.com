import { render, screen, fireEvent } from "@testing-library/react";
import FloatingActionButtonPage from "./FloatingActionButtonPage"

test("Clicking the button makes text Clicked! appear on screen", () => {
    render(<FloatingActionButtonPage />)
    fireEvent.click(screen.getByRole("button", { name: "fab" }));
    expect(screen.getByText("Clicked!")).toBeInTheDocument();
});