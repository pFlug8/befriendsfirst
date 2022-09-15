import { Outlet } from "react-router-dom";
import { Box, Paper } from '@mui/material';

export const Register = (props) => {

    return (
        <Box sx={{

        }}>
            <Paper elevation={10} style={{
                padding: 20,
                margin: '20px auto',
                width: 500
            }}>
                <h1>User Registration</h1>
                <Outlet />
            </Paper>
        </Box>
    )
}