
import FormLayout from '../components/form/FormLayout';
import Form from '../components/form/Form';
import React from 'react';

const Login = () => {

    
    const handleLogin = (e) => {
        e.preventDefault();
        console.log('titas');
    }
    
    const title = 'Log in';

    const inputs = [
        {
            id: 1, name: 'username', type: 'text', placeholder: 'username'
        }, 
        {
            id: 2, name: 'password', type: 'password', placeholder: 'password'
        }
    ];
    
    return (
        <FormLayout>
            <Form inputs={inputs} title={title} onSubmit={handleLogin} />
        </FormLayout>
    )
}

export default Login;
