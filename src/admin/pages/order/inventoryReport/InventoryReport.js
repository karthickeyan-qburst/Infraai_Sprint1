import React from "react";
import { Card, Grid, Typography } from "@mui/material";

import OverViewCard from "../../../components/OverviewCard/OverviewCard";
import InventoryReportTable from "../../../components/InventoryReportTable/InventoryReportTable";

import "./InventoryReport.scss";
import { Box } from "@mui/system";
import MarketPlaceCard from "../../../components/MarketPlaceCard/MarketPlaceCard";

export default function InventoryReport() {
  return (
    <div>
      <Box component="main" className="main__body">
        <Card className="card">
          <Typography gutterBottom component="div" className="card__heading">
            Inventory
          </Typography>
          <Typography component="div" className="card__subheading-outline">
            Tables heading
          </Typography>
          <Typography component="div" className="card__content-outline">
            <InventoryReportTable />
          </Typography>
        </Card>
      </Box>
    </div>
  );
}
