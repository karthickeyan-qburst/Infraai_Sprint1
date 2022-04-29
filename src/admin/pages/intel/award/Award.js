import React from "react";
import CardComponent from "../../../components/Card/CardComponent";

export default function Award() {
  const title = "Awards";
  const subTitle = "Overview";
  const awards = [
    { key: "Status:", value: "Pre-REF" },
    { key: "Winning Bid 2020:", value: "$80,183,156.50 *FOIA*" },
    { key: "Annual Value 2020", value: "$16,037,558.86 *FOIA*" },
    { key: "Estimated New Contact Value", value: "$102,821,280" },
    { key: "Estimated Annual Value", value: "$20,564,256" },
    { key: "Estimated RFP Release", value: "January, 1 2020" },
  ];
  const titleAdditionalBids = "Additional Bids";
  const subTitleAdditionalBids = "Overview";
  const additionalBids = [
    { key: "LB:", value: "$94,302,421" },
    { key: "USF", value: "$96,762,192" },
    { key: "FDI", value: "$97,123,094" },
    { key: "Roy Jorgensen", value: "$97,437,987" },
  ];
  return (
    <>
      <CardComponent data={awards} title={title} subTitle={subTitle} />
      <CardComponent
        data={additionalBids}
        title={titleAdditionalBids}
        subTitle={subTitleAdditionalBids}
      />
    </>
  );
}
