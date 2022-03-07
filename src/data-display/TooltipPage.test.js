import { render, screen, fireEvent } from "@testing-library/react";
import TooltipPage from "./TooltipPage"

test("tooltip is there", async () => {
    render(<TooltipPage />)
    fireEvent.mouseOver(screen.getByTestId("EmojiNatureIcon"));
    expect(await screen.findByText("Bug")).toBeInTheDocument();
});