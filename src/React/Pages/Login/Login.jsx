import React from 'react';
import styled from 'styled-components';

import UniversalForm from 'React/Components/UniversalForm/UniversalForm.jsx'

const Login = () => {

    const defaultFormData = {
        apiUrl: '/user/login',
        hasSubmitted: false,
        request: {},
        response: {},
        message: '',

        controls: [
            {
                id: 'username',
                label: 'Username',
                value: 'meatch@me.com',
                type: 'text',
                validation: {
                    isValid: true,
                    rules: ['required', 'email'],
                    message: '',
                }
            },
            {
                id: 'password',
                label: 'Password',
                value: '123456',
                type: 'password',
                validation: {
                    isValid: true,
                    rules: ['required'],
                    message: '',
                }
            },
        ]
    }

    return (
        <LoginStyled className='Login'>
            <h1>Login page</h1>
            <UniversalForm defaultFormData={ defaultFormData } />
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`

`;