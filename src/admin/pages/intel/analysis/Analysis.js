import React from "react";
import CardComponent from "../../../components/Card/CardComponent";
import InventoryReportTable from "../../../components/InventoryReportTable/InventoryReportTable";
import InventorySubTable from "../../../components/InventorySubTable/InventorySubTable";

export default function Analysis() {
  const title = "Analysis";
  const subTitle = "Analysis Details";
  return (
    <>
      <CardComponent title={title} subTitle={subTitle} />
      {/* <InventoryReportTable /> */}
      <InventorySubTable />
    </>
  );
}
