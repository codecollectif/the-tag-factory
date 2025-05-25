import { act, render } from "@testing-library/react";
import { BrowserRouter } from "react-router";

import ElementCreate from "../../src/react/pages/ElementCreate";

describe("React Pages", () => {
  test("<ElementCreate />", async () => {
    await act(async () => {
      render(<ElementCreate />, { wrapper: BrowserRouter });
    });

    expect(true).toBeTruthy();
  });
});
