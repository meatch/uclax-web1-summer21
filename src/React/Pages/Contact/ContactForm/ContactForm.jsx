import React from 'react';
import styled from 'styled-components';

import UniversalForm from 'React/Components/UniversalForm/UniversalForm.jsx'

const ContactForm = () => {

    const defaultFormData = {
        fullname: 'Dummy Data',
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