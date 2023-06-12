import {   Avatar,Box, Grid, Link, Stack, Typography } from "@mui/material"
import bgWebDeveloper from '../Assets/web-developer.png'
import { Link as LinkRouter} from "react-router-dom";
import { router } from "../config/router";

const HomePage = ()=>{

    return(
        <>
            <Typography  mb={6} textAlign='center'  variant="h1" textTransform='uppercase'> Welcome to my CV project 💻!</Typography>
            <Box mt='15vmin'>
                <Grid container>
                    <Grid mt='15vmin' item xs={12} lg={7}>
                        <Stack sx={{textIndent:'35px'}} gap={3}>
                            <Typography variant="h2">Tôi là <i style={{color:'#a865f0'}}> Đặng Đình Vân </i> </Typography>
                            <Typography variant="h2">Ứng viên <i style={{color:'#a865f0'}}>Front-End Developer</i></Typography>
                        </Stack>
                       
                    </Grid>
                    <Grid textAlign='center' item xs={12} lg={5} >
                        <img
                            src={bgWebDeveloper}
                            alt="web developer"
                            style={{ maxHeight:'450px', height:'100vmin'}}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box mt={20} >
                <Typography m={2} textAlign='center' variant="h3" textTransform='uppercase'> Giới thiệu sơ lược về bản thân </Typography>
                <Grid container>
                    <Grid item xs={12} lg={9}>
                        <Stack sx={{textIndent:'35px'}} gap={1} textAlign='justify' letterSpacing={1}>
                            <Typography variant="h4"> 
                                Là một người điềm tĩnh, chăm chỉ, yêu thích công nghệ, cập nhật thông tin, tin tức, khả năng tự tìm tòi học hỏi,
                                hứng thú sáng tạo trong việc tìm ra giải quyết công việc với lập trình.
                            </Typography>
                            
                            <Typography variant="h4"> 
                                Theo học ngành điện-điện tử nên các công việc trước đây của tôi đa số đều không được tiếp xúc và liên quan gì đến lập trình, 
                                cho đến mấy năm gần đây khi làm nhân viên lập trình PLC, việc tìm tòi sáng tạo giải quyết công việc với lập trình càng làm tôi thấy thích thú.
                                Sau khi đạt được một số thành tựu nhỏ trong việc tự học và học tập tại Codegym tôi đã chọn chuyển hướng công việc theo con đường lập trình. 
                            </Typography>
                            <Link component={LinkRouter} to={router.about.path} underline='hover'  >
                                <Typography variant="h4">Xem chi tiết ...</Typography>
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid  item xs={12} lg={3} >
                        <Stack mt={5} alignItems='center'>
                            <Avatar sx={{width:'150px', height:'150px'}}/>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default HomePage;