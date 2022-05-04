import React from "react";
//import CardComponent from "../../../components/Card/CardComponent";
import CardComponent from "../../../components/AnalysisCard/CardComponent";
import { analyst } from './data'

export default function Analysis() {
  const subTitle = "Analyst Detail";
  return (
    <>
      <CardComponent analyst={analyst} subTitle={subTitle} />
      {/* <InventoryReportTable /> */}
    </>
  );
}
