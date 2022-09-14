import React, { useState } from 'react';
import { 
    Box, 
    Button, 
    Checkbox, 
    FormGroup, 
    FormControl, 
    FormControlLabel, 
    FormLabel, 
    Grid, 
    InputLabel, 
    MenuItem, 
    Stack, 
    TextField } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Accept } from './ImageUpload.js';
import { ColorPickerGfg } from './ColorPicker.js'

// import { fillForm } from '../util';
// import { useNavigate } from 'react-router';

const Register = (props) => {

    const [state, setState] = useState({
        name: '',
        email: '',
        passwd: '',
        zip: '', 
        gender: '',
        ias: '',
        lkf: [],
        about: ''
    })

    const handleChange = (evt) => {
        const value = evt.target.value;

        // checkbox input needs to be modeled as a list
        if (evt.target.type === 'checkbox') {
            let valueList = state[evt.target.name];
            if (evt.target.checked) {
                valueList.push(value)
                setState({
                    ...state, 
                    [evt.target.name]: valueList
                })
            } else {
                valueList = valueList.filter(e => e !== value)
                setState({
                    ...state,
                    [evt.target.name]: valueList
                })
            }

        // standard inputs
        } else {
            setState({...state, [evt.target.name]: value});
        }

    }

    //const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        const newUser = { ...state };
        
        await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
        .catch(err => {
            window.alert(err);
            return;
        });
        window.alert(`You have registered ${state.name}!`)
    }

    return (
        <Box sx = {{
            m: 3,
        }}>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <Stack 
                    spacing={2}
                    sx={{
                        width: 300
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
                        value={state.email}
                        type='email'
                    />
                    <TextField 
                        autoComplete='off'
                        id='passwd'
                        label='Password'
                        maxLength={5}
                        minLength={5}
                        name='passwd'
                        onChange={handleChange}
                        value={state.passwd}
                        type='password'
                    />
                    <TextField 
                        autoComplete='off'
                        id='cnfrm_passwd'
                        label='Confirm Password'
                        maxLength={5}
                        minLength={5}
                        // validation
                        type='password'
                    />
                    <TextField 
                        autoComplete='off'
                        id='zip'
                        label='Zip'
                        onChange={handleChange}
                        name='zip'
                        pattern='[0-9]{5}'
                        value={state.zip}
                    />
                    <TextField
                        id='gender'
                        label='Gender'
                        maxLength={30}
                        name='gender'
                        onChange={handleChange}
                        value={state.gender}
                    />
                    <FormControl>
                        <InputLabel id="iasLabel">Identifying As</InputLabel>
                        <Select
                            id='ias'
                            label='Identifying As'
                            labelId="iasLabel"
                            name='ias'
                            onChange={handleChange}
                            value={state.ias}
                        >
                            <MenuItem value='male'>Male</MenuItem>
                            <MenuItem value='female'>Female</MenuItem>
                            <MenuItem value='nonbinary'>Non-Binary</MenuItem>
                            <MenuItem value='other'>Other</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl component='fieldset'>
                        <FormLabel component='legend'>Looking For</FormLabel>
                        <FormGroup>
                            <FormControlLabel 
                                control={
                                    <Checkbox
                                        name='lkf' 
                                        onChange={handleChange}
                                        value='male' 
                                    />}
                                label='Male'
                            />
                            <FormControlLabel 
                                control={
                                    <Checkbox 
                                        name='lkf'
                                        onChange={handleChange}
                                        value='female' 
                                    />}
                                label='Female'
                            />
                            <FormControlLabel 
                                control={
                                    <Checkbox 
                                        name='lkf'
                                        onChange={handleChange}
                                        value='nonbinary' 
                                    />}
                                label='Non-Binary'
                            />
                            <FormControlLabel 
                                control={
                                    <Checkbox 
                                        name='lkf'
                                        onChange={handleChange}
                                        value='other' 
                                    />}
                                label='Other'
                            />
                        </FormGroup>
                    </FormControl>
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
                    <Accept></Accept>
                    <p>BK Color</p>
                    <ColorPickerGfg></ColorPickerGfg>
                    <p>song</p>
                    <Button type='submit' variant='contained'>Register</Button>
                </Stack>
            </form>
            {/* <button onClick={fillForm}>Fill</button> */}
        </Box>
    )
}

export default Register;

/* ************ */
/*     TODO     */
/* ************ */
/* 
• aria attributes on form inputs, legends, labels

• create input fields for BK_COLOR and JAM before testing DB

• make confirm password a controlled field (update state onChange)

• implement client-side validation


*/