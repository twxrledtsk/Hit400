import React from 'react';
import {Typography} from '@mui/material';

import DashboardCard from '../../../components/shared/DashboardCard';

const MonthlyEarnings = (props) => {

  return (
    <DashboardCard
      title="Credit Risk Score"
    >
      <>
        <Typography variant="h3" fontWeight="700" mt="-20px">
          {props.total}
        </Typography>
      </>
    </DashboardCard>
  );
};

export default MonthlyEarnings;
