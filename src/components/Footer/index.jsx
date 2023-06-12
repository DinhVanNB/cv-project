import { Box, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = ()=>{
    return(
        <>
            <Stack
                p='1vmin' 
                mt='8vmin'
                boxShadow='0px 5px 10px 0px rgba(20,20,20,0.5)'
                width='100%' 
                justifyContent='space-around' 
                alignItems='center'
                direction={{sm:'column' , md:'row'}} 
                spacing={{sm:2, md:3 }} 

            >
                <Typography variant="h6"> Developed by Dang Dinh Van </Typography>
                <Typography variant="h6">Copyright © 2023</Typography>
                <Box>
                    <IconButton style={{color:'whitesmoke'}}>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton style={{color:'whitesmoke'}}>
                        <GoogleIcon/>
                    </IconButton>
                    <IconButton style={{color:'whitesmoke'}}>
                        <FacebookIcon/>
                    </IconButton>
                </Box>
               
            </Stack>
        </>
    )
}

export default Footer;