import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import WestIcon from "@mui/icons-material/West";
import React from "react";

import Rawdata from "./../order/rawData/Rawdata";
import ConditionalReport from "./../order/conditionalReport/ConditionalReport";
import InventoryReport from "./../order/inventoryReport/InventoryReport";
import OrderInventory from "./../order/orderInventory/OrderInventory";
import Analysis from "./../order/orderConditionalReport/OrderConditionalReport";
import TabNav from "./../../components/Tabs/TabNav";

import "./Order.scss";

export default function Order() {
  const data = [
    { name: "Raw Data", value: "1", element: <Rawdata /> },
    { name: "Order Inventory", value: "2", element: <OrderInventory /> },
    { name: "Inventory Report", value: "3", element: <InventoryReport /> },
    { name: "Conditional Report", value: "4", element: <ConditionalReport /> },
    { name: "Order Conditional Report", value: "5", element: <Analysis /> },
  ];
  return (
    <>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={0.5}
        alignContent="flex-start"
      >
        <Grid className="infai_inner_content_order" item xs={6} md={8}>
          <WestIcon />
          <Typography
            variant="h5"
            component="div"
            className="card__heading__order"
          >
            Order
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <Box className="intel__tab-container__order">
            <TabNav tabData={data} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
