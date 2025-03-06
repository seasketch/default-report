
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
    "sketchName": "testing",
    "results": 511489358.9514384,
    "functionName": "areaOverlap"
  }
],
        sketchProperties: {
  "3092": [
    "HIGHLY_PROTECTED"
  ],
  "3093": "testing",
  "id": "15592",
  "name": "testing",
  "postId": null,
  "userId": "531",
  "userSlug": "Abby",
  "createdAt": "2023-07-12T20:27:12.764897+00:00",
  "updatedAt": "2023-07-12T20:27:12.764897+00:00",
  "designation": [
    "HIGHLY_PROTECTED"
  ],
  "collectionId": null,
  "isCollection": false,
  "sharedInForum": false,
  "sketchClassId": "231",
  "userAttributes": [
    {
      "label": "Designation",
      "value": [
        "HIGHLY_PROTECTED"
      ],
      "exportId": "designation",
      "fieldType": "MultipleChoice",
      "valueLabel": [
        "Highly Protected"
      ],
      "formElementId": 3092,
      "alternateLanguages": {
        "dv": {
          "label": "ޑެޒިގޭޝަން",
          "valueLabel": [
            "ވަރަށް ބޮޑަށް ހިމާޔަތްކޮށްފައިވެ އެވެ"
          ]
        }
      }
    }
  ]
},
        projectUrl: "https://example.com/project",
        geometryUri: 'https://localhost/84b05b6a-1a14-4381-8c1b-089c818e497b',
        visibleLayers: [],
        language: "en"
      });

      export const testing = () => (
        <Translator>
          <SketchAttributes />
        </Translator>
      );

      export default {
        component: SketchAttributes,
        title: 'Project/ReportClients/SketchAttributes',
        name: 'testing',
        decorators: [createReportDecorator(contextValue)],
      };
    