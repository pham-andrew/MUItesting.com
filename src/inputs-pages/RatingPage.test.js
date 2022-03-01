import { render, screen, fireEvent } from "@testing-library/react";
import RatingPage from './RatingPage'

test("clicking middle star sets rating to 3", () => {
    render(<RatingPage />)
    fireEvent.click(screen.getByRole("radio", { name: "3 Stars" }));
    expect(screen.getByText("rating: 3")).toBeInTheDocument();
});