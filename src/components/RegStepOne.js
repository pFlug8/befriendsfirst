import { useState } from "react";
import { Navigate } from 'react-router-dom';
import { Stack } from "@mui/system";
import { Button, TextField } from "@mui/material";

import { API_URL } from '../config';

export const RegStepOne = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        passwd: '',
        cnfrm_passwd: '',
        userId: null,
    })

    const handleChange = (e) => {
        const value = e.target.value;
        return setState({...state, [e.target.name]: value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const newUser = { ...state };

        await fetch(`${API_URL}/create_user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
        .then(response => response.json()) // sends back document ID
        .then(data => setState({ userId: data.insertedId })) // <-- email verification happens here??
        .catch(err => {
            window.alert(err);
            return;
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <Stack
                spacing={2}
                sx={{
                }}>
                <TextField 
                    autoFocus={true}
                    id='name'
                    label='Name'
                    maxLength='30'
                    name='name'
                    onChange={handleChange}
                    value={state.name}
                />
                <TextField 
                    id='email'
                    label='Email'
                    maxLength='320'
                    name='email'
                    onChange={handleChange}
                    type='email'
                    value={state.email}
                />
                <TextField 
                    autoComplete='off'
                    id='passwd'
                    label='Password'
                    maxLength={5}
                    minLength={5}
                    name='passwd'
                    onChange={handleChange}
                    type='password'
                    value={state.passwd}
                />
                <TextField 
                    autoComplete='off'
                    id='cnfrm_passwd'
                    label='Confirm Password'
                    maxLength={5}
                    minLength={5}
                    name='cnfrm_passwd'
                    onChange={handleChange}
                    type='password'
                    value={state.cnfrm_passwd}
                />
                <Button type='submit'>Create New User</Button>
            </Stack>
            {/* {state.userId && <Navigate to='/register/two' state={{ userId: state.userId }}/>} NEEDS TO RENDER A MSG TO CONFIRM EMAIL */}
        </form>
    )
}