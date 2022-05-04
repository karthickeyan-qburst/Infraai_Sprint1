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

function OverViewCard(props) {
  const { rows = [], title = "", order =false } = props;
  return (
    <Box component="main" className="overview-main__body">
      <Card className="overview__content">
        <CardContent>
          <Typography component="div" className="overview-heading">
            {title}
          </Typography>
          <Box className="overview__table">
            <TableContainer component={Paper} className={order? "bottom":""}>
              <Table>
                <TableBody>
                  {order ?
                <TableRow className="overview__table-row">
                      <TableCell
                        className="overview__table-key"
                        component="th"
                        scope="row"
                      >
                        Status:
                      </TableCell>

                      <TableCell
                        className={"order__overview__table-value"}
                        align="right"
                      >
                       <div style={{display:'flex'}}>
                       <div className="sts__order">Available</div> 
                        <div className="value-status">
                          Purchase
                        </div>
                       </div>
                      

                      </TableCell>
                    </TableRow> : null }

                  {rows.map((row) => (
                    <TableRow key={row.name} className="overview__table-row">
                      <TableCell
                        className="overview__table-key"
                        component="th"
                        scope="row"
                      >
                        {row.name}
                      </TableCell>

                      <TableCell
                        className={order?"order__overview__table-value":"overview__table-value"}
                        align="right"
                      >
                        {order? 
                        <div className="value">
                          {row.name === 'Status:' ? <span className="sts__order">Availabe</span> : null}{row.value}
                        </div>
                        :
                        <>{row.value}</>}
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
