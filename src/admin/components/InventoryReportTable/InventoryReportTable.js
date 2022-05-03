import React from "react";
import {
  TableBody,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

import "./InventoryReportTable.scss";
import InventorySubTable from "../InventorySubTable/InventorySubTable";

function InventoryReportTable() {
  return (
    <div class="inventoryreporttable__container">
      <TableContainer
        component={Paper}
        sx={{
          overflow: "hidden",
          borderRadius: "10px",
          border: "0.001px solid rgba(224, 224, 224, 1)",
        }}
      >
        <Table>
          <TableHead
            className="reporttable__header"
            sx={{ "&:first-child td, &:first-child th": { border: 0 } }}
          >
            <TableRow>
              <TableCell className="reporttable__header-heading" colSpan={4}>
                Project Totals
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className="ireporttable__data" key="{row.name}">
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "20%" }}
              ></TableCell>
              <TableCell align="left" className="data1">
                Overall Project Data
              </TableCell>
              <TableCell align="right" className="data1">
                mi
              </TableCell>
              <TableCell align="center" className="data2">
                80.20
              </TableCell>
            </TableRow>

            <TableRow className="ireporttable__data" key="{row.name}">
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "20%" }}
              ></TableCell>
              <TableCell align="left" className="data1">
                # Lanes main
              </TableCell>
              <TableCell align="center" className="data1">
                {null}
              </TableCell>
              <TableCell align="center" className="data2">
                80.20
              </TableCell>
            </TableRow>

            <TableRow className="ireporttable__data" key="{row.name}">
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "20%" }}
              ></TableCell>
              <TableCell align="left" className="data1">
                Overall Project Data
              </TableCell>
              <TableCell align="center" className="data1">
                {null}
              </TableCell>
              <TableCell align="center" className="data2">
                80.20
              </TableCell>
            </TableRow>

            <TableRow className="ireporttable__data" key="{row.name}">
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "20%" }}
              ></TableCell>
              <TableCell align="left" className="data1" colSpan={3}>
                <InventorySubTable />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default InventoryReportTable;
