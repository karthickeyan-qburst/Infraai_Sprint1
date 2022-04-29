import React from "react";

import CardComponent from "../../../components/Card/CardComponent";

export default function Description() {
  const title = "Description";
  const subTitle = "Project Details";
  const description = [
    { key: "status", value: "Pre-REF" },
    { key: "RFP Date (est.):", value: "06/23/2025" },
    { key: "Contract Expires on:", value: "06/23/2025" },
    { key: "Contract Started on:", value: "DBI" },
    { key: "Incumbent", value: "$80,183,156.50" },
    { key: "Contract Value:", value: "$16,037,558.86" },
    { key: "Annual Value:", value: "44" },
    { key: "Miles", value: "11" },
    { key: "Annual Cost C/L Mile:", value: "$364,489" },
    { key: "Counties", value: "City of Alexandria (VA), Prince George's (MD)" },
    { key: "Asset Type", value: "Urban Highway, Moveable Bridge" },
  ];
  return (
    <>
      <CardComponent data={description} title={title} subTitle={subTitle} />
    </>
  );
}
