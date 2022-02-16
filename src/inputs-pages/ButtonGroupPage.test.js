import { render, screen, fireEvent } from "@testing-library/react";
import ButtonGroupPage from "./ButtonGroupPage"

test("Clicking the button makes text Clicked! appear on screen", () => {
    render(<ButtonGroupPage />)
    fireEvent.click(screen.getByRole("button", { name: "One" }));
    expect(screen.getByText("click1")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Two" }));
    expect(screen.getByText("click2")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Three" }));
    expect(screen.getByText("click3")).toBeInTheDocument();
});