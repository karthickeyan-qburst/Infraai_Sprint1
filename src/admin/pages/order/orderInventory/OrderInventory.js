import React from 'react';

import { Grid } from '@mui/material';

import OverViewCard from '../../../components/OverviewCard/OverviewCard';
import ProjectCard from '../../../components/ProjectCard/ProjectCard';
import Map from '../../../components/Map/Map';
import { visionMapRoutes } from '../../../constants/Constants';

import './OrderInventory.scss';

export default function OrderInventory() {
  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    //createData("Status:", "Purchase"),
    createData('Assign Inventory Project:', 'DAN ASSIGNED'),
    createData('', 'Patrick (Internal)'),
    createData('', 'Jim (Internal)')
  ];
  return (
    <Grid container direction={"column"}>
      <Grid container spacing={2} className="orderinventory__container">
        <Grid xs={6} md={6} lg={6} xl={6}>
          <ProjectCard order={true} />
        </Grid>

        <Grid xs={6} md={6} lg={6} xl={6}>
          <OverViewCard rows={rows} order={true} title="Inventory Options" />
        </Grid>
      </Grid>
      <Grid className='map__container-orderinventory'>

      <Map popUpRoutes={visionMapRoutes} style={{ height: '55vh' }} />
      </Grid>
    </Grid>
  );
}
