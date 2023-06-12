import {  CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import theme from './theme';
import {  RouterProvider } from 'react-router-dom';
import Snowfall from 'react-snowfall';
import snowImage from './Assets/snow-png-28319.png';
import snowImg from './Assets/snowflakes-png-41259.png';
import { routes } from './config/router';

const snowflake1 = document.createElement('img')
snowflake1.src = snowImage
const snowflake2 = document.createElement('img')
snowflake2.src = snowImg
const ImgSnow = [snowflake1, snowflake2]

export default function App() {
    return(
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                
                <Snowfall
                    images={ImgSnow}
                    snowflakeCount='150'
                />
                <RouterProvider router={routes}/>
                {/* <Routes>
                    {
                        routes.map(route=>(
                            <Route key={route.path} path={route.path} element={route.element}/>
                        ))
                    }
                </Routes> */}
            </ThemeProvider>
        </>
    )
};
