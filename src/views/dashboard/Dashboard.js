import React, {  useState } from 'react';
import { Grid, Box } from '@mui/material';
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

          <Grid  item xs={12} lg={8} style={{width:"100%", height:"440px"}}>
          <BarGauge
          palette={"Carmine"}
          id="gauge"
          startValue={0}
          endValue={100}
          defaultValues={20}
          height={"100%"}
          width={"500px"}
          >

          <Label format={format}/>
          <Export enabled={true} />
          <Title text={"Credit Score"}>
            <Font size={28} />
          </Title>
          
        
          </BarGauge>


          </Grid>

          <Grid item xs={12} lg={4}>

            <Grid container spacing={3}>

              <Grid item xs={12}>
                <YearlyBreakup total={34} />
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
