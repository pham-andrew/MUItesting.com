import { render, screen, fireEvent } from "@testing-library/react";
import SliderPage from './SliderPage'

test("moving slider changes value", () => {
    const { container } = render(<SliderPage />)
    fireEvent.change(container.querySelector(`input[name="name-of-hidden-input-element"]`), {target: {value: "90"}})
    expect(screen.getByText("90")).toBeInTheDocument();
});