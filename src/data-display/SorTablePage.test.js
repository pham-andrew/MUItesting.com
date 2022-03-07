import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SorTable } from "./SorTable";

test("sort by first name", async () => {
    render(<SorTable />);
    const columnHeading = await screen.findByRole("button", { name: "First Name" });
    userEvent.click(columnHeading);
    expect(screen.getAllByTestId("row")[0]).toHaveTextContent("Andrew");
    userEvent.click(columnHeading);
    expect(screen.getAllByTestId("row")[0]).toHaveTextContent("John");
});