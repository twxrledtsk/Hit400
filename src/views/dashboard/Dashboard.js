import React, {  useState } from 'react';
import { Grid, Box, Stack } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import { BarGauge } from "devextreme-react";
import { Label, Export, Title, Font} from "devextreme-react/bar-gauge";

// components
import YearlyBreakup from './components/YearlyBreakup';
import { useNavigate } from 'react-router';



const Dashboard = () => {
  const logged_status = localStorage.getItem("Status");
  const navigate = useNavigate();



  if(!logged_status){
    alert("You are not logged in");    
    navigate("/auth/login");
  }


  const format = {
    type: 'fixedPoint',
    precision: 1,
  };


  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
     
        <Grid container spacing={1}>

          <Grid item xs={12} lg={4}>

            <Grid container spacing={3}>

            <Stack direction={"row"} spacing={2}>
            
            <Grid item xs={12} minWidth={"300px"}>
            <YearlyBreakup title="Pending Registrations" total={10} />
            </Grid>

            <Grid item xs={12} minWidth={"300px"}>
            <YearlyBreakup title="Subscribed Clients" total={5} />
            </Grid>


            <Grid item xs={12} minWidth={"300px"}>
            <YearlyBreakup title="Expired Subscriptions" total={4} />
            </Grid>
            
            </Stack>

            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
