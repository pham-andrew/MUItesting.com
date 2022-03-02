import { render, screen, fireEvent } from "@testing-library/react";
import SelectPage from './SelectPage'

test("selecting age of twenty make 20 appear on screen", async () => {
    render(<SelectPage />)
    fireEvent.change(screen.getByTestId("input-test-id"), {target: {value: "20"}})
    expect(screen.getByText("20")).toBeInTheDocument();
});