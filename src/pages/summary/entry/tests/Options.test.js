import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("image for each Scoop from de server", async () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altTextOfImages = scoopImages.map((element) => element.alt);
  expect(altTextOfImages).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
