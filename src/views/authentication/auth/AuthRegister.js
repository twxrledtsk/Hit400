import React, { useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';
import RegisterUser from 'src/api/postRegister';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import registerCompany from 'src/api/registerCompany';



const AuthRegister = ({ title, subtitle, subtext }) => {
    const [full_name, setFull_name] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [contact_number, setContact_number] = useState("");
    const [password,setPassword] = useState("");
    const [images,setImages] = useState(null);
    const nav = useNavigate();

    const handleFileChange = (e)=>{
        const files = e.target.files;
        setImages(files);
    }


    const handleSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("company_name",full_name);
        formData.append("email",email);
        formData.append("contact",contact_number);
        formData.append("password",password);
        formData.append("address",address);
        
        if(images){
            for(let i = 0; i<images.length;i++){
                formData.append("files",images[i]);
            }
        }

        console.log("full_name", full_name);
        console.log("email", email);
        console.log("images", images);

        let status = await registerCompany(formData);

        if(status === "success"){
            toast.success("Registration Successful",{
                position:"top-center",
                hideProgressBar:true,
                autoClose:1000
            });
            
            setTimeout(() => {
                nav("/auth/login")
            }, 2000);

        }else{
            toast.error("Failed to register, please try again",{
                position:"top-center",
                hideProgressBar:true,
                autoClose:1000
            });
            setFull_name("");
            setAddress("");
            setContact_number("");
            setPassword("");
            setEmail("");
        }

    }


    return ( 
        <>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
                {title}
            </Typography>
        ) : null}

        {subtext}

        <Box>

        <form onSubmit={(e)=>handleSubmit(e)}>

        <ToastContainer/>

        <Stack mb={3}>

        <Box mt="25px">
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1"
        fontWeight={600} component="label" htmlFor='name' mb="5px">Company Name</Typography>
        <CustomTextField id="name" style={{display:"inline-block"}} variant="outlined" fullWidth required onChange={(e)=>setFull_name(e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1"
        fontWeight={600} component="label" htmlFor='email' mb="5px" mt="25px">Email Address</Typography>
        <CustomTextField id="email" style={{display:"inline-block"}} variant="outlined" fullWidth required onChange={(e)=>setEmail(e.target.value)} />

        </Grid>
        </Grid>
        </Box>

        <Box mt="25px">
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1"
        fontWeight={600} component="label" htmlFor='address' mb="5px">Physical Address</Typography>
        <CustomTextField id="address" style={{display:"inline-block"}} variant="outlined" fullWidth required onChange={(e)=>setAddress(e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1"
        fontWeight={600} component="label" htmlFor='contact' mb="5px">Contact Number</Typography>
        <CustomTextField id="contact" style={{display:"inline-block"}} variant="outlined" fullWidth required onChange={(e)=>setContact_number(e.target.value)} />
        </Grid>
        </Grid>
        </Box>

        <Typography variant="subtitle1"
        fontWeight={600} component="label" htmlFor='password' mb="5px" mt="25px">Password</Typography>
        <CustomTextField id="password" variant="outlined" type="password" fullWidth required onChange={(e)=>setPassword(e.target.value)} />


        <Typography variant="subtitle1"
        fontWeight={600} component="label" htmlFor='password' mb="5px" mt="25px">Company Documents</Typography>
        <CustomTextField id="files" onChange={(e)=> handleFileChange(e)} inputProps={{multiple:true,accept:"image/png, image/jpeg", maxLength:3}} type="file" variant="outlined" fullWidth required/>


        </Stack>
        <Button sx={{backgroundColor:"navy", ":hover":{backgroundColor:"navy"}}} color="primary" variant="contained" size="large" fullWidth type='submit'>
        Sign Up
        </Button>

        </form>

        </Box>
        {subtitle}
    </>
     );
}
 
export default AuthRegister;
