import React from 'react'
import { useState} from 'react';

function Register() {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let user = {
        name: name,
        username: username,
        email: email,
        password: password
    }

  return (
    <div>
        <div>
            <h2>Register</h2>
            <form>
                <input type='text' placeholder='Name' name='name' value={user.name} 
                onChange={(e) => setName(e.target.value)}></input>
                <input type='text' placeholder='Username' name='username' value={user.username} 
                onChange={(e) => setUsername(e.target.value)}></input>
                <input type='email' placeholder='Email' name='email' value={user.email} 
                onChange={(e) => setEmail(e.target.value)}></input>
                <input type='password' placeholder='Password' name='password' value={user.password} 
                onChange={(e) => setPassword(e.target.value)}></input>
            </form>
        </div>
    </div>
  )
}

export default Register;