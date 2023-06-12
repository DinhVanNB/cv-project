import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";


const MainLayout =()=>{

    return(
        <>
            <ScrollTop/>
            <Navbar/>
            <Container sx={{mt:'6vmin',minHeight:'100vh' }} maxWidth='lg'>
                <Outlet/>
            </Container>
            <Footer/>
        </>
       
    )
};

export default MainLayout;