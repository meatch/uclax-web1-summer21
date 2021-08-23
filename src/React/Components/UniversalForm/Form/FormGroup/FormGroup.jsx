import React from 'react';
import styled from 'styled-components';

import FormLabel from './FormLabel.jsx';
import FormControl from './FormControl.jsx';

const FormGroup = () => {

    return (
        <FormGroupStyled className='FormGroup'>
            <FormLabel />
            <FormControl />
        </FormGroupStyled>
    );
}

export default FormGroup;

const FormGroupStyled = styled.div`

`;