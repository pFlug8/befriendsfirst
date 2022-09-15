import { NavLink } from  "react-router-dom";

export const Login = () => {
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}

    const btnstyle={margin:'8px 0'}
    return(
        <form>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
            <Stack 
                spacing={2}
                sx={{
                }}>
                <TextField label='Username' variant="outlined" fullWidth required/>
                <TextField label='Password' type='password' variant="outlined" fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                    <Link href="/register"> Create an Account</Link>
                </Typography>
            </Stack>
            </Paper>
        </Grid>
        </form>
    )
}