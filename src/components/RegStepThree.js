import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import {
    Button,
    TextField, 
    Stack } from "@mui/material";
import { ImageUpload } from "./ImageUpload";
import { ColorPickerGfg } from "./ColorPicker";

import { API_URL } from "../config";


export const RegStepThree = (props) => {
    const state = useLocation().state;

    const [userData, setUserData] = useState({ ...state }); 

    const [navigateDash, setNavigateDash] = useState(false);

    const [navId, setNavId] = useState();
    console.log(userData)
    const handleChange = (e) => {
        const value = e.target.value;
        return setUserData({...userData, [e.target.name]: value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const { id, ...userUpdate } = userData; // dont send id field in update object
        console.log(JSON.stringify(userUpdate))//////////////////////

        await fetch(`${API_URL}/update_user/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userUpdate),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setNavId(id)
            setNavigateDash(data.acknowledged)
        })
        .catch(err => {
            window.alert(err);
            return;
        });
    }

    return (
        <div>

            <form onSubmit={onSubmit}>
                <Stack
                    spacing={2}
                    sx={{
                    }}
                >
                    <TextField
                        id='about'
                        label='About Me'
                        multiline
                        maxLength='25000'
                        name='about'
                        onChange={handleChange}
                        value={userData.about}
                    />
                    <p>Image</p>
                    <ImageUpload />
                    <p>BK Color</p>
                    <ColorPickerGfg />
                    <p>song</p>
                    <Button type='submit' variant='contained'>Register</Button>
                </Stack>
            </form>
            {navigateDash && <Navigate to={`/dashboard/${navId}`} />}
        </div>
    )
}