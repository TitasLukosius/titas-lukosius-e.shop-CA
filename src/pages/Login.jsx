
import FormLayout from '../components/form/FormLayout';
import Form from '../components/form/Form';
import React from 'react';

const Login = () => {

    const title = 'Login';

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('titas');
    }

    const inputs = [
        {
            id: 1, name: 'Username', type: 'text', placeholder: 'username'
        }, 
        {
            id: 2, name: 'Password', type: 'password', placeholder: '********'
        }
    ];
    
    return (
        <FormLayout>
            <Form inputs={inputs} title={title} onSubmit={handleLogin} />
        </FormLayout>
    )
}

export default Login;
