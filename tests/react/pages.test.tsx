import { act, render } from "@testing-library/react";
import { BrowserRouter } from "react-router";

import Home from "../../src/react/pages/Home";

describe("React Pages", () => {
  test("<Home />", async () => {
    await act(async () => {
      render(<Home />, { wrapper: BrowserRouter });
    });

    expect(true).toBeTruthy();
  });
});
