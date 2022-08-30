

const Register = (props) => {

    //const onSubmit = props.handleSubmit;

    return (
        <div>
            <h1>Register</h1>
            <form action='#' method='post'>

                <fieldset>
                    <legend>User Info</legend>
                    <div>
                        <label htmlFor='name'>First Name</label>
                        <input autoComplete='off' autoFocus className='' id='name' maxlength='30' type='text' />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input autoComplete="off" className='' id='email' maxLength='320' type='email' />
                    </div>
                    <div>
                        <label htmlFor='passwd'>Password</label>
                        <input autoComplete="off" className='' id='passwd' maxLength='5' minLength='5' type='password' />
                    </div>
                    <div>
                        <label htmlFor='cnfrm_passwd'>Confirm Password</label>
                        <input autoComplete="off" className='' id='cnfrm_passwd' maxLength='5' minLength='5' type='password' />
                    </div>

                    <div>
                        <label htmlFor='zip'>Zip</label>
                        <input autoComplete="off" className='' id='zip' pattern='[0-9]{5}' type='text' />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Gender</legend> 
                    <div>
                        <label htmlFor='male'>Male</label>
                        <input className='' id='male' name='gender' type='radio' value='male'/>
                    </div>
                    <div>
                        <label htmlFor='female'>Female</label>
                        <input className='' id='female' name='gender' type='radio' value='female'/>
                    </div>
                    <div>
                        <label htmlFor='transmale'>Trans-Male</label>
                        <input className='' id='transmale' name='gender' type='radio' value='transmale'/>
                    </div>
                    <div>
                        <label htmlFor='transfemale'>Trans-Female</label>
                        <input className='' id='transfemale' name='gender' type='radio' value='transfemale'/>
                    </div>
                    <div>
                        <label htmlFor='other'>Other</label>
                        <input className='' id='other' name='gender' type='radio' value='other'/>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Looking For</legend> 
                    <div>
                        <label htmlFor='lkf_male'>Male</label>
                        <input className='' id='lkf_male' name='lkf' type='checkbox' value='male'/>
                    </div>
                    <div>
                        <label htmlFor='lkf_female'>Female</label>
                        <input className='' id='lkf_female' name='lkf' type='checkbox' value='female'/>
                    </div>
                    <div>
                        <label htmlFor='lkf_transmale'>Trans-Male</label>
                        <input className='' id='lkf_transmale' name='lkf' type='checkbox' value='transmale'/>
                    </div>
                    <div>
                        <label htmlFor='lkf_transfemale'>Trans-Female</label>
                        <input className='' id='lkf_transfemale' name='lkf' type='checkbox' value='transfemale'/>
                    </div>
                    <div>
                        <label htmlFor='lkf_other'>Other</label>
                        <input className='' id='lkf_other' name='lkf' type='checkbox' value='other'/>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Profile</legend>
                    <p>img</p>
                    <p>bkgcolor</p>
                    <label htmlFor='about'>About Me</label>
                    <textarea autoComplete='off' id='about' maxLength='25000' name='about'>

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
*/