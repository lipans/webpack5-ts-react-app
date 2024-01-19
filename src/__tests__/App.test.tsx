import { render } from "@testing-library/react";
import App from "../App";

test("renders correctly", () => {
  const { getByTestId } = render(<App />);
  const myComponentElement = getByTestId("app");
  expect(myComponentElement).toBeInTheDocument();
});
