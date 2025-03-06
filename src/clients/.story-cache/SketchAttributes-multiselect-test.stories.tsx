
      import React from "react";
      import { SketchAttributes } from '.././SketchAttributes.jsx';
      import {
        createReportDecorator,
        sampleSketchReportContextValue,
      } from "@seasketch/geoprocessing/client-ui";
      import Translator from "/workspaces/default-report/src/components/TranslatorAsync.js";

      const contextValue = sampleSketchReportContextValue({
        exampleOutputs: [
  {
    "sketchName": "multiselect-test",
    "results": 2928281.845495329,
    "functionName": "areaOverlap"
  }
],
        sketchProperties: {
  "3180": "multiselect-test",
  "3182": [
    "RESEARCH_NE",
    "RESEARCH",
    "RESTORE_CON",
    "RESTORE_OTH"
  ],
  "id": "30838",
  "name": "multiselect-test",
  "postId": null,
  "userId": "531",
  "userSlug": "Abby",
  "createdAt": "2024-06-24T22:36:44.151653+00:00",
  "updatedAt": "2024-06-24T22:36:44.151653+00:00",
  "ACTIVITIES": [
    "RESEARCH_NE",
    "RESEARCH",
    "RESTORE_CON",
    "RESTORE_OTH"
  ],
  "collectionId": null,
  "isCollection": false,
  "sharedInForum": false,
  "sketchClassId": "251",
  "userAttributes": [
    {
      "label": "Allowed Activities",
      "value": [
        "RESEARCH_NE",
        "RESEARCH",
        "RESTORE_CON",
        "RESTORE_OTH"
      ],
      "exportId": "ACTIVITIES",
      "fieldType": "MultipleChoice",
      "valueLabel": [
        "Research: non-extractive",
        "Research: extractive",
        "Restoration/enhancement for conservation",
        "Restoration/enhancement for other reasons"
      ],
      "formElementId": 3182,
      "alternateLanguages": {}
    }
  ]
},
        projectUrl: "https://example.com/project",
        geometryUri: 'https://localhost/6a2e497f-5278-47f9-aa12-613f759618fd',
        visibleLayers: [],
        language: "en"
      });

      export const multiselect_test = () => (
        <Translator>
          <SketchAttributes />
        </Translator>
      );

      export default {
        component: SketchAttributes,
        title: 'Project/ReportClients/SketchAttributes',
        name: 'multiselect-test',
        decorators: [createReportDecorator(contextValue)],
      };
    