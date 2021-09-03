import React from 'react';
import styled from 'styled-components';

import UniversalForm from 'React/Components/UniversalForm/UniversalForm.jsx'

const ContactForm = () => {

    const defaultFormData = {
        apiUrl: '/email/send',
        hasSubmitted: false,
        request: {},
        response: {},
        message: '',

        controls: [
            {
                id: 'fullname',
                label: 'Full Name',
                value: 'Mitch Gohman',
                type: 'text',
                validation: {
                    isValid: true,
                    rules: ['required'],
                    message: '',
                }
            },
            {
                id: 'email',
                label: 'Email',
                value: 'meatch@me.com',
                type: 'text',
                validation: {
                    isValid: true,
                    rules: ['required', 'email'],
                    message: '',
                }
            },
            {
                id: 'message',
                label: 'Message',
                value: 'This is my really cool message.',
                type: 'textarea',
                validation: {
                    isValid: true,
                    rules: ['required'],
                    message: '',
                }
            },
        ]
    }

    return (
        <ContactFormStyled className='ContactForm'>
            <UniversalForm defaultFormData={ defaultFormData } />
        </ContactFormStyled>
    );
}

export default ContactForm;

const ContactFormStyled = styled.div`
    padding: 20px;
`;