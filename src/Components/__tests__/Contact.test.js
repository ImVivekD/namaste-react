import { render, screen } from "@testing-library/react"
import Contact from "../ContactUs"

test("Should load contact us page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //expect(heading).toBeInTheDocument();
})