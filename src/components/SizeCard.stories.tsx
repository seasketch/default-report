import React from "react";
import { SizeCard } from "./SizeCard.js";
import {
  createReportDecorator,
  sampleSketchReportContextValue,
} from "@seasketch/geoprocessing/client-ui";
import Translator from "../components/TranslatorAsync.js";

const contextValue = sampleSketchReportContextValue({
  visibleLayers: [],
  exampleOutputs: [
    {
      functionName: "areaOverlap",
      sketchName: "My Sketch",
      results: {
        metrics: [
          {
            metricId: "areaOverlap",
            sketchId: "abc123",
            classId: "eez",
            groupId: null,
            geographyId: null,
            value: 75066892447.21024,
            extra: {
              sketchName: "fsm-east-west-sketch",
            },
          },
        ],
        sketch: {
          type: "Feature",
          properties: {
            name: "fsm-east-west-sketch",
            updatedAt: "2022-11-17T10:02:53.645Z",
            sketchClassId: "123abc",
            id: "abc123",
          },
          geometry: null,
        },
      },
    },
  ],
});

// Wrap in Translator to allow translations to work in storybook without report client
export const basic = () => (
  <Translator>
    <SizeCard />
  </Translator>
);

export default {
  component: SizeCard,
  title: "Project/Components/SizeCard",
  decorators: [createReportDecorator(contextValue)],
};
