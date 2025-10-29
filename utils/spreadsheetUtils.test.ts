import { parseCellsExpressions } from "./spreadsheetUtils";

test("parse one cell key correctly", () => {
  expect(parseCellsExpressions(["A1"])).toEqual(["A1"]);
});

test.only("parses cells expressions correctly", () => {
  expect(parseCellsExpressions(["A1:A3", "B2:B4"])).toEqual([
    "A1",
    "A2",
    "A3",
    "B2",
    "B3",
    "B4",
  ]);
});
