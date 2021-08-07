import React from 'react'

export default function Login() {
    return (
        <div>
            <div>
                <form>
                    <input type='text' placeholder='Username'></input>
                    <br />
                    <input type='text' placeholder='Password'></input>
                </form>
            </div>
            <div>
                <button>Login</button>
            </div>
            <div>
                <p>Please Login with your Username and Password</p>
            </div>
            
        </div>
    )
}
