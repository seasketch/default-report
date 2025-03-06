import React from "react";
import { ResultsCard, Pill } from "@seasketch/geoprocessing/client-ui";
import Translator from "../components/TranslatorAsync.js";
import { useTranslation } from "react-i18next";
import { squareMeterToKilometer } from "@seasketch/geoprocessing/client-core";

const Number = new Intl.NumberFormat("en", { style: "decimal" });

export const SizeCard = () => {
  const { t } = useTranslation();
  const sqKmLabel = t("km²");

  return (
    <ResultsCard title={t("Size")} functionName="areaOverlap">
      {(data: number) => {
        return (
          <p>
            {t("The area of this sketch is ")}
            <Pill>
              {Number.format(Math.round(squareMeterToKilometer(data)))}{" "}
              {sqKmLabel}
            </Pill>
          </p>
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
