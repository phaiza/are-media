import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("Title is displayed", () => {
  render(<Header />);
  expect(screen.getByText("Article Feed")).toBeInTheDocument();
});
