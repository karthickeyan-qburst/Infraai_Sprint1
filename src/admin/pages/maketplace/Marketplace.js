import React from "react";
import { useState, useEffect } from "react";

import EnhancedTable from "../../components/Table/Table";
import CardComponent from "../../components/Card/CardComponent";
import data from "./data.json";

const columns = [
  {
    id: "check",
    label: "Add to Project",
  },
  {
    id: "state",
    label: "State",
  },
  {
    id: "country",
    label: "Country",
  },
  {
    id: "proposal_date",
    label: "Proposal Date",
  },
  {
    id: "expires",
    label: "Expires",
  },
  {
    id: "contract",
    label: "Contract Value",
  },
  {
    id: "summary",
    label: "Summary",
  },
];

export default function Marketplace() {

  const [tableController, settableController] = useState({
    filters: {
      state: "",
      district: "",
      expiresOn: { startDate: null, endDate: null },
    },
    sort: { orderBy: "id", order: "desc" },
    pagination: { totalCount: data.length, rowsPerPage: 10, page: 0 },
  });

  useEffect(() => {
    console.log("api call", tableController);
  }, [tableController]);

  const handleTableControllerChange = (control, obj) => {
    settableController({
      ...tableController,
      [control]: { ...tableController[control], ...obj },
    });
  };


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
      <div style={{height:'15px'}}></div>
      <EnhancedTable
        title={"All Projects"}
        columns={columns}
        rows={data}
        totalCount={data.length}
        tableController={tableController}
        handleTableControllerChange={handleTableControllerChange}
        marketplace = {true}
      />
    </>
  );
}
