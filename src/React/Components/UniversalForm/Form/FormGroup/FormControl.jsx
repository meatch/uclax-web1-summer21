import React from 'react';
import styled from 'styled-components';

import Input from '../Controls/Input.jsx';

const FormControl = () => {

    return (
        <FormControlStyled className='FormControl'>
            <Input />
        </FormControlStyled>
    );
}

export default FormControl;

const FormControlStyled = styled.div`

`;