import React from "react";
import { Translator } from "../components/TranslatorAsync.js";
import { SizeCard } from "../components/SizeCard.js";
import SketchAttributesCard from "../util/SketchAttributesCard.js";

export const SketchAttributes = () => {
  return (
    <Translator>
      <SizeCard />
      <SketchAttributesCard autoHide />
    </Translator>
  );
};

export default SketchAttributes;
