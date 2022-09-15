import { Link, Routes, Route, Outlet } from "react-router-dom";
import { Box } from '@mui/material';
import { PageOne } from "../components/RegStepOne";
import { PageTwo } from "../components/RegStepTwo";

export const Register_t = (props) => {

    return (
        <Box sx={{

        }}>
            <h1>User Registration</h1>
            <Outlet />
        </Box>
    )
}