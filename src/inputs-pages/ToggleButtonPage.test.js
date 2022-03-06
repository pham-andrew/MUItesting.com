import { render, screen, fireEvent } from "@testing-library/react";
import ToggleButtonPage from "./ToggleButtonPage"

test("clicking the ufo makes the space invader appear on screen", () => {
    render(<ToggleButtonPage />)
    fireEvent.click(screen.getByRole("button", { name: "🛸" }));
    expect(screen.getByText("👾")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "🛸" }));
    expect(screen.queryByText("👾")).not.toBeInTheDocument();
});