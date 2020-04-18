import React from 'react';

function Signupbox() {
    return (

        <div >

            <div className='field'>
                <label className='label'>Email</label>
                <div className='control'>
                    <input type='email' className='input' />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Password</label>
                <div className='control'>
                    <input type='password' className='input' />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Re-Enter password</label>
                <div className='control'>
                    <input type='password' className='input' />
                </div>
            </div>

        </div>
    )
}

export default Signupbox;