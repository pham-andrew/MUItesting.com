import { render, screen } from "@testing-library/react";
import DividerPage from "./DividerPage"

test("divider is there", () => {
    render(<DividerPage />)
    expect(screen.getByLabelText("divider")).toBeInTheDocument();
});