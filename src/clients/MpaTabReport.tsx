import React, { useState } from "react";
import { Translator } from "../components/TranslatorAsync";
import { SketchAttributesCard } from "@seasketch/geoprocessing/client-ui";

const MpaTabReport = () => {
  return (
    <>
      <SketchAttributesCard autoHide />
    </>
  );
};

export default function () {
  // Translator must be in parent FunctionComponent in order for ReportClient to use useTranslate hook
  return (
    <Translator>
      <MpaTabReport />
    </Translator>
  );
}
