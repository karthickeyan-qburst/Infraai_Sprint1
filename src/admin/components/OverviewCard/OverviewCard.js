import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TableBody,
  Table,
  TableContainer,
  Paper,
  TableRow,
  TableCell,
} from "@mui/material";

import "./OverviewCard.scss";

function createData(name, protein) {
  return { name, protein };
}

const rows = [
  createData("Status", "Pre-RFP Release"),
  createData(
    "Value",
    "$80,183,156.50 Total Contract Value / $16,037,558.86 Total Annual"
  ),
  createData("RFP Date", "03/15/2024"),
  createData("Incumbent", "T1"),
  createData("Miles", "11"),
  createData("Attachment", <button>Select</button>),
];

function OverViewCard() {
  return (
    <Box component="main" className="overview-main__body">
      <Card className="overview__content">
        <CardContent>
          <Typography component="div" className="overview-heading">
            Overview
          </Typography>
          <Box className="overview__table">
          <TableContainer component={Paper} >
            <Table>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>

                    <TableCell sx={{ width: "45%" }} align="right">
                      {row.protein}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Box>
          
        </CardContent>
      </Card>
    </Box>
  );
}
export default OverViewCard;
