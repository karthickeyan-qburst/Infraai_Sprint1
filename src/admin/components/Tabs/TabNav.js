import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';

import './TabNav.scss';

export default function TabNav(props) {
  const { tabData, tabSelected = '1' } = props;
  const [value, setValue] = React.useState(tabSelected);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(tabSelected);
  }, [tabSelected]);

  /* 
   *Tab input props
   *
  const tabData = [
    { name: "project", value: "1", element: "hello world" },
    { name: "project", value: "2", element: "hello world" },
    { name: "project", value: "3", element: "hello world" },
  ]; 
  */

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'lightgrey' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          {tabData.map((data, index) => {
            return <Tab key={index} className="tab-heading" label={data.name} value={data.value} />;
          })}
        </TabList>
      </Box>
      {tabData.map((data, index) => {
        return (
          <TabPanel key={index} value={data.value}>
            {data.element}
          </TabPanel>
        );
      })}
    </TabContext>
  );
}
