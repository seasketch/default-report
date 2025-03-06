import { GeoprocessingHandler } from "@seasketch/geoprocessing";
import {
  MultiPolygon,
  Polygon,
  Sketch,
  SketchCollection,
} from "@seasketch/geoprocessing/client-core";
import { area } from "@turf/turf";

export async function areaOverlap(
  sketch:
    | Sketch<Polygon | MultiPolygon>
    | SketchCollection<Polygon | MultiPolygon>,
): Promise<number> {
  return area(sketch);
}

export default new GeoprocessingHandler(areaOverlap, {
  title: "areaOverlap",
  description: "Calculate sketch overlap with boundary polygons",
  executionMode: "async",
  timeout: 40,
  requiresProperties: [],
  memory: 10240,
});
