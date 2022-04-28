// import React from "react";
import { useState, useEffect } from 'react';
import EnhancedTable from "../../components/Table/Table";
import data from './data.json';

const columns = [
  {
    id: 'check',
    label: 'Add to Project',
  }, {
    id: 'state',
    label: 'State',
  },
  {
    id: 'district',
    label: 'District',
  },
  {
    id: 'estimate',
    label: 'Estimated RFP Release Date',
  },
  {
    id: 'current',
    label: 'Current Contract Expiration',
  },
  {
    id: 'contract',
    label: 'Contract Value',
  },
  {
    id: 'summary',
    label: 'Summary',
  },
];

export default function Myprojects() {

  const [tableController, settableController] = useState({
    filters: { state: '', district: '', expiresOn: { startDate: null, endDate: null } },
    sort: { orderBy: 'id', order: 'desc' },
    pagination: { totalCount: data.length, rowsPerPage: 10, page: 0 }
  });

  useEffect(() => {
    console.log('api call', tableController);
  }, [tableController]);

  const handleTableControllerChange = (control, obj) => {
    settableController({
      ...tableController,
      [control]: { ...tableController[control], ...obj },
    });
  }

  return (
    <div >
      <EnhancedTable
        title={'Snapshots'}
        columns={columns}
        rows={data}
        totalCount={data.length}
        tableController={tableController}
        handleTableControllerChange={handleTableControllerChange}
      />
    </div>
  );
}
