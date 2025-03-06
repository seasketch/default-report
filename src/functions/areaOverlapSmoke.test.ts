import {
  getExamplePolygonSketchAll,
  writeResultOutput,
} from "@seasketch/geoprocessing/scripts/testing";
import { describe, test, expect } from "vitest";
import { areaOverlap } from "./areaOverlap.js";

describe("Basic smoke tests", () => {
  test("handler function is present", () => {
    expect(typeof areaOverlap).toBe("function");
  });
  test("areaOverlap - tests run against all examples", async () => {
    const examples = await getExamplePolygonSketchAll();
    for (const example of examples) {
      const result = await areaOverlap(example);
      expect(result).toBeTruthy();
      writeResultOutput(result, "areaOverlap", example.properties.name);
    }
  }, 60_000);
});
