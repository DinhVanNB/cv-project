import {  Box, IconButton, Container, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import MenuOutlined from '@mui/icons-material/MenuOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, NavLink } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import BrowserUpdatedOutlinedIcon from '@mui/icons-material/BrowserUpdatedOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import {  useState } from "react";
import { router } from "../../config/router";

const Navbar = ()=>{
    const [show, setShow] = useState({})

    const handleScrollSetShowNavbar =()=>{
        window.scrollY > 64 ?  setShow({ position:'fixed', display:'block', width:'100vw'}) : setShow({display:'block', position:'relative'}) 
    }

    window.addEventListener('scroll', handleScrollSetShowNavbar)

    

    return(
        <Box  sx={{...show,background:`#8b8282`, boxShadow: '0px 2px 10px 0px rgba(9,20,10,0.2)',top:'0', left:'0'}}>
            <Container maxWidth='lg'  >
                <Toolbar>
                    <IconButton edge='start' sx={{display: {sm:'none'}}}>
                        <MenuOutlined/>
                    </IconButton>
                    <Box sx={{flexGrow:1 ,display:{xs:'none', sm:'block'}}}>
                        <Link to='https://github.com/DinhVanNB' target='_blank' style={{display:'flex', textDecoration:'none'}} >
                            <GitHubIcon style={{color:'whitesmoke', alignSelf:'baseline'}} />
                            <Typography sx={{display:'inline-block', ml:'1vmin'}} variant="h5">DinhVanNB</Typography>
                        </Link>
                    </Box>
                    <Stack flexDirection='row' gap={2}  >
                        <NavLink to={router.home.path} className={({ isActive}) =>isActive?'navbarActive':'noneActive'} >
                            <MenuItem   >
                                <HomeOutlinedIcon style={{color:'inherit'}}/>
                                <Typography ml='1vmin' fontSize='16px' variant="inherit">Home</Typography>
                            </MenuItem>
                        </NavLink>
                        <NavLink to={router.about.path} className={({ isActive}) =>isActive?'navbarActive':'noneActive'}>
                            <MenuItem>
                                <PersonPinOutlinedIcon style={{color:'inherit'}}/>
                                <Typography ml='1vmin' fontSize='16px' variant="inherit">About</Typography>
                            </MenuItem>
                        </NavLink>
                        <NavLink to={router.project.path}  className={({ isActive}) =>isActive?'navbarActive':'noneActive'}>
                            <MenuItem >
                                <TopicOutlinedIcon style={{color:'inherit'}}/>
                                <Typography ml='1vmin' fontSize='16px' variant="inherit">Project</Typography>
                            </MenuItem>
                        </NavLink>
                        <NavLink to={router.download.path} className={({ isActive}) =>isActive?'navbarActive':'noneActive'}>
                            <MenuItem>
                                <BrowserUpdatedOutlinedIcon style={{color:'inherit'}}/>
                                <Typography ml='1vmin' fontSize='16px' variant="inherit">Download</Typography>
                            </MenuItem>
                        </NavLink>
                    </Stack>
                </Toolbar>
            </Container>
        </Box>
    )
};

export default Navbar;