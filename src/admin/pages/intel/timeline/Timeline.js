import React from "react";
import CardComponent from "../../../components/Card/CardComponent";

export default function Timeline() {
  const title = "Timeline";
  const subTitle = "Timeline Details";
  const timeline = [
    { key: "Status:", value: "Pre-REF" },
    { key: "RFP Date (est.):", value: "06/23/2025" },
    { key: "Awards", value: "06/23/2025" },
    { key: "Performance", value: "06/23/2025 to 06/23/2027" },
  ];
  return (
    <>
      <CardComponent
        showMinicard={true}
        data={timeline}
        title={title}
        subTitle={subTitle}
      />
    </>
  );
}
