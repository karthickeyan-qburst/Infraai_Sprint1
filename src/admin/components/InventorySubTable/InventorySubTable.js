import React from 'react';
import {
    TableBody,
    Table,
    TableContainer,
    Paper,
    TableRow,
    TableCell,
  } from "@mui/material";

import './InventorySubTable.scss';

function InventorySubTable() {
  return (
    <div class="inventorytable__container">
    <TableContainer component={Paper} sx={{overflow:'hidden', borderRadius:'10px'}}>
      <Table>
        <TableBody >
          <TableRow className="report__data" key="{row.name}" >
            <TableCell align="left" className='data1__inventory' sx={{width:'55%'}}>Lane 1 Distance</TableCell>
            <TableCell align="center"  sx={{width:'22.5%', pr:'2.5%'}}>SY</TableCell>
            <TableCell align="center" sx={{width:'22.5%', pl:'3%'}}>0.00</TableCell>
          </TableRow>
          <TableRow className="report__data" key="{row.name}" >
            <TableCell align="left" className='data1__inventory' sx={{width:'55%'}}>Lane 2 Distance</TableCell>
            <TableCell align="center"  sx={{width:'22.5%', pr:'2.5%'}}>SY</TableCell>
            <TableCell align="center" sx={{width:'22.5%', pl:'3%'}}>0.00</TableCell>
          </TableRow>
          <TableRow className="report__data" key="{row.name}" >
            <TableCell align="left" className='data1__inventory' sx={{width:'55%'}}>Lane 3 Distance</TableCell>
            <TableCell align="center"  sx={{width:'22.5%', pr:'2.5%'}}>SY</TableCell>
            <TableCell align="center" sx={{width:'22.5%', pl:'3%'}}>0.00</TableCell>
          </TableRow>
         

          
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  )
}

export default InventorySubTable