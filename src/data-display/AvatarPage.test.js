import { render, screen } from "@testing-library/react";
import AvatarPage from "./AvatarPage"

test("bring me the avatar", () => {
    render(<AvatarPage />)
    expect(screen.getByLabelText("avatar")).toBeInTheDocument();
});