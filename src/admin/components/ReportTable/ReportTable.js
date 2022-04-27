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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function ReportTable() {
  return (
    <TableContainer component={Paper} className="reporttable__container">
      <Table>
        <TableHead className="reporttable__header">
          <TableRow>
            <TableCell className="reporttable__header-heading">
              Asset Item
            </TableCell>
            <TableCell className="reporttable__header-heading" align="center">
              Number of Assets Items Identified
            </TableCell>
            <TableCell className="reporttable__header-heading" align="center">
              Number of Passing Assets Items
            </TableCell>
            <TableCell className="reporttable__header-heading" align="center">
              Asset Items Weighting
            </TableCell>
            <TableCell className="reporttable__header-heading" align="center">
              Total Possible Score
            </TableCell>
            <TableCell className="reporttable__header-heading" align="center">
              Actual Asset Item Score
            </TableCell>
            <TableCell className="reporttable__header-heading" align="center">
              Actual Rating for Asset Items
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className="reporttable__data" key="{row.name}">
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

         

          <TableRow key="{row.name}">
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

         

          <TableRow key="{row.name}">
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

         

          <TableRow key="{row.name}">
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
            <TableCell align="center">4152.90</TableCell>
            <TableCell align="center" >3588.70</TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow key="{row.name}" className="reporttable__footer-data">
            <TableCell component="th" scope="row" colSpan={4}>
             Required Rating for Drainage Asset Group:
            </TableCell>
            <TableCell align="center">80.0%</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow key="{row.name}" className="reporttable__footer-data">
            <TableCell component="th" scope="row" colSpan={4}>
             Asset Group Rating
            </TableCell>
            <TableCell align="center" >86.4%</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow key="{row.name}" className="reporttable__footer-data">
            <TableCell component="th" scope="row" colSpan={4}>
             Total MRP Non-Performance Deduction Amount:
            </TableCell>
            <TableCell align="center" >$0.00</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          


        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ReportTable;
