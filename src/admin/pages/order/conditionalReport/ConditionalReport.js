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
  Button,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import { ReactComponent as DownloadSvg } from "../../../../assets/download.svg";
import ReportTable from "../../../components/ReportTable/ReportTable";
import "./ConditionalReport.scss";

function ConditionalReport() {
  return (
    <div>
      <Box component="main" className="imain__body">
        <Card className="icard">
          <Typography gutterBottom component="div" className="icard__heading">
            <span>Conditional Report</span>
            <Button className="inventoryreport__download">
              <span> Download &nbsp;</span> <DownloadSvg />
            </Button>
            {/* <DownloadSvg className="inventoryreport__download"/>  */}
          </Typography>
          <Typography component="div" className="card__subheading-outline">
            Draining Asset Group Rating
          </Typography>

          <Typography component="div" className="card__content-outline">
            <ReportTable />
          </Typography>
        </Card>
      </Box>
    </div>
  );
}

export default ConditionalReport;
