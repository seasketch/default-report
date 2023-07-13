import React from "react";
import { ReportResult } from "@seasketch/geoprocessing/client-core";
import {
  ResultsCard,
  ToolbarCard,
  DataDownload,
  Pill,
} from "@seasketch/geoprocessing/client-ui";
import { squareMeterToKilometer } from "@seasketch/geoprocessing";
import Translator from "../components/TranslatorAsync";
import { useTranslation } from "react-i18next";

const Number = new Intl.NumberFormat("en", { style: "decimal" });

export const SizeCard = () => {
  const { t, i18n } = useTranslation();

  const notFoundString = t("Results not found");
  const metricErrorString = t("Should return a single metric");
  const sqKmLabel = t("km²");

  return (
    <ResultsCard
      title={t("Size")}
      functionName="boundaryAreaOverlap"
      useChildCard
    >
      {(data: ReportResult) => {
        if (Object.keys(data).length === 0) throw new Error(notFoundString);
        let singleMetrics = data.metrics.filter(
          (m) => m.sketchId === data.sketch.properties.id
        );
        if (singleMetrics.length > 1) throw new Error(metricErrorString);

        return (
          <>
            <ToolbarCard
              title={t("Size")}
              items={
                <>
                  <DataDownload
                    filename="size"
                    data={data.metrics}
                    formats={["json"]}
                    placement="left-end"
                  />
                </>
              }
            >
              <p>
                {t("The area of this sketch is ")}
                <Pill>
                  {Number.format(
                    Math.round(
                      squareMeterToKilometer(
                        typeof singleMetrics[0].value === "string"
                          ? parseInt(singleMetrics[0].value)
                          : singleMetrics[0].value
                      )
                    )
                  )}{" "}
                  {sqKmLabel}
                </Pill>
              </p>
            </ToolbarCard>
          </>
        );
      }}
    </ResultsCard>
  );
};

/**
 * SizeCard as a top-level report client
 */
export const SizeCardReportClient = () => {
  return (
    <Translator>
      <SizeCard />
    </Translator>
  );
};
