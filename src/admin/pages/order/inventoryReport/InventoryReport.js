import React from "react";
import {
  Box,
  Card,
  Typography,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  Button
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";


import { ReactComponent as DownloadSvg } from '../../../../assets/download.svg';
import InventoryReportTable from "../../../components/InventoryReportTable/InventoryReportTable";

import "./InventoryReport.scss";

export default function InventoryReport() {
  return (
    <div>
      <Box component="main" className="imain__body">
        <Card className="icard">
          <Typography gutterBottom component="div" className="icard__heading">
            <span>Inventory</span>
            <Button className="inventoryreport__download">
              <span> Download &nbsp;</span> <DownloadSvg />
            </Button>
            {/* <DownloadSvg className="inventoryreport__download"/>  */}

          </Typography>
          <Typography component="div" className="icard__subheading-outline">
          <TableContainer component={Paper} className="inventoryreport__table-container" >
                <Table >
                  <TableHead
                    className="inventoryreport__header"
                    sx={{ "&:first-child td, &:first-child th": { border: 0 } }}
                  >
                    <TableRow className="inventoryreport__table-row">
                      <TableCell className="irow-data" align="left" sx={{ width: "20%", pl:'2.5rem' }}>Asset Group &uarr;</TableCell>
                      <TableCell className="irow-data" align="left">Asset Item &uarr;</TableCell>
                      <TableCell className="irow-data irow-data-left" align="right"># of Unit Identified &uarr;</TableCell>
                      <TableCell className="irow-data" align="center">Total Annual Maintenance Cost &uarr;</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
          </Typography>
          <Typography component="div" className="icard__content-outline">
            <InventoryReportTable />
          </Typography>
        </Card>
      </Box>
    </div>
  );
}
