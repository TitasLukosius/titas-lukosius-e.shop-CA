import React, { useState } from 'react';
import FormLayout from '../components/form/FormLayout';
import Form from '../components/form/Form';

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('titas');
    }

    const title = 'Sign Up';

    const inputs = [
        {
            id: 1, name: 'username', type: 'text', placeholder: 'username'
        }, 
        {
            id: 2, name: 'password', type: 'password', placeholder: 'password'
        },
        {
            id: 3, name: 'repeatPassword', type: 'password', placeholder: 'repeat password'
        },
    ];
    return (
        <FormLayout>
            <Form inputs={inputs} title={title} onSubmit={handleRegister}/>
        </FormLayout>
    )
}

export default Register
