import fs from "node:fs";

describe("Installation", () => {
  test("you created .env", async () => {
    expect(fs.existsSync(`${__dirname}/../.env`)).toBe(true);
  });
});
