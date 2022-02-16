import { render, screen, fireEvent } from "@testing-library/react";
import RadioPage from "./RadioPage"

test("clicking radio makes male / female appear", () => {
    render(<RadioPage />)
    fireEvent.click(screen.getByRole("radio", { name: "Male" }));
    expect(screen.getByText("boy")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("radio", { name: "Female" }));
    expect(screen.getByText("girl")).toBeInTheDocument();
});