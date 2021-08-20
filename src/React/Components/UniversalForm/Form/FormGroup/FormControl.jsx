import React from 'react';
import styled from 'styled-components';

import Input from '../Controls/Input.jsx';

const FormControl = ({ inputName, handleUpdate }) => {

    return (
        <FormControlStyled className='FormControl'>
            <Input inputName={ inputName } handleUpdate={ handleUpdate } />
        </FormControlStyled>
    );
}

export default FormControl;

const FormControlStyled = styled.div`

`;