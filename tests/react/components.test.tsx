import { act, render } from "@testing-library/react";
import { BrowserRouter } from "react-router";

import Layout from "../../src/react/components/Layout";

beforeEach(() => {
  globalThis.fetch = vi.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    }),
  );

  vi.spyOn(window, "alert").mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("React Components", () => {
  test("<Layout />", async () => {
    await act(async () => {
      render(<Layout>hello, world!</Layout>, {
        wrapper: BrowserRouter,
      });
    });

    expect(true).toBeTruthy();
  });
});
