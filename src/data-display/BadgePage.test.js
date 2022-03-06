import { render, screen } from "@testing-library/react";
import BadgePage from "./BadgePage"

test("badge is there with badge content", () => {
    render(<BadgePage />)
    expect(screen.getByText("📛")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
});