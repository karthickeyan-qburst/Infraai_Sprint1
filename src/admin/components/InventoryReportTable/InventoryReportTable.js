import React from "react";
import {
  TableBody,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow
} from "@mui/material";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";

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
        <Table sx={{
          [`.${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}>
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
                4.00
              </TableCell>
            </TableRow>

            <TableRow className="sub-table" key="{row.name}" >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "20%" }}
              ></TableCell>
              <TableCell align="left" className="data1">
              # LANES - Ramp
              </TableCell>
              <TableCell align="center" className="data1">
                {null}
              </TableCell>
              <TableCell align="center" className="data2">
                2.00
              </TableCell>
            </TableRow>

            <TableRow className="sub-table" key="{row.name}" >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "20%" }}
              ></TableCell>
              <TableCell align="left" className="data1">

              </TableCell>
              <TableCell align="center" className="data1">
                {null}
              </TableCell>
              <TableCell align="center" className="data2">
                6.00
              </TableCell>
            </TableRow>

            <TableRow className="sub-table" key="{row.name}" >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "20%" }}
              ></TableCell>
              <TableCell align="left" className="data1">
                # LF         
              </TableCell>
              <TableCell align="center" className="data1">
                {null}
              </TableCell>
              <TableCell align="center" className="data2">
                637,824.00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer
        component={Paper}
        sx={{
          overflow: "hidden",
          borderRadius: "10px",
          border: "0.001px solid rgba(224, 224, 224, 1)",
        }}
      >
        <Table sx={{
          [`.${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}>
          <TableHead
            className="reporttable__header"
            sx={{ "&:first-child td, &:first-child th": { border: 0 } }}
          >
            <TableRow>
              <TableCell className="reporttable__header-heading" colSpan={4}>
                PVMT
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
                Total surface
              </TableCell>
              <TableCell align="right" className="data1">
                SY
              </TableCell>
              <TableCell align="center" className="data2">
                0.00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer
        component={Paper}
        sx={{
          overflow: "hidden",
          borderRadius: "10px",
          border: "0.001px solid rgba(224, 224, 224, 1)",
        }}
      >
        <Table sx={{
          [`.${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}>
          <TableHead
            className="reporttable__header"
            sx={{ "&:first-child td, &:first-child th": { border: 0 } }}
          >
            <TableRow>
              <TableCell className="reporttable__header-heading" colSpan={4}>
                PVMT
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
                Mainline
              </TableCell>
              <TableCell align="right" className="data1">
                SY
              </TableCell>
              <TableCell align="center" className="data2">
                0.00
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

      <TableContainer
        component={Paper}
        sx={{
          overflow: "hidden",
          borderRadius: "10px",
          border: "0.001px solid rgba(224, 224, 224, 1)",
        }}
      >
        <Table sx={{
          [`.${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}>
          <TableHead
            className="reporttable__header"
            sx={{ "&:first-child td, &:first-child th": { border: 0 } }}
          >
            <TableRow>
              <TableCell className="reporttable__header-heading" colSpan={4}>
                PVMT
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
                Shoulder
              </TableCell>
              <TableCell align="right" className="data1">
                SY
              </TableCell>
              <TableCell align="center" className="data2">
                0.00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer
        component={Paper}
        sx={{
          overflow: "hidden",
          borderRadius: "10px",
          border: "0.001px solid rgba(224, 224, 224, 1)",
        }}
      >
        <Table sx={{
          [`.${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}>
          <TableHead
            className="reporttable__header"
            sx={{ "&:first-child td, &:first-child th": { border: 0 } }}
          >
            <TableRow>
              <TableCell className="reporttable__header-heading" colSpan={4}>
                PVMT
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
                Concrete Pavement Joint
              </TableCell>
              <TableCell align="right" className="data1">
                LF
              </TableCell>
              <TableCell align="center" className="data2">
                0.00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer
        component={Paper}
        sx={{
          overflow: "hidden",
          borderRadius: "10px",
          border: "0.001px solid rgba(224, 224, 224, 1)",
        }}
      >
        <Table sx={{
          [`.${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}>
          <TableHead
            className="reporttable__header"
            sx={{ "&:first-child td, &:first-child th": { border: 0 } }}
          >
            <TableRow>
              <TableCell className="reporttable__header-heading" colSpan={4}>
                PVMT
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
                Crack Sealing
              </TableCell>
              <TableCell align="right" className="data1">
                LF
              </TableCell>
              <TableCell align="center" className="data2">
                0.00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer
        component={Paper}
        sx={{
          overflow: "hidden",
          borderRadius: "10px",
          border: "0.001px solid rgba(224, 224, 224, 1)",
        }}
      >
        <Table sx={{
          [`.${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}>
          <TableHead
            className="reporttable__header"
            sx={{ "&:first-child td, &:first-child th": { border: 0 } }}
          >
            <TableRow>
              <TableCell className="reporttable__header-heading" colSpan={4}>
                PVMT
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
                Approach Slab
              </TableCell>
              <TableCell align="right" className="data1">
                SY /EA
              </TableCell>
              <TableCell align="center" className="data2">
                0.00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer
        component={Paper}
        sx={{
          overflow: "hidden",
          borderRadius: "10px",
          border: "0.001px solid rgba(224, 224, 224, 1)",
        }}
      >
        <Table sx={{
          [`.${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}>
          <TableHead
            className="reporttable__header"
            sx={{ "&:first-child td, &:first-child th": { border: 0 } }}
          >
            <TableRow>
              <TableCell className="reporttable__header-heading" colSpan={4}>
                PVMT
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
                Potholes
              </TableCell>
              <TableCell align="right" className="data1">
                EA
              </TableCell>
              <TableCell align="center" className="data2">
                0.00
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

      <TableContainer
        component={Paper}
        sx={{
          overflow: "hidden",
          borderRadius: "10px",
          border: "0.001px solid rgba(224, 224, 224, 1)",
        }}
      >
        <Table sx={{
          [`.${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}>
          <TableHead
            className="reporttable__header"
            sx={{ "&:first-child td, &:first-child th": { border: 0 } }}
          >
            <TableRow>
              <TableCell className="reporttable__header-heading" colSpan={4}>
                ROADSIDE
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
                Dirt Shoulder
              </TableCell>
              <TableCell align="right" className="data1">
                SY
              </TableCell>
              <TableCell align="center" className="data2">
                0.00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer
        component={Paper}
        sx={{
          overflow: "hidden",
          borderRadius: "10px",
          border: "0.001px solid rgba(224, 224, 224, 1)",
        }}
      >
        <Table sx={{
          [`.${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}>
          <TableHead
            className="reporttable__header"
            sx={{ "&:first-child td, &:first-child th": { border: 0 } }}
          >
            <TableRow>
              <TableCell className="reporttable__header-heading" colSpan={4}>
              ROADSIDE
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
                Non-Paved Shoulder
              </TableCell>
              <TableCell align="right" className="data1">
                
              </TableCell>
              <TableCell align="center" className="data2">
                0.00
              </TableCell>
            </TableRow>
            <TableRow className="ireporttable__data" key="{row.name}">
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "20%" }}
              ></TableCell>
              <TableCell align="left" className="data1">
                Slopes
              </TableCell>
              <TableCell align="right" className="data1">
                SY
              </TableCell>
              <TableCell align="center" className="data2">
                0.00
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

      <TableContainer
        component={Paper}
        sx={{
          overflow: "hidden",
          borderRadius: "10px",
          border: "0.001px solid rgba(224, 224, 224, 1)",
        }}
      >
        <Table sx={{
          [`.${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}>
          <TableHead
            className="reporttable__header"
            sx={{ "&:first-child td, &:first-child th": { border: 0 } }}
          >
            <TableRow>
              <TableCell className="reporttable__header-heading" colSpan={4}>
                ROADSIDE
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
                Non-Paved Shoulder
              </TableCell>
              <TableCell align="right" className="data1">
                SY
              </TableCell>
              <TableCell align="center" className="data2">
                0.00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer
        component={Paper}
        sx={{
          overflow: "hidden",
          borderRadius: "10px",
          border: "0.001px solid rgba(224, 224, 224, 1)",
        }}
      >
        <Table sx={{
          [`.${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}>
          <TableHead
            className="reporttable__header"
            sx={{ "&:first-child td, &:first-child th": { border: 0 } }}
          >
            <TableRow>
              <TableCell className="reporttable__header-heading" colSpan={4}>
                ROADSIDE
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
                Concrete Sidewalk
              </TableCell>
              <TableCell align="right" className="data1">
                SF
              </TableCell>
              <TableCell align="center" className="data2">
                0.00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer
        component={Paper}
        sx={{
          overflow: "hidden",
          borderRadius: "10px",
          border: "0.001px solid rgba(224, 224, 224, 1)",
        }}
      >
        <Table sx={{
          [`.${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}>
          <TableHead
            className="reporttable__header"
            sx={{ "&:first-child td, &:first-child th": { border: 0 } }}
          >
            <TableRow>
              <TableCell className="reporttable__header-heading" colSpan={4}>
              ROADSIDE
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
                Non-Paved Shoulder
              </TableCell>
              <TableCell align="right" className="data1">
                
              </TableCell>
              <TableCell align="center" className="data2">
                0.00
              </TableCell>
            </TableRow>
            <TableRow className="ireporttable__data" key="{row.name}">
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "20%" }}
              ></TableCell>
              <TableCell align="left" className="data1">
                Fence
              </TableCell>
              <TableCell align="right" className="data1">
                LF
              </TableCell>
              <TableCell align="center" className="data2">
                0.00
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
