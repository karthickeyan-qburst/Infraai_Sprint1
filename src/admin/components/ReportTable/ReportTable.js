import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  tableCellClasses,
  Divider,
} from "@mui/material";

import "./ReportTable.scss";

function ReportTable() {
  return (
    <TableContainer
      component={Paper}
      className="reporttable__container"
    >
      <Table>
        <TableHead className="reporttable__header" sx={{ '&:first-child td, &:first-child th': { border:0 }}}>
          <TableRow>
            <TableCell className="reporttable__header-heading">
              Asset Item
            </TableCell>
            <TableCell className="reporttable__header-heading" align="center">
              Number of Assets <br/>Items Identified
            </TableCell>
            <TableCell className="reporttable__header-heading" align="center">
              Number of Passing <br/> Assets Items
            </TableCell>
            <TableCell className="reporttable__header-heading" align="center">
              Asset Items <br /> Weighting
            </TableCell>
            <TableCell className="reporttable__header-heading" align="center">
              Total Possible <br />Score
            </TableCell>
            <TableCell className="reporttable__header-heading" align="center">
              Actual Asset<br /> Item Score
            </TableCell>
            <TableCell className="reporttable__header-heading" align="center">
              Actual Rating for <br /> Asset Items
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          <TableRow className="reporttable__data" key="{row.name}"  >
            <TableCell component="th" scope="row">
              Pipers & Culvert &#60;36 sq ft
            </TableCell>
            <TableCell align="center">114</TableCell>
            <TableCell align="center">94</TableCell>
            <TableCell align="center">8.00</TableCell>
            <TableCell align="center">912.00</TableCell>
            <TableCell align="center">752.00</TableCell>
            <TableCell align="center">82.5%</TableCell>
          </TableRow>

          <TableRow key="{row.name}" className="reporttable__data" >
            <TableCell component="th" scope="row">
              Pipers & Culvert &#62;36 sq ft
            </TableCell>
            <TableCell align="center">6</TableCell>
            <TableCell align="center">94</TableCell>
            <TableCell align="center">8.25</TableCell>
            <TableCell align="center">42.00</TableCell>
            <TableCell align="center">752.00</TableCell>
            <TableCell align="center">82.5%</TableCell>
          </TableRow>

          <TableRow key="{row.name}" className="reporttable__data" >
            <TableCell component="th" scope="row">
              Paved Ditches
            </TableCell>
            <TableCell align="center">114</TableCell>
            <TableCell align="center">94</TableCell>
            <TableCell align="center">8.00</TableCell>
            <TableCell align="center">912.00</TableCell>
            <TableCell align="center">752.00</TableCell>
            <TableCell align="center">82.5%</TableCell>
          </TableRow>

          <TableRow key="{row.name}" className="reporttable__data">
            <TableCell component="th" scope="row">
              Pipers & Culvert &#62;36 sq ft
            </TableCell>
            <TableCell align="center">6</TableCell>
            <TableCell align="center">94</TableCell>
            <TableCell align="center">8.25</TableCell>
            <TableCell align="center">42.00</TableCell>
            <TableCell align="center">752.00</TableCell>
            <TableCell align="center">82.5%</TableCell>
          </TableRow>

          <TableRow key="{row.name}" className="reporttable__footer-data">
            <TableCell component="th" scope="row" colSpan={4}>
              TOTAL SCORE:
            </TableCell>
            <TableCell align="center" className="reporttable__footer-data-bold">4152.90</TableCell>
            <TableCell align="center" className="reporttable__footer-data-bold">3588.70</TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow key="{row.name}" className="reporttable__footer-data">
            <TableCell component="th" scope="row" colSpan={4}>
              Required Rating for Drainage Asset Group:
            </TableCell>
            <TableCell align="center" className="reporttable__footer-data-bold">80.0%</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow key="{row.name}" className="reporttable__footer-data">
            <TableCell component="th" scope="row" colSpan={4}>
              Asset Group Rating
            </TableCell>
            <TableCell align="center" className="reporttable__footer-data-bold">86.4%</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow key="{row.name}" className="reporttable__footer-data">
            <TableCell component="th" scope="row" colSpan={4}>
              Total MRP Non-Performance Deduction Amount:
            </TableCell>
            <TableCell align="center" className="reporttable__footer-data-bold">$0.00</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ReportTable;
