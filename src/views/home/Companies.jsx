import React from 'react'
import {  
    Button,
    Card,
    Stack
} from '@mui/material'

import companyImage from "../../assets/images/borehole.jpg";
import companyImage2 from "../../assets/images/photographer.jpg";
import companyImage3 from "../../assets/images/solar.png";

const Companies = () => {

    return (

        <div>

        <div style={{display:"flex", justifyContent:"center"}}>
        <h1>Featured Companies</h1>
        </div>
       
        
        <Stack 
        component='section'
        direction="column"
        spacing={5}
        sx={{
            py: 10,
            mx: 6,
            
        }}
        >

        <Card style={{padding:"20px"}}>
        <Stack direction={"row"}>
        <img src={companyImage} width={"500px"} style={{borderRadius:"10px"}}/>
        <div style={{marginLeft:"100px"}}>
        <h3>Sky Lake Drillers</h3>
        <p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15193.377413507145!2d31.053344738088793!3d-17.8224852407677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bb3b94aa89a5%3A0x71d979fb6ff2071d!2sSkylake%20Drilling%20%26%20Exploration!5e0!3m2!1sen!2szw!4v1709560853801!5m2!1sen!2szw" width="300" height="300" style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        <Stack direction={"row"} spacing={2}>
        <Button variant='contained'>View Business</Button>
        <Button variant='contained'>Contact</Button>
        <Button variant='contained'>Services</Button>
        </Stack>
        </div>
        </Stack>
        </Card>



        <Card style={{padding:"20px"}}>
        <Stack direction={"row"}>
        <img src={companyImage2} width={"500px"} style={{borderRadius:"10px"}}/>
        <div style={{marginLeft:"100px"}}>
        <h3>The Moment Images</h3>
        <p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15193.491696169436!2d31.039823395274773!3d-17.821144680267498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a562716e11e1%3A0xcbc0003f1e2388a8!2sThe%20Moment%20Images!5e0!3m2!1sen!2szw!4v1709561279219!5m2!1sen!2szw" width="300" height="300" style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        <Stack direction={"row"} spacing={2}>
        <Button variant='contained'>View Business</Button>
        <Button variant='contained'>Contact</Button>
        <Button variant='contained'>Services</Button>
        </Stack>
        </div>
        </Stack>
        </Card>


        
        <Card style={{padding:"20px"}}>
        <Stack direction={"row"}>
        <img src={companyImage3} width={"500px"} style={{borderRadius:"10px"}}/>
        <div style={{marginLeft:"100px"}}>
        <h3>Litch Energy</h3>
        <p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.858108583542!2d31.03093407484029!3d-17.79836448316061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a521776401a9%3A0x3d61896dd679f22a!2sLicht%20Energy!5e0!3m2!1sen!2szw!4v1709561514027!5m2!1sen!2szw" width="300" height="300" style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        <Stack direction={"row"} spacing={2}>
        <Button variant='contained'>View Business</Button>
        <Button variant='contained'>Contact</Button>
        <Button variant='contained'>Services</Button>
        </Stack>
        </div>
        </Stack>
        </Card>
          
        </Stack>
        </div>
    )
}

export default Companies;