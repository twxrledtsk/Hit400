import React, { useState } from 'react';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
    Checkbox,
   
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import loginUser from 'src/api/postLogin';

const AuthLogin = ({ title, subtitle, subtext }) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    let nav = useNavigate();


    const handleLogin = async(e) =>{
        e.preventDefault();
        let login_data = {
            email,
            password
        }
        let status = await loginUser(login_data);
        console.log("Status",status);

        if(status === "Authenticated"){
            localStorage.setItem("Status","Logged");
            localStorage.setItem("Username",email);
            nav("/dashboard");
        }else{
            toast.error("Login Failed, Please try again!",{
                position:"top-center",
                hideProgressBar:true,
                autoClose:1000
            });
            setPassword("");
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

        <form onSubmit={(e)=>handleLogin(e)}>

        <ToastContainer/>
        
        <Stack>
        
        <Box>
            <Typography variant="subtitle1"
                fontWeight={600} component="label" htmlFor='username' mb="5px">Username</Typography>
            <CustomTextField id="email" type="text" variant="outlined" fullWidth required onChange={(e)=>setEmail(e.target.value)}/>
        </Box>
        <Box mt="25px">
            <Typography variant="subtitle1"
                fontWeight={600} component="label" htmlFor='password' mb="5px" >Password</Typography>
            <CustomTextField id="password" type="password" variant="outlined" fullWidth required onChange={(e)=>setPassword(e.target.value)}/>
        </Box>
        <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Remeber this Device"
                />
            </FormGroup>
            <Typography
                component={Link}
                to="/"
                fontWeight="500"
                sx={{
                    textDecoration: 'none',
                    color: 'primary.main',
                }}
            >
                Forgot Password ?
            </Typography>
        </Stack>
    </Stack>
    <Box>
        <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="submit"

            sx={{backgroundColor:"navy",":hover":{
                backgroundColor:"navy",
                ":focus":{
                    backgroundColor:"navy"
                }
            }}}
        >
            Sign In
        </Button>
    </Box>
        
        </form>


        {subtitle}
    </>
     );
}
 
export default AuthLogin;
