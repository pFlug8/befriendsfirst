import {
    Button,
    Link,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

export const Login = () => {
    const paperStyle={
        height:'70vh',
        margin:"20px auto",
        padding :20,
        width:280, }

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
                    <Link href="/register/one"> Create an Account</Link>
                </Typography>
            </Stack>
            </Paper>
        </Grid>
        </form>
    )
}