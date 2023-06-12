import { Box } from '@mui/material';
import GitHubCalendar from 'react-github-calendar';

const Calender =()=>{

    return(
        <Box >
            <GitHubCalendar username='DinhVanNB' colorScheme='light' style={{color:'white', margin:'1px auto'}}/>
        </Box>
    )
};

export default Calender;