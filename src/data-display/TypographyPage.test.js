import { render, screen } from "@testing-library/react";
import TypographyPage from "./TypographyPage"

test("text is on page", () => {
    render(<TypographyPage />)
    expect(screen.getByText("Hello World")).toBeInTheDocument();
});