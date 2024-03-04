import { Button, Stack } from "@mui/material";
import { useState } from "react";
import PageContainer from "src/components/container/PageContainer";
import CustomTextField from "src/components/forms/theme-elements/CustomTextField";
import DashboardCard from "src/components/shared/DashboardCard";

const CompanyRegistration = () => {

    const [companyName, setCompanyName] = useState(null);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [address, setAddress] = useState(null);
    const [contact, setContact] = useState(null);
    const [password, setPassword] = useState(null);
    const [companyDocs, setCompanyDocs] = useState(null);


    const registerCompany = (e)=>{
        e.preventDefault();
    }


    return ( 

        <div>
        
        <PageContainer title="Company Registration">
        

        <DashboardCard title={"Company Registration"}>
        
        <form onSubmit={(e)=>registerCompany(e)} style={{display:"flex",justifyContent:"center"}}>
        <Stack direction={"column"} spacing={2} maxWidth={"700px"}>

        <CustomTextField placeholder="Company Name" required/>

        <CustomTextField placeholder="Username" required/>

        <CustomTextField type="email" placeholder="Email Address" required/>

        <CustomTextField placeholder="Address" required/>

        <CustomTextField placeholder="Contact" required/>

        <CustomTextField type="password" placeholder="Password" required/>

        <CustomTextField type="file" placeholder="Company Documents" required/>

        <Button type="submit" variant="contained">Apply Now</Button>

        </Stack>
        </form>
        </DashboardCard>
        
        
        </PageContainer>
        
        </div>
     );
}
 
export default CompanyRegistration;