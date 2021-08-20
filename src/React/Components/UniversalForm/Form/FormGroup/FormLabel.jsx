import React from 'react';
import styled from 'styled-components';

const FormLabel = () => {

    return (
        <FormLabelStyled className='FormLabel'>
            <label htmlFor="first">First Name:</label>
        </FormLabelStyled>
    );
}

export default FormLabel;

const FormLabelStyled = styled.div`

`;