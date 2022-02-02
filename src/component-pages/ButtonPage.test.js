import { render, screen, fireEvent } from "@testing-library/react";
import ButtonPage from "./ButtonPage"

test("Clicking the button makes text Clicked! appear on screen", async () => {
    render(<ButtonPage />)
    fireEvent.click(screen.getByRole("button", { name: "Click" }));
    expect(screen.getByText("Clicked!")).toBeInTheDocument();
});