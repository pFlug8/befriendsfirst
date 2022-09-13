import { Box } from "@mui/system"

const TopBar = (props) => {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <p>Logo Here</p>
            <h3>Be Friends First App</h3>
            <p>{props.isLoggedIn ? props.username : 'login/register'}</p>
        </Box>
    )
}

export default TopBar;