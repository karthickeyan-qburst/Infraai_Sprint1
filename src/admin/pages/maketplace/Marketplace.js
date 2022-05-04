import React from "react";
import CardComponent from "../../components/Card/CardComponent";

export default function Marketplace() {
  const title = "Marketplace";
  const subTitle = "My Data";
  const marketplace = [
    { imageUrl: "status", name: "Pre-REF", date: "06/23/2025", projectId: 1 },
    { imageUrl: "status", name: "Pre-REF", date: "06/23/2025", projectId: 2 },
    { imageUrl: "status", name: "Pre-REF", date: "06/23/2025", projectId: 3 },
  ];

  return (
    <>
      <CardComponent
        title={title}
        marketPlace={true}
        marketplace={marketplace}
        subTitle={subTitle}
      />
    </>
  );
}
