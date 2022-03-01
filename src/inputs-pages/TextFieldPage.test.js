import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import TextFieldPage from "./TextFieldPage";

test("typing in the field makes the comment appear", async () => {
    render(<TextFieldPage />)
    userEvent.type(screen.getByTestId("comment-field"), "this is a comment");
    expect(screen.getByText("this is a comment")).toBeInTheDocument();
});