import React from 'react'
import { Grid, Paper, Button } from '@mui/material'

const Landing = () => {
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}

    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <h1>Welcome</h1>
                <Button type='link' color='primary' variant="contained" style={btnstyle} fullWidth href="/login">Login</Button>
                <Button type='link' color='primary' variant="contained" style={btnstyle} fullWidth href="/register">Register</Button>
            </Paper>
        </Grid>
    )
}
export default Landing;








/*
import { Link } from 'react-router-dom';


const Landing = () => {
    return (
        <div>
            <h1>I'm the first page</h1>
            <Link to='/login'>Login</Link>
            <Link to='/register/one'>Register</Link>
        </div>
    )
}

export default Landing;
*/