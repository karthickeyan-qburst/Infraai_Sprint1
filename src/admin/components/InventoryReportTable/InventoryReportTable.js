import React from 'react';
import { TableBody, Table, TableContainer, Paper, TableHead, TableRow } from '@mui/material';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import './InventoryReportTable.scss';
import InventorySubTable from '../InventorySubTable/InventorySubTable';

function InventoryReportTable() {
  return (
    <div class="inventoryreporttable__sub-container">
      <TableContainer
        className="inventoryreporttable__parent-table"
        component={Paper}
        sx={{
          overflow: 'hidden',
          borderRadius: '10px',
          border: '0.001px solid rgba(224, 224, 224, 1)'
        }}>
        <Table
          sx={{
            [`.${tableCellClasses.root}`]: {
              borderBottom: 'none'
            }
          }}>
          <TableHead
            className="reporttable__header"
            sx={{ '&:first-child td, &:first-child th': { border: 0 } }}>
            <TableRow>
              <TableCell className="ireporttable__header-heading" colSpan={4}>
                Project Totals
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className="ireporttable__data" key="{row.name}">
              <TableCell  scope="row" sx={{ width: '15%' }}></TableCell>
              <TableCell align="left" className="data1" sx={{ width: '45%' }}>
                Overall Project Data
              </TableCell>
              <TableCell align="center" className="data1" sx={{ width: '20%' }}>
                mi
              </TableCell>
              <TableCell align="center" className="data2" sx={{ width: '20%' }}>
                80.20
              </TableCell>
            </TableRow>

            <TableRow className="ireporttable__data" key="{row.name}">
              <TableCell component="th" scope="row" sx={{ width: '15%' }}></TableCell>
              <TableCell align="left" className="data1" sx={{ width: '45%' }}>
                # Lanes main
              </TableCell>
              <TableCell align="center" className="data1" sx={{ width: '20%' }}>
                {null}
              </TableCell>
              <TableCell align="left" className="data2" sx={{ width: '20%' }}>
                4.00
              </TableCell>
            </TableRow>

            <TableRow className="sub-table" key="{row.name}">
              <TableCell component="th" scope="row" sx={{ width: '15%' }}></TableCell>
              <TableCell align="left" className="data1" sx={{ width: '45%' }}>
                # LANES - Ramp
              </TableCell>
              <TableCell align="center" className="data1" sx={{ width: '20%' }}>
                {null}
              </TableCell>
              <TableCell align="left" className="data2" sx={{ width: '20%' }}>
                2.00
              </TableCell>
            </TableRow>

            <TableRow className="sub-table" key="{row.name}">
              <TableCell component="th" scope="row" sx={{ width: '15%' }}></TableCell>
              <TableCell align="left" className="data1" sx={{ width: '45%' }}></TableCell>
              <TableCell align="center" className="data1" sx={{ width: '20%' }}>
                {null}
              </TableCell>
              <TableCell align="left" className="data2" sx={{ width: '20%' }}>
                6.00
              </TableCell>
            </TableRow>

            <TableRow className="sub-table" key="{row.name}">
              <TableCell component="th" scope="row" sx={{ width: '15%' }}></TableCell>
              <TableCell align="left" className="data1" sx={{ width: '45%' }}>
                # LF
              </TableCell>
              <TableCell align="center" className="data1" sx={{ width: '20%' }}>
                {null}
              </TableCell>
              <TableCell align="left" className="data2" sx={{ width: '20%' }}>
                637,824.00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer
        className="inventoryreporttable__parent-table"
        component={Paper}
        sx={{
          overflow: 'hidden',
          borderRadius: '10px',
          border: '0.001px solid rgba(224, 224, 224, 1)'
        }}>
        <Table
          sx={{
            [`.${tableCellClasses.root}`]: {
              borderBottom: 'none'
            }
          }}>
          <TableHead
            className="reporttable__header"
            sx={{ '&:first-child td, &:first-child th': { border: 0 } }}>
            <TableRow>
              <TableCell className="ireporttable__header-heading" colSpan={4}>
                PVMT
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className="ireporttable__data" key="{row.name}">
              <TableCell  scope="row" sx={{ width: '15%' }}></TableCell>
              <TableCell align="left" className="data1" sx={{ width: '45%' }}>
                Total Surfaces
              </TableCell>
              <TableCell align="center" className="data1" sx={{ width: '20%' }}>
                SY
              </TableCell>
              <TableCell align="left" className="data2" sx={{ width: '20%' }}>
                0.00
              </TableCell>
            </TableRow>

            <TableRow className="ireporttable__data" key="{row.name}">
              <TableCell component="th" scope="row" sx={{ width: '15%' }}></TableCell>
              <TableCell align="left" className="data1" sx={{ width: '45%' }}>
                # Lanes 
              </TableCell>
              <TableCell align="center" className="data1" sx={{ width: '20%' }}>
                {null}
              </TableCell>
              <TableCell align="left" className="data2" sx={{ width: '20%' }}>
                490.00
              </TableCell>
            </TableRow> 
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer
        className="inventoryreporttable__parent-table"
        component={Paper}
        sx={{
          overflow: 'hidden',
          borderRadius: '10px',
          border: '0.001px solid rgba(224, 224, 224, 1)'
        }}>
        <Table
          sx={{
            [`.${tableCellClasses.root}`]: {
              borderBottom: 'none'
            }
          }}>
          <TableHead
            className="reporttable__header"
            sx={{ '&:first-child td, &:first-child th': { border: 0 } }}>
            <TableRow>
              <TableCell className="ireporttable__header-heading" colSpan={4}>
                PVMT
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className="ireporttable__data" key="{row.name}">
              <TableCell  scope="row" sx={{ width: '15%' }}></TableCell>
              <TableCell align="left" className="data1" sx={{ width: '45%' }}>
                Shoulders
              </TableCell>
              <TableCell align="center" className="data1" sx={{ width: '20%' }}>
                SY
              </TableCell>
              <TableCell align="left" className="data2" sx={{ width: '20%' }}>
                0.00
              </TableCell>
            </TableRow>

            <TableRow className="ireporttable__data" key="{row.name}">
              <TableCell component="th" scope="row" sx={{ width: '15%' }}></TableCell>
              <TableCell align="left" className="data1" sx={{ width: '45%' }}>
                # Lanes 
              </TableCell>
              <TableCell align="center" className="data1" sx={{ width: '20%' }}>
                {null}
              </TableCell>
              <TableCell align="left" className="data2" sx={{ width: '20%' }}>
                490.00
              </TableCell>
            </TableRow> 
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer
        className="inventoryreporttable__parent-table"
        component={Paper}
        sx={{
          overflow: 'hidden',
          borderRadius: '10px',
          border: '0.001px solid rgba(224, 224, 224, 1)'
        }}>
        <Table
          sx={{
            [`.${tableCellClasses.root}`]: {
              borderBottom: 'none'
            }
          }}>
          <TableHead
            className="reporttable__header"
            sx={{ '&:first-child td, &:first-child th': { border: 0 } }}>
            <TableRow>
              <TableCell className="ireporttable__header-heading" colSpan={4}>
                PVMT
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className="ireporttable__data" key="{row.name}">
              <TableCell  scope="row" sx={{ width: '15%' }}></TableCell>
              <TableCell align="left" className="data1" sx={{ width: '45%' }}>
                Cracked Sealing
              </TableCell>
              <TableCell align="center" className="data1" sx={{ width: '20%' }}>
                SY
              </TableCell>
              <TableCell align="left" className="data2" sx={{ width: '20%' }}>
                0.00
              </TableCell>
            </TableRow>

            <TableRow className="ireporttable__data" key="{row.name}">
              <TableCell component="th" scope="row" sx={{ width: '15%' }}></TableCell>
              <TableCell align="left" className="data1" sx={{ width: '45%' }}>
                # Lanes 
              </TableCell>
              <TableCell align="center" className="data1" sx={{ width: '20%' }}>
                {null}
              </TableCell>
              <TableCell align="left" className="data2" sx={{ width: '20%' }}>
                490.00
              </TableCell>
            </TableRow> 
          </TableBody>
        </Table>
      </TableContainer>


      <TableContainer
        className="inventoryreporttable__parent-table"
        component={Paper}
        sx={{
          overflow: 'hidden',
          borderRadius: '10px',
          border: '0.001px solid rgba(224, 224, 224, 1)'
        }}>
        <Table
          sx={{
            [`.${tableCellClasses.root}`]: {
              borderBottom: 'none'
            }
          }}>
          <TableHead
            className="reporttable__header"
            sx={{ '&:first-child td, &:first-child th': { border: 0 } }}>
            <TableRow>
              <TableCell className="ireporttable__header-heading" colSpan={4}>
                PVMT
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className="ireporttable__data" key="{row.name}">
              <TableCell  scope="row" sx={{ width: '15%' }}></TableCell>
              <TableCell align="left" className="data1" sx={{ width: '45%' }}>
                Main Line
              </TableCell>
              <TableCell align="center" className="data1" sx={{ width: '20%' }}>
                SY
              </TableCell>
              <TableCell align="left" className="data2" sx={{ width: '20%' }}>
                0.00
              </TableCell>
            </TableRow>

            <TableRow className="ireporttable__data" key="{row.name}">
              <TableCell component="th" scope="row" sx={{ width: '15%' }}></TableCell>
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
