import { render, screen, fireEvent } from "@testing-library/react";

import SummaryForm from "../SummaryForm";

test("initial state", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", { name: /confirm order/i });

  // initial checkbox state
  expect(checkbox).not.toBeChecked();

  // initial button state
  expect(button).toBeDisabled();
});

test("enable button in first click and disable button in second click", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", { name: /confirm order/i });

  // click on checkbox to enable button
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

  // click again on checkbox to disable button
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
