import React, { useState } from 'react';
// import { useNavigate } from 'react-router';

const Register = (props) => {

    const [form, setForm] = useState({
        name: '',
        passwd: '',
        email: '',
        zip: '',
        ias: '',
        lkf: '',
        about: '',
        bk_color: '',
        jam: ''
    });
    //const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            console.log(form);
            return { ...prev, ...value };
        });
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const newUser = { ...form };
        
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

        // setForm({
        //     name: '',
        //     passwd: '',
        //     email: '',
        //     zip: '',
        //     ias: '',
        //     lkf: '',
        //     about: '',
        //     bk_color: '',
        //     jam: ''
        // });
        //navigate("/");
    }


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <fieldset>
                    <legend>User Info</legend>
                    <div>
                        <label htmlFor='name'>First Name</label>
                        <input autoComplete='off' autoFocus className='' id='name' maxLength='30' name="name" onChange={e => updateForm({ name: e.target.value })} type='text' />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input autoComplete="off" className='' id='email' maxLength='320' name="email" onChange={e => updateForm({ email: e.target.value })} type='email' />
                    </div>
                    <div>
                        <label htmlFor='passwd'>Password</label>
                        <input autoComplete="off" className='' id='passwd' maxLength='5' name="passwd" minLength='5' onChange={e => updateForm({ passwd: e.target.value })} type='password' />
                    </div>
                    <div>
                        <label htmlFor='cnfrm_passwd'>Confirm Password</label>
                        <input autoComplete="off" className='' id='cnfrm_passwd' maxLength='5' minLength='5' type='password' />
                    </div>

                    <div>
                        <label htmlFor='zip'>Zip</label>
                        <input autoComplete="off" className='' id='zip' name="zip" onChange={e => updateForm({ zip: e.target.value })} pattern='[0-9]{5}' type='text' />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Gender</legend> 
                    <div>
                        <label htmlFor='male'>Male</label>
                        <input className='' id='male' name='ias' onChange={e => updateForm({ ias: e.target.value })} type='radio' value='male'/>
                    </div>
                    <div>
                        <label htmlFor='female'>Female</label>
                        <input className='' id='female' name='ias' onChange={e => updateForm({ ias: e.target.value })} type='radio' value='female'/>
                    </div>
                    <div>
                        <label htmlFor='transmale'>Trans-Male</label>
                        <input className='' id='transmale' name='ias' onChange={e => updateForm({ ias: e.target.value })} type='radio' value='transmale'/>
                    </div>
                    <div>
                        <label htmlFor='transfemale'>Trans-Female</label>
                        <input className='' id='transfemale' name='ias' onChange={e => updateForm({ ias: e.target.value })} type='radio' value='transfemale'/>
                    </div>
                    <div>
                        <label htmlFor='other'>Other</label>
                        <input className='' id='other' name='ias' onChange={e => updateForm({ ias: e.target.value })} type='radio' value='other'/>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Looking For</legend> 
                    <div>
                        <label htmlFor='lkf_male'>Male</label>
                        <input className='' id='lkf_male' name='lkf' onChange={e => updateForm({ lfk: e.target.value })} type='checkbox' value='male'/>
                    </div>
                    <div>
                        <label htmlFor='lkf_female'>Female</label>
                        <input className='' id='lkf_female' name='lkf' onChange={e => updateForm({ lfk: e.target.value })} type='checkbox' value='female'/>
                    </div>
                    <div>
                        <label htmlFor='lkf_transmale'>Trans-Male</label>
                        <input className='' id='lkf_transmale' name='lkf' onChange={e => updateForm({ lfk: e.target.value })} type='checkbox' value='transmale'/>
                    </div>
                    <div>
                        <label htmlFor='lkf_transfemale'>Trans-Female</label>
                        <input className='' id='lkf_transfemale' name='lkf' onChange={e => updateForm({ lfk: e.target.value })} type='checkbox' value='transfemale'/>
                    </div>
                    <div>
                        <label htmlFor='lkf_other'>Other</label>
                        <input className='' id='lkf_other' name='lkf' onChange={e => updateForm({ lfk: e.target.value })} type='checkbox' value='other'/>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Profile</legend>
                    <p>img</p>
                    <p>bkgcolor</p>
                    <label htmlFor='about'>About Me</label>
                    <textarea autoComplete='off' id='about' maxLength='25000' name='about' onChange={e => updateForm({ about: e.target.value })}>

                    </textarea>
                    <p>song</p>
                </fieldset>
                <button type='submit'>Register</button>
            </form>
        </div>
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

commit notes: (DELETE ME)
added controlled component logic
added to all inputs the onchange event and value attributes
changed name='gender' to name='lkf' - need to add a gender text field input

plus readme commit

plus dev server folder commit
*/