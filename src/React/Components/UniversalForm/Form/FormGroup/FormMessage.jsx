import React from 'react';
import styled from 'styled-components';

const FormMessage = ({control}) => {

    const message  = control.validation.message;

    if (message.length < 1) { return ''; }

    return (
        <FormMessageStyled className='FormMessage'>
            { message }
        </FormMessageStyled>
    );
}

export default FormMessage;

const FormMessageStyled = styled.div`
    color: #b10202;
    padding: 5px 0px;
    font-weight: bold;
`;