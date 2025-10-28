import { rangeToCells } from "./rangeToCells";

test.only("expands A1:A3 correctly", () => {
  expect(rangeToCells("A1:A3")).toEqual(["A1", "A2", "A3"]);
});

test("handles multiple columns", () => {
  expect(rangeToCells("A1:B2")).toEqual(["A1", "B1", "A2", "B2"]);
});
