import { useState } from 'react';
import {ThemeProvider, createTheme, Switch } from '@mui/material';
import { useEffect, useRef } from 'react';

 export function DarkMode( props ) {
    const [darkMode, setDarkMode] = useState(false);
    let theme = useRef(createTheme({
        palette: {
            type: darkMode ? 'light' : 'dark',
        },
    }));
    useEffect(() => {
        theme.current = createTheme({
            palette: {
                type: darkMode ? 'light' : 'dark',
                mode: darkMode ? 'light' : 'dark',
            },
        });
        console.log(theme.current);


    }, [darkMode] ) 

    return (
        <ThemeProvider theme={theme.current}>
            <Switch checked={darkMode} onChange={() => {setDarkMode(!darkMode); 
                console.log( darkMode )}} />
            { props.children }
        </ThemeProvider>
    )
}
