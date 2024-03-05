import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "src/components/shared/DashboardCard";
import imageData from "../../assets/images/photographer.jpg";
import cr14 from "../../assets/images/cr14.png";
import coi from "../../assets/images/coi.jpg";
import bon from "../../assets/images/bon.png";
import { Button, Stack } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CompanyDetail = () => {

    const approveCompany = ()=>{
      let result =  window.confirm("Approve Company ?");

        if(result){
            toast.success("Company Approved",{
                position:"top-center",
                hideProgressBar:false,
                autoClose:700
            })
        }
    }

    const BLockCompany = ()=>{
        let result =  window.confirm("Block Company ?");
  
          if(result){
              toast.success("Company Blocked",{
                  position:"top-center",
                  hideProgressBar:false,
                  autoClose:700
              })
          }
      }

      const DeleteCompany = ()=>{
        let result =  window.confirm("Delete Company ?");
  
          if(result){
              toast.success("Company Deleted",{
                  position:"top-center",
                  hideProgressBar:false,
                  autoClose:700
              })
          }
      }
    return (  
        <div>
        
        <PageContainer title="Company Detail">

        <ToastContainer/>
        
        <DashboardCard title="Company">
        <p>Status: Approved</p>

        <DashboardCard title={"Company Details"}>
        <p>Name: Lukesoft Investments</p>
        <p>Location: 45 Newlands Harare</p>
        <p>Contact: 0774 975 876</p>
        
        </DashboardCard>

        <DashboardCard title={"Registration Documents"}>

        <img width={"250px"} src={bon}/>

        <img width={"250px"} src={cr14}/>

        <img width={"250px"} src={coi}/>
        
        </DashboardCard>

        <DashboardCard title={"Actions"}>
        
        <Stack direction={"row"} spacing={2}>
        <Button onClick={()=>approveCompany()} variant="contained" sx={{":hover":{
            backgroundColor:"#000053"
        }}}>Approve Company</Button>
        <Button onClick={()=>DeleteCompany()} sx={{":hover":{
            backgroundColor:"#000053"
        }}} variant="contained">Delete Company</Button>
        <Button onClick={()=>BLockCompany()} sx={{":hover":{
            backgroundColor:"#000053"
        }}} variant="contained">Block Company</Button>
        </Stack>
        
        </DashboardCard>
        
        
        </DashboardCard>
        
        </PageContainer>
        
        </div>
    );
}
 
export default CompanyDetail;