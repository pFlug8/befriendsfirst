import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
    Button,
    TextField, 
    Stack } from "@mui/material";
import { ImageUpload } from "./ImageUpload";
import { ColorPickerGfg } from "./ColorPicker";


export const RegStepThree = (props) => {
    const userData = useLocation().state;

    const [state, setState] = useState({ ...userData });

    console.log(state);

    const handleChange = (e) => {
        const value = e.target.value;
        return setState({...state, [e.target.name]: value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const userData = { ...state };
        console.log(JSON.stringify(userData))

        await fetch("http://localhost:5000/update_user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            window.alert(err);
            return;
        });
        window.alert(`User profile for ${state.userId} successfully updated`)
    }

    return (
        <form onSubmit={onSubmit}>
            <Stack
                spacing={2}
                sx={{
                    width: 300,
                }}
            >
                <TextField
                    id='about'
                    label='About Me'
                    multiline
                    maxLength='25000'
                    name='about'
                    onChange={handleChange}
                    value={state.about}
                />
                <p>Image</p>
                <ImageUpload />
                <p>BK Color</p>
                <ColorPickerGfg />
                <p>song</p>
                <Button type='submit' variant='contained'>Register</Button>
            </Stack>
        </form>
    )
}