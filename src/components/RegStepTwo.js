import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { 
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
} from "@mui/material";


export const RegStepTwo = () => {

    const { id } = useParams();

    const [navigateNext, setNavigateNext] = useState(false);

    const [userData, setUserData] = useState({
        id: id,
        ias: '',
        gender: '',
        lkf: [],
        zip: ''
    })

    const handleChange = (e) => {
        const value = e.target.value;

        // checkbox input needs to be modeled as a list
        if (e.target.type === 'checkbox') {
            let valueList = userData[e.target.name];
            if (e.target.checked) {
                valueList.push(value)
                setUserData({
                    ...userData, 
                    [e.target.name]: valueList
                })
            } else {
                valueList = valueList.filter(elem => elem !== value)
                setUserData({
                    ...userData,
                    [e.target.name]: valueList
                })
            }

        // standard inputs
        } else {
            setUserData({...userData, [e.target.name]: value});
        }

    }

    // const onSubmit = (e) => {
    //     e.preventDefault();

    //     const updateUser = { ...state };

    //     await fetch("http://localhost:5000/")
    // }

    return (
        <div>
            <Stack
                spacing={2}
                sx={{
                }}
            >
                <FormControl>
                    <InputLabel id="iasLabel">Identifying As</InputLabel>
                    <Select
                        id='ias'
                        label='Identifying As'
                        labelId="iasLabel"
                        name='ias'
                        onChange={handleChange}
                        value={userData.ias}
                    >
                        <MenuItem default value='male'>Male</MenuItem>
                        <MenuItem value='female'>Female</MenuItem>
                        <MenuItem value='nonbinary'>Non-Binary</MenuItem>
                        <MenuItem value='other'>Other</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id='gender'
                    label='Gender'
                    maxLength={30}
                    name='gender'
                    onChange={handleChange}
                    value={userData.gender}
                />
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
                    autoComplete='off'
                    id='zip'
                    label='Zip'
                    onChange={handleChange}
                    name='zip'
                    pattern='[0-9]{5}'
                    value={userData.zip}
                />
                <Button onClick={() => setNavigateNext(true)}>Next</Button>
            </Stack>
            {navigateNext && <Navigate to='/register/3' state={userData} />}
        </div>
    )
}