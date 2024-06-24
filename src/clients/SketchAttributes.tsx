import React from "react";
import { Translator } from "../components/TranslatorAsync";
import { SizeCard } from "../components/SizeCard";
import SketchAttributesCard from "../util/SketchAttributesCard";

const SketchAttributes = () => {
  return (
    <>
      <SizeCard />
      <SketchAttributesCard autoHide />
    </>
  );
};

export default function () {
  // Translator must be in parent FunctionComponent in order for ReportClient to use useTranslate hook
  return (
    <Translator>
      <SketchAttributes />
    </Translator>
  );
}
