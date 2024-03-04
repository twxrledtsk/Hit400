import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import getCompanies from "src/api/getCompanies";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "src/components/shared/DashboardCard";
import "react-toastify/dist/ReactToastify.css";
import { Tab } from "wd/lib/special-keys";
import { IconEye } from "@tabler/icons";

const Companies = () => {

    const [companyList,setCompanyList] = useState(null);


    const getAllCompanies = async()=>{
        let companies = await getCompanies();
        if(companies !== "Failed"){
            console.log(companies);
            setCompanyList(companies);
        }else{
            toast.error("Failed to get companies",{
                position:"top-center",
                hideProgressBar:true,
                autoClose:700
            })
        }
    }


    useEffect(()=>{
        getAllCompanies();
    },[]);



    return (  
        <div>
        
        <PageContainer title="Companies">

        <ToastContainer/>

        <DashboardCard title={"Companies"}>
        
        <Table>
        
        <TableHead>
        <TableRow>
        <TableCell>Company Name</TableCell>
        <TableCell>Subscription Expires</TableCell>
        <TableCell>Address</TableCell>
        <TableCell>Contact</TableCell>
        <TableCell></TableCell>
        </TableRow>
        </TableHead>

        <TableBody>

        {
            companyList !== null ? (
                companyList.map((company)=>(
                    <TableRow>
                    <TableCell>{company.company_name}</TableCell>
                    <TableCell>Subscription Expires</TableCell>
                    <TableCell>{company.address}</TableCell>
                    <TableCell>{company.contact}</TableCell>
                    <TableCell><IconEye/></TableCell>
                    </TableRow>
                ))
            ):(

                <TableRow><TableCell>No Companies Found</TableCell></TableRow>

                )
        }
        </TableBody>
        
        </Table>
        
        </DashboardCard>
        
        
        </PageContainer>
        </div>
    );
}
 
export default Companies;