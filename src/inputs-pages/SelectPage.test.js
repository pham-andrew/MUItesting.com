import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import SelectPage from './SelectPage'

test("selecting age of twenty make 20 appear on screen", async () => {
    render(<SelectPage />)
    userEvent.click(screen.getByRole("button", { name: "Age" }));
    userEvent.click(screen.getAllByText("Twenty")[0]);
    expect(screen.getByText("20")).toBeInTheDocument();
});