import React, { useState } from 'react';
import Signupbox from './subComponents/Signupbox';
import Loginbox from './subComponents/Loginbox';
function Login() {

    const [LogSign, onLogSignChange] = useState('Signup');
    let form;
    if (LogSign === 'Signup') {
        form = <Signupbox></Signupbox>
    } else if (LogSign === 'Login') {
        form = <Loginbox></Loginbox>
    }
    return (
        <div>
            <div className='level'></div>
            <div className='tile is-ancestor'>

                <div className='tile is-parent is-3 is-hidden-mobile'></div>
                <div className='tile box is-parent is-6'>

                    <div className='tile is-child is-6'>
                        <div className='level'>
                            <p className='level-item' onClick={(e) => { onLogSignChange('Login') }}>Login</p>
                            <p className='level-item' onClick={(e) => { onLogSignChange('Signup') }}>Sign up</p>
                        </div>
                        {/* Place login and signup subComponents */}
                        {form}
                        <div className='level' />
                        <div className='level'>
                            <div className='buttons level-item'>
                                <button className='button is-link'>{LogSign} in with google</button>
                                <button className='button is-warning '>{LogSign}</button>
                            </div>
                        </div>
                    </div>
                    <div className='tile is-child is-6'>
                        {/* Image placement */}
                        <img className='' alt='Pic of nothing' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'></img>
                    </div>

                </div>
                <div className='tile is-link is-parent is-4'></div>
            </div>
        </div>
    );
}

export default Login;