import { render, screen } from "@testing-library/react";
import IconPage from "./IconPage"

test("icon is there", () => {
    render(<IconPage />)
    expect(screen.getByTestId("EmojiNatureIcon")).toBeInTheDocument();
});