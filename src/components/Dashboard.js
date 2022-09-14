import Box from '@mui/material/Box';

export const Dashboard = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <h1>I'm a Dashboard!</h1>
            <p>more stuff</p>
            <p>In a column</p>
        </Box>
    )
}